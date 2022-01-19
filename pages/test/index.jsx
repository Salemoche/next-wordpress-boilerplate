// Base
import { useEffect, useState } from 'react';

// Data
import { apolloClient } from '../../utils/apolloClient';
import { PAGE_QUERY } from '../../utils/queries';
import { defaultStore } from '../../state/store';
import { useSnapshot } from 'valtio';

// Components
import LayoutComponent from '../../components/layout/layout.component';

// Styling
import { ContentStyles, WPBlockStyles } from '../../styles/global-components.styles';

// Animation
import { motion } from 'framer-motion';
import { getWordpressBlock } from '../../utils/helpers';
import LightboxComponent from '../../components/lightbox/lightbox.component';

// Hooks
import { useModal } from '../../utils/hooks';



export default function TestPage({ 
    content, 
    mainMenu, 
    footerMenu, 
    baseUrl, 
    siteName, 
    media 
}) {

    const { deviceDetector } = useSnapshot( defaultStore );
    const { title, blocks } = content
    const { openModal, closeModal, isModalOpen, addImageToLightbox, modalContent } = useModal();

    // Set site state

    useEffect(() => {
        defaultStore.base.siteName = siteName
        defaultStore.current = {
            ...defaultStore.current,
            url: baseUrl,
            title
        }
    }, [])

    return (
        <motion.div 
            key="bs-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .6 }}
        >
            <LayoutComponent 
                mainMenu={ mainMenu }
                baseUrl={ baseUrl }
                siteName={ siteName }
                content={ content }
                // fullHead={ fullHead } // SM-TODO: SEO
            >
                <section>
                    <ContentStyles className="bs-content">
                        <h1>Hello, world, this is the { title } page</h1>
                        { blocks.map( (block, i) => (
                            getWordpressBlock( 
                                block, 
                                i, 
                                openModal, 
                                addImageToLightbox,
                                media
                            )
                        )) }
                    </ContentStyles>
                </section>
                <LightboxComponent 
                    content={ modalContent } 
                    isModalOpen={ isModalOpen } 
                    closeModal={ closeModal }
                    hasBackdrop={ true }
                    hasCloseButton={ true }
                />
            </LayoutComponent>
        </motion.div>
    )
}


export const getStaticProps = async() => {

    const baseUrl = process.env.BASE_URL;
    const siteName = process.env.SITE_NAME;

    const result = await apolloClient.query({
        query: PAGE_QUERY()
    });

    const pages = result.data.pages.nodes;
    const page = pages.filter( (page) => (page.slug === 'test') );
    const menus = result.data.menus.nodes;
    const mainMenu = menus.filter( (menu) => (menu.slug === 'main-menu') );
    const footerMenu = menus.filter( (menu) => (menu.slug === 'footer-menu') );
    const media = result.data.mediaItems.nodes;
    
    return {
        props: {
            content: page[0],
            mainMenu: mainMenu[0] || {},
            footerMenu: footerMenu[0] || {},
            baseUrl,
            siteName,
            media
        }
    }
}  
