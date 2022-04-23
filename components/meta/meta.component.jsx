import React from 'react'
import Head from 'next/head';

const MetaComponent = ({ headerTags }) => {

    const { title, description, imageUrl, url, siteName } = headerTags;

    // console.log(headerTags)

    return (
        <Head>
            <title>{ siteName || '' } { !!title && `– ${ title }` }</title>
            <meta name="description" content={ description } />
            {/* <meta property="og:locale" content="en_GB" /> */}
            <meta property="og:title" content={`${siteName || ''} ${ !!title && `– ${ title }` }`} />
            <meta property="og:description" content={ description } />
            <meta property="og:NEXT_PUBLIC_SITE_NAME" content={ siteName || '' } />
            <meta name="og:image" content={ imageUrl } />
            <meta property="og:url" content={ url } />
            {/* <meta property="og:type" content="article" /> */}
            {/* <meta property="article:modified_time" content="2022-01-10T13:28:18+00:00" /> */}
            {/* <meta name="twitter:card" content="summary_large_image" /> */}

            <meta name="viewport" content= "width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            {/* <link rel="preload" href="/fonts/Bon_Voyage/MADE_Bon_Voyage_Regular.otf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Bon_Voyage/MADE_Bon_Voyage_Thin.otf" as="font" crossOrigin=""/>
            <link rel="preload" href="/fonts/Monument_Grotesk/ABCMonumentGrotesk-Regular.woff" as="font" crossOrigin=""/> */}
        </Head>
    )
}

export default MetaComponent
