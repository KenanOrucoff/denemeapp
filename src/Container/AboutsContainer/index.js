import React from 'react'
import AboutUs from '../../Components/About/AboutUs'
const data =[
    {
        titleanimation: 'Delicious',
        title:'About Us',
        url:require('../../assets/Redcake.jpg').default,
        
    }
]
    


function index() {
    return (
        <>
            {
           
           data.map((item,index)=>(
                 
               <AboutUs

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
