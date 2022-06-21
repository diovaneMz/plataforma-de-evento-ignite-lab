import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ojf7z908hx01xxeb5f22y3/master',
  cache: new InMemoryCache()
})