import React from 'react'
import Simple from '../../Components/Simple/Simple'

const data =[
    {
        url:require('../../assets/about.webp').default,
        headline:'Fresh & Delicious',
        title:'A Simple Way to Eating Delicious',
        description:'Land behold it created good saw after shed Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, quis nostrud exer.',
        
    },
  
   
]
function index() {
    return (
        <>
        <div className ='container'>
        <div className = 'simple-flex'>
        {
           
            data.map((item,index)=>(
                  
                <Simple

                item = {item}
                key = {index}
                url = {item.url}
                />
              
            ))
            
        }
        </div>
        </div>
        </>
            
        
    )
}

export default index
