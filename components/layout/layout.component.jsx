//Base
import { useEffect } from 'react';

// Data
import { defaultStore } from '../../state/store';
import { useSnapshot } from 'valtio';

// Components
import MetaComponent from '../meta/meta.component';
import NavigationComponent from '../navigation/navigation.component';
import FooterComponent from '../footer/footer.component';
import { useState } from 'react';

const LayoutComponent = ({ children, hasNavigation = true, hasFooter = true, mainMenu = {}, footerMenu = {} }) => {

    const { footerHeight, headerHeight, deviceDetector } = useSnapshot( defaultStore );
    const [mainStyle, setMainStyle] = useState({})

    useEffect(() => {
        if ( !window ) return
        const topSpacing = deviceDetector.size === 'medium'|| deviceDetector.size === 'small' || deviceDetector.size === 'extra-small' ? 0 : headerHeight;
        console.log(topSpacing)
        setMainStyle({
            marginTop: topSpacing,
            minHeight: window.innerHeight - topSpacing - footerHeight + 'px'
        })
    }, [ footerHeight, headerHeight, deviceDetector.size ])

    return (
        <>
            <MetaComponent/>
            { hasNavigation &&
                <NavigationComponent mainMenu={ mainMenu } />
            }
            <main style={ mainStyle }>
                { children }
            </main>
            { hasFooter &&
                <FooterComponent />
            }
        </>
    )
}

export default LayoutComponent