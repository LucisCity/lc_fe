import {appVersionCommitId} from "./env";

/**
 * PWA app will use cache first for best loading performance and resource usage.
 * But CacheFirst prevent the app from updating to the latest version.
 * So we need to check the version of the app and reload the page if the version is different.
 *
 * This is a workaround for now.
 * - PWA cache strategy is CacheFirst
 * - PWA version is stored in version.json, require setting up version.json at build time
 * - PWA version is checked on every page load and app starting
 * - If the version is different, clean the service worker cache and reload the page to fetch & cache the latest version
 *
 * Setting up version.json at build time: see next.config.ts
 *
 * TODO: Configure service worker to Periodic sync to check for new version
 *
 * Test cases:
 * - [x] Check version on app starting
 * - [x] Check version on every page load
 * - [x] Reload the page if the version is different
 * - [x] Clean the service worker cache if the version is different
 * - [x] Do nothing if the version is the same
 * - [x] Change the images in public/images/logo and see if the new images are cached
 */
export default class PwaVersionHelper {
  // create singleton instance
  private static instance: PwaVersionHelper;

  // private constructor to prevent creating new instance
  private constructor() {}

  // static method to get the instance
  public static getInstance(): PwaVersionHelper {
    if (!PwaVersionHelper.instance) {
      PwaVersionHelper.instance = new PwaVersionHelper();
    }
    return PwaVersionHelper.instance;
  }

  public version: string = appVersionCommitId;
  public prevVersion = "N/A";

  async fetchVersionId() {
    const res = await fetch('/version.json?ts=' + Date.now());
    const data: { version: string, created: number } = await res.json();
    return data.version;
  }

  async cleanPwaCache() {
    // TODO:
    // if ('caches' in window) {
    //   caches.keys().then((names) => names.map(async (name) => await caches.delete(name)));
    // }
  }

  /**
   * @param onUpdated You might implement your own UI to notify user
   */
  // eslint-disable-next-line no-unused-vars
  async forceUpdateCache(onUpdated?: (from: string, to: string) => void) {
    await this.cleanPwaCache();
    await onUpdated?.(this.prevVersion, this.version);
    // reload app when user confirm
    window.location.reload();
  }

  // eslint-disable-next-line no-unused-vars
  async ensureNewestVersion(
    onUpdated?: (from: string, to: string) => void,
    onError?: (e: Error) => void,
  ) {
    const version = await this.fetchVersionId();
    console.log('{ensureNewestVersion} version: ', {
      upstream: version,
      local: this.version,
    });

    if (version !== this.version) {
      this.prevVersion = this.version;
      this.version = version;
      await this.forceUpdateCache(onUpdated);
    } else {
      onError?.(new Error('No new version'));
    }
  }
}
