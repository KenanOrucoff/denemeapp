import React from 'react'
import { Link } from 'react-router-dom'
import './Delicious.css'


function Delicious({ item,url }) {
   
    return (

        <div className='text-image'>
            <div className='text'>
                <div className = 'shop-title'><h2>{item.titleanimation}</h2></div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              
            </div>
            <img src={url} alt="strawberry" />
        </div>


    )
    
}

export default Delicious
