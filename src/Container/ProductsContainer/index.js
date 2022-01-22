import React from 'react'
import Product from '../../Components/Product/Product'
const data =[
    {
        titleanimation: 'Delicious',
        title:'Our Products',
        url:require('../../assets/cakee.jpg').default,
        
    }
]
    


function index() {
    return (
        <>
            {
           
           data.map((item,index)=>(
                 
               <Product

               item = {item}
               key = {index}
               url = {item.url}
               />
             
           ))
           
       }
        </>
    )
}

export default index
