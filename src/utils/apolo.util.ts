import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
//   import { CachePersistor } from 'apollo-cache-persist';

// Cache implementation
const cache = new InMemoryCache();

const authCache: {
  /**
   * store tmp auth token to send with graphql requests
   * If you wanna get JWT token of current user, plz get from AuthStore.token instead
   */
  token: string;
} = {
  token: _fetchInitialAuthTokenFromLocal(),
};

export function setAuthToken(token: string) {
  authCache.token = token;
}

const isClient = typeof window !== "undefined";

/**
 * If you wanna get JWT token of current user, plz get from AuthStore.token instead
 */
function _getAuthToken(): string {
  return authCache.token;
}

function _fetchInitialAuthTokenFromLocal(): string {
  // const u = getLocalAuthInfo();
  // return u ? u.token ?? "" : "";
  return "";
}

// const persistor = new CachePersistor({
//   cache,
//   storage: window.localStorage,
// });
// persistor.restore();

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = _getAuthToken();

  //console.log("{apolo.authLink} token: ", token);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

let splitLink: ApolloLink | null = null;

if (isClient) {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_SUBSCRIPTION_URL ?? "",
    }),
  );

  splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    authLink.concat(wsLink),
    authLink.concat(httpLink),
  );
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((e) => {
      const { message, path, extensions } = e;
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path},  extensions: ${extensions?.message}`);
      if (message === "Unauthorized") {
        // Clean auth info in case of auth error
        // Might be JWT is expired
        // We do clear info only if there was a logged-in user
        if (_getAuthToken() != null) {
          // clearLocalAuthInfo();
          // AuthStore.resetStates();
          // AuthGameStore.resetStates(); // reset game store
          // Modal.info({content: "sdfsdfsdfsd"});
        }
      }
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([errorLink, splitLink != null ? splitLink : httpLink]),
  cache,
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default client;
