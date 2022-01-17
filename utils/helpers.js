import { WPBlockStyles } from "../styles/global-components.styles";

// Components
import TestBlockComponent from '../components/wp-blocks/test-block/test-block.component';

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

export const getWordpressBlock = ( block ) => {

    const type = block.name.split('/')[0].replace('/', '');
    const category = block.name.split('/')[1];
    const attributes = JSON.parse(block.attributesJSON);
    
    if ( type === 'core' ) {
        return <WPBlockStyles className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} dangerouslySetInnerHTML={{ __html: block.saveContent }}></WPBlockStyles>
    } else if ( type === 'acf') {
        return <TestBlockComponent className={`bs-wp-block bs-wp-block-${block.name.split('/')[1]}`} attributes={attributes}></TestBlockComponent>
    }

}