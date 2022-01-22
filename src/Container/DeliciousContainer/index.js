import React from 'react'
import Delicious from '../../Components/Delicious/Delicious'

const data=[
    {   titleanimation:'Delicious',
        title:'Delicious Cake For Everyone',
        description:'Land behold it created good saw after shed Our set living.Signs midst dominion creepeth morning' ,
        url:require('../../assets/strawberry.jpg').default,
    }
]

function index() {
    return (
       
        <div>
            {
               data.map((item,index)=>(
                  <Delicious
                    item ={item}
                    key={index}
                    url={item.url}

                  
                  />

               ))
            }
            
        </div>
        
    )
}

export default index
