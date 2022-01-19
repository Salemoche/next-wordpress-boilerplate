// base

import Image from 'next/image'

// Components
import TestBlockComponent from '../components/wp-blocks/test-block/test-block.component';
import { WPBlockStyles } from "../styles/global-components.styles";

// Helpers
import { v4 as uuidv4 } from 'uuid';

export const getWordpressImage = ( imageNode, size ) => {
    
    if ( !imageNode ) return null;
    
    const { node: image } = imageNode;

    let returnImage = {
        url: image.mediaItemUrl,
        altText: image.altText,
        height: image.mediaDetails.height,
        width: image.mediaDetails.width,
        aspectRatio: image.mediaDetails.width / image.mediaDetails.height,
    }

    image.mediaDetails.sizes.forEach(size => {
        returnImage[size.name] = {
            sourceUrl: size.sourceUrl,
            height: size.height,
            width: size.width,
        };  
    });


    return returnImage;
}

export const getWordpressBlock = ( block, i, handleClick = () => {}, addImageToLightbox = () => {} ) => {

    const type = block.name.split('/')[0].replace('/', '');
    const category = block.name.split('/')[1];
    const attributes = JSON.parse(block.attributesJSON);
    
    if ( type === 'core' ) {
        if ( category === 'image') {

            const { width, height } = getImageSizeFromWPUrl( attributes.url );
            addImageToLightbox({
                id: `wp-image-${ block.order }`,
                src: attributes.url,
                width: width,
                height: height,
            })

            return <WPBlockStyles key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`}>
                <div className={`bs-wp-image align${attributes.align} size-${attributes.sizeSlug}`}>
                    <Image 
                        src={attributes.url}
                        width={width}
                        height={height} 
                        loading={'lazy'}
                        layout={'responsive'} 
                        onClick={ handleClick }
                    />
                    <div className="bs-wp-capture bs-image-capture">{ attributes.caption }</div>
                </div>
            </WPBlockStyles>
        } else {
            return <WPBlockStyles key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} dangerouslySetInnerHTML={{ __html: block.saveContent }}></WPBlockStyles>
        }
    } else if ( type === 'acf') {
        return <TestBlockComponent key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} attributes={attributes}></TestBlockComponent>
    }

}

export const getImageSizeFromWPUrl = ( link ) => {

    const size = /\d*x\d*(?=\.jpg|\.png)/gi.exec(link)[0] || '';
    const width = size.split('x')[0] || '';
    const height = size.split('x')[1] || '';

    return {
        size,
        width,
        height
    }
}