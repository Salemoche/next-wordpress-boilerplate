// Base
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import { FooterStyles } from './footer.styles';

// Data
import { defaultStore } from '../../state/store';

const FooterComponent = () => {

    const ref = useRef();

    useEffect(() => {
        defaultStore.footerHeight = ref.current.offsetHeight || 0;
    }, [ ref ])

    return (
        <FooterStyles ref={ ref } className="footer">
            ©2021 – created by <a href="https://bachstein.ch" target="_blank" rel="noreferrer">Bachstein</a>
        </FooterStyles>
    )
}

export default FooterComponent
