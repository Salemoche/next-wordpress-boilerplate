import React, { useState, useEffect } from 'react'
import { GalleryStyles } from './gallery.styles';
import Image from 'next/image';
import WPImagesComponent from '../../wp-images/wp-images-component';

function GalleryComponent({ attributes, media }) {
    // console.log(media)

    const [images, setImages] = useState([]);

    return (
        <GalleryStyles className="bs-gallery" gridColumns={4} gridGap={12} >
            {/* <WPImagesComponent className="bs-gallery-item" selectedImages={attributes.data.images} allImages={media} /> */}
        </GalleryStyles>
    )
}

export default GalleryComponent
