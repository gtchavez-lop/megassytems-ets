import { GraphQLClient } from 'graphql-request'

const graphqlClient = new GraphQLClient(process.env.NEXT_APOLLO_CONTENT_API_URL, { headers: {} })

export default graphqlClient