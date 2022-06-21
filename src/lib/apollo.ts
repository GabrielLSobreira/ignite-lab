import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6ojdk0uuf01xi2sl37z84/master',
  cache: new InMemoryCache(),
});
