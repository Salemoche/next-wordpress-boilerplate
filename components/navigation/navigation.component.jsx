// Base
import React from 'react'
import Link from 'next/link';
import { NavigationStyles } from './navigation.styles';

const NavigationComponent = () => {

    return (
        <NavigationStyles className="navigation">
            <Link href="/">Home</Link>
        </NavigationStyles>
    )
}

export default NavigationComponent
