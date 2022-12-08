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
            <link rel="manifest" href="/manifest.json"/>
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#2B5797" />
            <meta name="msapplication-TileImage" content="/assets/imgs/logo/icon192.png"/>
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
          </Head>
          <ThemeProvider theme={theme}>
            <NotistackWrapper>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotistackWrapper>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
}
