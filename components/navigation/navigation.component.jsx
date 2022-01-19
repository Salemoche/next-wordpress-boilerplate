// Base
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../state/store';
import { useSnapshot } from 'valtio';

// Components
import { NavigationStyles, MenuIconStyles } from './navigation.styles';
import { IconStyles } from '../../styles/global-components.styles';

// Misc
import HamburgerIcon from '../../public/img/icons/hamburger.svg';
import CrossIcon from '../../public/img/icons/cross.svg';

// Animation
import { motion } from 'framer-motion';
import router from 'next/router';

const NavigationComponent = ({ mainMenu }) => {

    const ref = useRef();
    const menuItems = mainMenu?.menuItems?.nodes;
    const { deviceDetector, current } = useSnapshot( defaultStore );
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const pScrollY = useRef(null);


    useEffect(() => {
        defaultStore.headerHeight = ref.current.offsetHeight || 0;
    }, [ ref ])

    useEffect( () => {
        
        if ( deviceDetector.mode == 'mobile' || deviceDetector.mode == 'tablet') return setShowMenu(true)

        if ( pScrollY.current > current.scrollY || pScrollY.current == null || pScrollY.current == 0 ) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

        pScrollY.current = current.scrollY

    }, [ current.scrollY, deviceDetector ])


    return (
        <NavigationStyles ref={ ref } className="bs-navigation" device={ deviceDetector } menuOpen={ menuOpen }>
            <motion.nav
                className="bs-menu bs-main-menu"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: (deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small') && !menuOpen ? 0 : 1,
                    y: showMenu ? '0%' : '-100%'
                }}
                transition={{ duration: .1 }}
            >
                { menuItems.map( menuItem => <Link key={ menuItem.path || '/' } href={ menuItem.path || '/' }><a className={`bs-menu-item${menuItem.path === defaultStore?.router?.pathName ? ' active' : ''}`}>{ menuItem.label }</a></Link>) }
            </motion.nav>
            { (deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small') &&
                <MenuIconStyles onClick={() => {setMenuOpen( prev => !prev )} } dangerouslySetInnerHTML={{ __html: menuOpen ? CrossIcon : HamburgerIcon }} />
            }
        </NavigationStyles>
    )
}

export default NavigationComponent
