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
            {/* This will show a background ios bunny notch on safari */}
            <meta name="theme-color" content={theme.palette.primary.main} />
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
