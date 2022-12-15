import {useCallback, useEffect} from "react";
import {isClient} from "../utils/env";

let deferredPrompt: any;

/**
 * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen#what_does_a2hs_not_give_you
 */
/**
 *
 * @param userGuideUrl User will be redirected to this url if they're failed to install the app
 */
export default function useA2HS(userGuideUrl: string) {
  const promptInstallApp = useCallback(() => {
    if (!deferredPrompt) {
      //  const msg = `Cannot request app installation:
      //   • You've might installed it already
      //   • Try another browser
      //   • Visit our help center to get support.
      // `;
      //  enqueueSnackbar(msg, { variant: "warning" })
      isClient && window.open(userGuideUrl, '_blank');
      return;
    }

    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  }, [])

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const cb = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    };

    window.addEventListener("beforeinstallprompt", cb);
    return () => window.removeEventListener("beforeinstallprompt", cb)
  }, [])

  return {
    promptInstallApp
  }
}
