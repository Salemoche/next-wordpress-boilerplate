import React from 'react'
import { LoadingStyles } from './loading.styles';
import { motion } from 'framer-motion';

function LoadingComponent() {
    return (
        <LoadingStyles className="bs-loading">
            <motion.div
                animate={{ opacity: [ 1, 0.2, 1 ] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                Loading
            </motion.div>
        </LoadingStyles>
    )
}

export default LoadingComponent
