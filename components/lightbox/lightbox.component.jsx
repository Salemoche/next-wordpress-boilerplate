// Base
import React, { useState, useEffect } from 'react'
import image, { Image } from 'next/image';

// Helpers
import { getImageSizeFromWPUrl } from '../../utils/helpers';

// Styles
import { CloseButtonStyles, LightboxStyles } from './lightbox.styles';

// Animation
import { motion, AnimatePresence } from 'framer-motion';

// Misc
import CrossIcon from '../../public/img/icons/cross.svg';

function LightboxComponent({ 
    content, 
    isModalOpen, 
    closeModal,
    hasBackdrop = false,
    hasCloseButton = true
}) {

    // useEffect(() => {
    //     console.log(isModalOpen, content);
    // })

    return (
        <AnimatePresence>
            {isModalOpen &&
            <motion.div
                key="bs-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <LightboxStyles>
                    {hasBackdrop && <div className="bs-lightbox-backdrop" onClick={ closeModal }></div> }
                    {hasCloseButton && <CloseButtonStyles onClick={ closeModal } dangerouslySetInnerHTML={{ __html: CrossIcon }}></CloseButtonStyles> }
                    <div className="bs-lightbox-wrapper">
                        {/* { content?.images?.map( image => {
                            const { width, height } = getImageSizeFromWPUrl( image.src );
                            console.log( image );
                            return <div className="bs-lightbox-image">
                                <Image
                                    src={ image.src }
                                    width={ width }
                                    height={ height }
                                />
                            </div>
                        })} */}
                        <div className="bs-lightbox-caption">{ image.src }</div>
                    </div>
                </LightboxStyles>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default LightboxComponent
