import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
  uri: process.env.REACT_APP_API_URL2,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
