import React from 'react'
import "./Tag.scss"

const Tag = (props) => {
    
    return (
        <span className="tag">{props.title}</span>
    )
}

export default Tag
