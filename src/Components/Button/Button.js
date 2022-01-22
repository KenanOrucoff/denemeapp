import React from 'react'
import './Button.css'

export default function Button({children, className, style}) {
    return (
        <div>
            <button className={`btn ${className}`} style={style}> {children}</button> 
        </div>
    )
}
