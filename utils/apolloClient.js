import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://default.bachstein.ch/graphql",
    cache: new InMemoryCache()
});