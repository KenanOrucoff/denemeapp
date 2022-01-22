import React from 'react'
import './Feature.css'

function Feature({item,url}) {
    return (
        <>
        
        <div className ='feature_image_text'>
            <div className ='feature_card'>
            <img src = {url} alt =''></img>
            <h1>{ item.title}</h1>
            <p>{item.description}</p>
            </div>
        </div>
        
        </>
    )
}

export default Feature
