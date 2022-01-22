import React from 'react'
import './Card.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


function Card({item,url}) {
    return (
     
        <div className ='Card_text_image'>
            <div className="card">
                    <div className="icon_card"><img src={url} alt=""/></div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <Button className='btn_3'>< Link className = 'btn_text_3' to ="">$20 | Order Now</Link></Button>
            </div>
            
        </div>
        
        
       
    )
}

export default Card
