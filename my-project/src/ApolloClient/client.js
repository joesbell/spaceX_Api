import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});