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