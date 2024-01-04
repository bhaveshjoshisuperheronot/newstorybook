import React from 'react'
import { options } from "./constants";
import PropTypes from 'prop-types'
import styles from './Card.module.css'

export const Card = ({
    children='',
    color = 'primary',
    size = 'sm',
    isClickable,
    isDraggable,
}) => {
    return <div className={`${styles.card} ${styles[`color-${color}`]} ${styles[`size-${size}`]} ${isClickable? styles['is-clickable']:""} ${isDraggable? styles['is-draggable']:""}`}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
}

export default Card