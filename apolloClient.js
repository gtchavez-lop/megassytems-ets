import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/cl00u9fkk98p301xnhh2qgvjh/master',
    cache: new InMemoryCache()
})

export default apolloClient;