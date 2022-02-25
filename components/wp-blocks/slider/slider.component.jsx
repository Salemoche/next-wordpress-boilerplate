import React, { useState, useEffect } from 'react'
import { SliderStyles } from './slider.styles';
import Image from 'next/image';
import WPImagesComponent from '../../wp-images/wp-images-component';

// Swiper
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import defaultTheme from '../../../styles/theme';

function SliderComponent({ attributes, media }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        // Compare fetched media items with the IDs from the Gallery Block (attributes)
        const pImages = [];

        attributes.data.images.forEach(imageId => {
            media.forEach( mediaItem => {
                if ( mediaItem.databaseId == imageId ) {
                    pImages.push(mediaItem)
                }
            })
        });

        setImages(pImages);
        // console.log(attributes)
    }, [])

    return (
        <SliderStyles>
            <Swiper
                modules={[ Autoplay ]}
                spaceBetween={defaultTheme.spaceS}
                slidesPerView={4}
                breakpoints={{
                    [defaultTheme.breakpointXS] : {
                        slidesPerView: 1,
                        spaceBetween: defaultTheme.spaceS
                    },
                    // [defaultTheme.breakpointS] : {
                    //     slidesPerView: 2,
                    //     spaceBetween: defaultTheme.spaceS
                    // },
                    [defaultTheme.breakpointM] : {
                        slidesPerView: 3,
                        spaceBetween: defaultTheme.spaceS
                    },
                    [defaultTheme.breakpointL] : {
                        slidesPerView: 4,
                        spaceBetween: defaultTheme.spaceS
                    },
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 3000 }}
                speed={ 300 }
                loop={ true }
                autoHeight={ false }
            >

                { images.map( ( image, i ) => {
                    const blurImage = image.mediaDetails.sizes.filter( size => size.name === 'blur')[0];
                    const blurImageUrl = blurImage.sourceUrl
                    return (
                        <SwiperSlide key={`bs-slide-${i}`} className={`bs-image bs-slide`}>
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
                        </SwiperSlide>
                    )
                })}
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </SliderStyles>
    )
}

export default SliderComponent
