// Base
import { useEffect } from 'react';

// Data
import { apolloClient } from '../utils/apolloClient';
import { PAGE_QUERY } from '../utils/queries';
import { defaultStore } from '../state/store';
import { useSnapshot } from 'valtio';

// Components
import LayoutComponent from '../components/layout/layout.component';
import { ContentStyles } from '../styles/global-components.styles';

// Animation
import { motion } from 'framer-motion';

export default function Home({ content, mainMenu, footerMenu }) {

    const { deviceDetector } = useSnapshot( defaultStore );
    const { title } = content

    useEffect(() => {
        // console.log( content )
    }, [])

    return (
        <motion.div 
            key="sm-post"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
        >
            <LayoutComponent mainMenu={ mainMenu }>
                <section>
                    <ContentStyles className="sm-content">
                        <h1>Hello, world, this is the { title } page</h1>
                        <p> The device size is { deviceDetector.size } </p>
                    </ContentStyles>
                </section>
            </LayoutComponent>
        </motion.div>
    )
}


export const getStaticProps = async() => {

    const result = await apolloClient.query({
        query: PAGE_QUERY()
    });

    const pages = result.data.pages.nodes;
    const homePage = pages.filter( (page) => (page.isFrontPage === true) );
    const menus = result.data.menus.nodes;
    const mainMenu = menus.filter( (menu) => (menu.slug === 'main-menu') );
    const footerMenu = menus.filter( (menu) => (menu.slug === 'footer-menu') );
    
    return {
        props: {
            content: homePage[0],
            mainMenu: mainMenu[0] || {},
            footerMenu: footerMenu[0] || {},
        }
    }
}  
