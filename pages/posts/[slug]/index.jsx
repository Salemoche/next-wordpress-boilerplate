import React, { FC, PropsWithChildren, useState, useRef, useEffect } from 'react'
import {useRouter} from 'next/router'

// Data
import { apolloClient } from '../../../utils/apolloClient';
import { POSTS_QUERY, POST_QUERY } from '../../../utils/queries';

// Components
import LayoutComponent from '../../../components/layout/layout.component';
import { ContentStyles } from '../../../styles/global-components.styles';

// Animation
import { motion } from 'framer-motion';

const ProjectPage = ({ post, mainMenu, footerMenu }) => {

    const { 
        title,
        slug,
        id
    } = post;

    return (
        <motion.div 
            key="sm-post"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
        >
            <LayoutComponent mainMenu={ mainMenu || {} } footerMenu={ footerMenu || {} }>
                <ContentStyles>
                    <h1>Hello, world, this is the { title } Post</h1>
                </ContentStyles>
            </LayoutComponent>
        </motion.div>
    )
}

export default ProjectPage

export const getStaticProps = async ( context ) => {

    const slug = context.params.slug

    const result = await apolloClient
        .query({
            query: POST_QUERY(slug)
        })

    const post = await result?.data.post;
    const menus = result?.data.menus.nodes;
    const mainMenu = menus?.filter( (menu) => (menu.slug === 'main-menu') );
    const footerMenu = menus?.filter( (menu) => (menu.slug === 'footer-menu') );

    console.log(menus, mainMenu)

    return {
        props: {
            post,
            mainMenu: mainMenu[0] || {},
            footerMenu: footerMenu[0] || {},
        }
    }
}

export const getStaticPaths = async () => {

    const result = await apolloClient
        .query({
            query: POSTS_QUERY()
        })

    const posts = await result?.data?.posts?.nodes;

    const paths = await posts.map((post) => ({params: { slug: post.slug, id: post.id }}));

    // console.log('_____________________________________________');
    // console.log(posts);

    return {
        paths,
        fallback: false // for 404
    }
}