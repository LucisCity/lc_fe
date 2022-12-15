{
  /* eslint-disable max-len */
}
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode, useMediaQuery } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import themeSetup from "../theme";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apolo.util";
import NotistackWrapper from "../components/common/snackbar";
import { ErrorBoundary } from "../components/layout/error_boundary";
import Layout from "../components/layout";

// font
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StoreProvider } from "../components/layout/store_provider";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<PaletteMode | null | undefined>(() => {
    // for the sake of solving this issues
    // ("ReferenceError: localStorage is not defined")
    if (typeof window !== "undefined") {
      const localMode = localStorage.getItem("mode");
      if (localMode === "light" || localMode === "dark") {
        return localMode;
      } else {
        return null;
      }
    }
  });

  const theme = React.useMemo(() => {
    if (mode) {
      return themeSetup(mode);
    } else {
      return themeSetup(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode, mode]);

  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <Head>
            <link rel="icon" href="/favicon.png" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
            <meta charSet="utf-8" />

            {/* Additional for PWA app */}
            <link rel="manifest" href="/manifest.json" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#2B5797" />
            <meta name="msapplication-TileImage" content="/assets/imgs/logo/icon192.png" />
            <meta name="msapplication-tap-highlight" content="no" />
            {/* This will show a background ios bunny notch on safari */}
            <meta name="theme-color" content={theme.palette.primary.main} />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            {/*<link rel='apple-touch-startup-image' href='/assets/imgs/logo/icon192.png' sizes='192x192' />*/}
            <link rel="apple-touch-icon" href="/assets/imgs/logo/icon192.png" />
            {/*<link rel="apple-touch-icon" sizes="152x152" href="/assets/imgs/logo/icon192.png" />*/}
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />*/}
            {/*<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />*/}

            {/* ios splash screen */}
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_14_Pro_Max_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_14_Pro_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/iPhone_11__iPhone_XR_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/12.9__iPad_Pro_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/10.9__iPad_Air_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/10.5__iPad_Air_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/10.2__iPad_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              href="/splash_screens/8.3__iPad_Mini_landscape.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_14_Pro_Max_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_14_Pro_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/iPhone_11__iPhone_XR_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/12.9__iPad_Pro_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/10.9__iPad_Air_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/10.5__iPad_Air_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/10.2__iPad_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
            />
            <link
              rel="apple-touch-startup-image"
              media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              href="/splash_screens/8.3__iPad_Mini_portrait.png"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <NotistackWrapper>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <StoreProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </StoreProvider>
            </NotistackWrapper>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
}
