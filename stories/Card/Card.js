import React from 'react'
import { options } from "./constants";
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({
    children='I am a card',
    color = 'primary',
    size = 'sm',
    isClickable,
    isDraggable,
}) => {
    return <div className={`card color-${color} size-${size} ${isClickable? "is-clickable":""} ${isDraggable? "is-draggable":""}`}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDraggable: PropTypes.bool,
}

export default Card