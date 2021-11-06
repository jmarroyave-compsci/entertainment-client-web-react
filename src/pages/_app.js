import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ApolloProvider } from "@apollo/client";
import { ThemeContext, theme, toggleMode } from 'app/config/theme/main';
import createEmotionCache from 'app/config/theme/emotion-cache';
import client from "app/config/providers/apollo";
import { links } from 'data/app/links';
import socialNetworksLinks from 'data/app/social-networks'
import App from 'app/com';

import { Provider as StateProvider } from 'react-redux'
import { store } from 'app/state/store'

import config from 'app/config'
import { useWebSockets } from 'app/config/providers/web-sockets';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import 'core/ui/theme/theme.css';
import 'core/ui/theme/components.css';

import { useRouter } from 'next/router';

import ReactGA from 'react-ga';

export default function BaseApp(props) {  
  const [ webSocket ] = useWebSockets() 
  const router = useRouter(); 
  const [ appTheme, setAppTheme ] = useState(theme);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect( ()=>{
    ReactGA.initialize(config.PLUGINS.GOOGLE.ANALYTICS);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{config.APP.PAGE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
          <StateProvider store={store}>
            <ThemeContext.Provider value={{ theme: appTheme, toggleMode: () => toggleMode(appTheme, setAppTheme) }}>
              <ThemeContext.Consumer>
              { ( { theme } ) => (
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                    <App
                      params={{
                        page: {
                          title: config.APP.TITLE,
                          pageTitle: config.APP.PAGE_TITLE,
                        },
                        footer: {
                          version: config.APP.VERSION,
                          links: links,
                          socialNetworks: socialNetworksLinks,
                        },
                      }}                             
                    >       
                      { router.isReady && 
                        <Component 
                          {...pageProps}
                        />
                      }
                    </App>
                </ThemeProvider>
              )} 
              </ThemeContext.Consumer>
            </ThemeContext.Provider>
          </StateProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

BaseApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};