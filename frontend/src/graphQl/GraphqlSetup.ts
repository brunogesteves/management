import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const link = from([new HttpLink({ uri: process.env.REACT_APP_API_URL })]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
