import { gql } from "@apollo/client";

export const SITE_QUERY = () => {
    return gql `
    query MyQuery {
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
export const POST_QUERY = ( slug ) => {
    return gql`
    query MyQuery {
        post(id: "${slug}", idType: SLUG) {
            id
            title
            slug
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