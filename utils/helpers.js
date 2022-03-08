// base

import Image from 'next/image'

// Components
import TestBlockComponent from '../components/wp-blocks/test-block/test-block.component';
import { WPBlockStyles, WPColumnsStyles, WPColumnStyles } from "../styles/global-components.styles";
import ReactPlayer from 'react-player'

// Helpers
import { v4 as uuidv4 } from 'uuid';
import GalleryComponent from '../components/wp-blocks/gallery/gallery.component';
import SliderComponent from '../components/wp-blocks/slider/slider.component';

// Animation
import { motion } from 'framer-motion';

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

export const getWordpressBlock = ( 
    block, 
    i, 
    handleClick = () => {}, 
    addImageToLightbox = () => {},
    media
) => {

    const type = block.name.split('/')[0].replace('/', '');
    const category = block.name.split('/')[1];
    const attributes = JSON.parse(block.attributesJSON);
    const { innerBlocks } = block;
    
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
                        quality={75}
                        // placeholder={'blur'}
                        onClick={ handleClick }
                    />
                    { attributes.caption && 
                        <div className="bs-wp-capture bs-image-capture">{ attributes.caption }</div>
                    }
                </div>
            </WPBlockStyles>
        } else if (category === 'columns') {

            // Handle column layout
            return <WPColumnsStyles key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`}> 
                <div className="wp-columns">
                    { innerBlocks.map( (innerBlock, j) => {
                        const innerType = innerBlock.name.split('/')[0].replace('/', '');
                        const innerCategory = innerBlock.name.split('/')[1];
                        const innerAttributes = JSON.parse(innerBlock.attributesJSON)

                        //TODO: handle lazyloading images
                        return <WPColumnStyles key={`wp-inner-block-${j || uuidv4()}`} className="wp-block-column" width={ innerAttributes.width } dangerouslySetInnerHTML={{ __html: innerBlock.saveContent }}/>
                    })}
                </div>
            </WPColumnsStyles>
        } else if ( category === 'embed' ) {
            return <WPBlockStyles key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`}>
                <ReactPlayer 
                    url={attributes.url} 
                    playsinline={true}  
                />
                { attributes.caption && 
                    <div className="bs-wp-capture bs-video-capture">{ attributes.caption }</div>
                }
            </WPBlockStyles>
        } else {
            return <WPBlockStyles key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} dangerouslySetInnerHTML={{ __html: block.saveContent }}></WPBlockStyles>
        }
    } else if ( type === 'acf') {

        if ( category === 'slider') {
            // console.log(block)
            return <SliderComponent key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} attributes={ attributes } media={ media } ></SliderComponent>
        } else if ( category === 'gallery') {
            console.log(block, attributes)
            return <GalleryComponent key={`wp-block-${i || uuidv4()}`} className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} attributes={ attributes } media={ media } ></GalleryComponent>
        }
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