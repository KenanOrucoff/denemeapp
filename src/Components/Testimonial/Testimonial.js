import React from 'react'
import './Testimonial.css'

function Testimonial({item,url}) {
    return (
        <div className='testimonial_text_image'>
       <div className ='testimonial-text'><p>{ item.description}</p></div>
        <div className ='image_name_work'>
            <div className ='founder_image'>
            <img src={url} alt = ''/>
            </div>
            <div className='founder_text'>
            <h1>{item.name}</h1>
            <p>{item.work}</p>
            </div>
            
        </div>
            
        </div>
    )
}

export default Testimonial
