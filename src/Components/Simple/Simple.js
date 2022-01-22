import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Simple.css'

function Simple({item,url}) {
    return (
        <>
        <div className='simple_image'>
            <img src={url} alt='about.webg'/>
        </div>
            <div className='text_btn'>
            <h4>{item.headline}</h4>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <Button className='btn_4'>< Link className = 'btn_text_4' to ="">Our Story</Link></Button>
            </div>
            </>

        
    )
}

export default Simple
