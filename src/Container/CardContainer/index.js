import React from 'react'
import Card from '../../Components/Card/Card'


const data = [
    {
        url: require('../../assets/chocolate.jpg').default,
        title: 'Chocolate',
        description: 'Land behold it created good saw after shed our set.'

    },
    {
        url: require('../../assets/sweetheart.jpg').default,
        title: 'Sweetheart',
        description: 'Land behold it created good saw after shed our set.'

    },
    {
        url: require('../../assets/blackforest.jpg').default,
        title: 'Blackforest',
        description: 'Land behold it created good saw after shed our set.'

    },
]

function index() {
    return (
        <>
            <div className='exclusive_cake'>
                <p>Most populyar</p>
                <h1>Our Exclusive Cakes</h1>
            </div>
            <div className='container'>
                <div className='card-flex'>
                    {

                        data.map((item, index) => (

                            <Card

                                item={item}
                                key={index}
                                url={item.url}
                            />





                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default index
