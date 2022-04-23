import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WP_URL}graphql`,
    cache: new InMemoryCache()
});