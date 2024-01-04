import React from "react";
import styles from './Picture.module.css'
import PropTypes from 'prop-types'

export const Picture = ({
    src,
    width,
    height,
    isRounded,
}) => {
    return <picture className={`picture ${isRounded? styles['is-rounded']:""}`}><img src={src} style={{height, maxWidth: width}}/></picture>
}

Picture.propTypes = {
    src: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    isRounded: PropTypes.bool,
}

Picture.defaultProps = {
    height: "auto",
}

export default Picture