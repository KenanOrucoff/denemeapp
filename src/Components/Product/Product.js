import React from 'react'
import './Product.css'
function Product({item,url}) {
    return (
        <div className ='title_image'>
            <div className ='body_text'>
            <h2>{item.titleanimation}</h2>
            <h1>{item.title}</h1>
            </div>
            <img src = {url} alt ='cakee.jpg'/>
            
        </div>
    )
}

export default Product
