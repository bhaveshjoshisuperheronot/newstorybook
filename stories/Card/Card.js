import React from 'react'
import { options } from "./constants";
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({
    children='I am a card',
    color = 'primary',
    size = 'sm',
}) => {
    return <div className={`card color-${color} size-${size}`}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
}

export default Card