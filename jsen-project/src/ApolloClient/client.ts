import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";
// import { HttpLink } from "apollo-link-http";

// const httpLink = new HttpLink({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
// });

export const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});