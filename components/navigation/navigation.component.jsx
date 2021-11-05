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

const NavigationComponent = ({ mainMenu }) => {

    const ref = useRef();
    const menuItems = mainMenu.menuItems.nodes;
    const { deviceDetector } = useSnapshot( defaultStore );
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        defaultStore.headerHeight = ref.current.offsetHeight || 0;
        console.log(defaultStore.headerHeight)
    }, [ ref ])

    return (
        <NavigationStyles ref={ ref } className="sm-navigation" size={ deviceDetector.size } menuOpen={ menuOpen }>
            <motion.nav
                className="sm-menu sm-main-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: (deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small') && !menuOpen ? 0 : 1 }}
                transition={{ duration: .1 }}
            >
                <Link key="/3d" href="/3d">3D Playground</Link>
                { menuItems.map( menuItem => <Link key={ menuItem.path || '/' } href={ menuItem.path || '/' }>{ menuItem.label }</Link>) }
            </motion.nav>
            { (deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small') &&
                <MenuIconStyles onClick={() => {setMenuOpen( prev => !prev )} } dangerouslySetInnerHTML={{ __html: menuOpen ? CrossIcon : HamburgerIcon }} />
            }
        </NavigationStyles>
    )
}

export default NavigationComponent
