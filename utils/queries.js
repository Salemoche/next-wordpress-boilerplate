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
                excerpt
                seo {
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaDesc
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    title
                    twitterDescription
                    twitterTitle
                }
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                }
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

// export const PAGES_QUERY = () => {
//     return gql `
//     query MyQuery {
//         pages {
//             nodes {
//                 id
//                 title
//                 slug
//                 isFrontPage
//                 featuredImage {
//                     node {
//                         altText
//                         mediaItemUrl
//                         mediaDetails {
//                             sizes {
//                                 sourceUrl
//                                 name
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }`
// }

export const POST_QUERY = ( slug ) => {
    return gql`
    query MyQuery {
        post(id: "${slug}", idType: SLUG) {
            id
            title
            slug
            excerpt
            seo {
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaDesc
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    title
                    twitterDescription
                    twitterTitle
            }
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                    mediaDetails {
                        sizes {
                            sourceUrl
                            name
                        }
                    }
                }
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

export const POSTS_QUERY = () => {
    return gql `
    query MyQuery {
        posts(last: 1000) {
            nodes {
                id
                title
                slug
                excerpt
                seo {
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaDesc
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    title
                    twitterDescription
                    twitterTitle
                }
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                        mediaDetails {
                            height
                            width
                            sizes {
                                sourceUrl
                                name
                                height
                                width
                            }
                        }
                    }
                }
            }
        }
    }`
}