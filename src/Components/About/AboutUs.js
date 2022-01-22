import React from 'react'
import './AboutUs.css'

function AboutUs({item,url}) {
    return (
        <div className ='title_image'>
        <div className ='body_text'>
        <h2>{item.titleanimation}</h2>
        <h1>{item.title}</h1>
        </div>
        <img src = {url} alt ='Redcake.jpg'/>
        
    </div>
    )
}

export default AboutUs
