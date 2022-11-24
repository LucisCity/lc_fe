export const isClient = typeof window !== "undefined";
export const isDevMode = process.env.NODE_ENV === "development";
export const isClientDevMode = isDevMode && isClient;

export const appEnv = "APP_ENV"; // This will be override in compile phase by webpack
export const appOrigin = isClient ? window.location.hostname : "";

console.log('{} appEnv, isClient, isDevMode, isClientDevMode: ', appEnv, isClient, isDevMode, isClientDevMode);