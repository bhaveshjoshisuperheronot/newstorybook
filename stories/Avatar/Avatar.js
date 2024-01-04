import React from 'react'
import Picture from "../Picture"
import styles from './Avatar.module.css'
import { options } from "./constants"
import { mapSize } from "./helpers"
import PropTypes from 'prop-types'


export const Avatar = ({src, size='md'}) => {
    return  (<div className={styles.avatar}>
                <Picture src={src} width={mapSize(size)} height={mapSize(size)} isRounded />
            </div>)
}

Avatar.proptypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(options.sizes)
}

export default Avatar