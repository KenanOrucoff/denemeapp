import React from 'react'
import Feature from '../../Components/Feature/Feature'

const data = [

    {
        url: require('../../assets/icon1.svg').default,
        title: 'Pet Boarding',
        description: 'consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.'
    },
    {
        url: require('../../assets/icon2.svg').default,
        title: 'Pet Boarding',
        description: 'consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.'
    },
    {
        url: require('../../assets/icon3.svg').default,
        title: 'Pet Boarding',
        description: 'consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.'

    }
]

function index() {
    return (
        <>

            <div className='feature'>
                <div className='title_text'>
                    <h4>Our Features</h4>
                    <h1>Quality is Our First Priority</h1>
                </div>
                <div className='container'>
                    <div className='feature_flex'>
                        {
                            data.map((item, index) => (

                                <Feature
                                    item={item}
                                    key={index}
                                    url={item.url}

                                />

                            ))
                        }
                    </div>
                </div>
            </div>


        </>



    )
}

export default index
