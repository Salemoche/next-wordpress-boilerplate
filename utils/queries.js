import { gql } from "@apollo/client";

export const PAGE_QUERY = () => {
    return gql `
    query MyQuery {
        pages {
            nodes {
                id
                title
                slug
                isFrontPage
            }
        }
        menus {
            nodes {
                slug
                menuItems {
                    nodes {
                        path
                        label
                        childItems {
                            nodes {
                                label
                                path
                            }
                        }
                    }
                }
            }
        }
    }`
}

export const PAGES_QUERY = () => {
    return gql `
    query MyQuery {
        pages {
            nodes {
                id
                title
                slug
                isFrontPage
            }
        }
    }`
}

export const POSTS_QUERY = () => {
    return gql `
    query MyQuery {
        posts(last: 1000) {
            nodes {
                id
                title
                slug
            }
        }
    }`
}