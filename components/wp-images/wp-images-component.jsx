import React, { useState, useEffect } from 'react'
import Image from 'next/image';

function WPImagesComponent({ selectedImages, allImages, className }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Compare fetched media items with the IDs from the Gallery Block (attributes)
        const pImages = [];

        selectedImages.forEach(imageId => {
            allImages.forEach( mediaItem => {
                if ( mediaItem.databaseId == imageId ) {
                    pImages.push(mediaItem)
                }
            })
        });

        setImages(pImages);
    }, [])

    return (
        <>
        { images.map( ( image, i ) => {
            const blurImage = image.mediaDetails.sizes.filter( size => size.name === 'blur')[0];
            const blurImageUrl = blurImage.sourceUrl
            return (
                <div key={`bs-image-${i}`} className={`bs-image ${className}`}>
                    <Image
                        src={image.mediaItemUrl}
                        width={image.mediaDetails.width}
                        height={image.mediaDetails.height} 
                        loading={'lazy'}
                        layout={'responsive'} 
                        quality={75}
                        placeholder={'blur'}
                        blurDataURL={blurImageUrl}
                    />
                </div>
            )
        })}
        </>
    )
}

export default WPImagesComponent
