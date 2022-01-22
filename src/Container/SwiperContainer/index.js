import React from 'react'
import Swiper from '../../Components/Swiper/Swiper'


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
]

function index() {
    return (
        <>
            {
                data.map((item,index)=>(
                    <Swiper
                    item={item}
                   key = {index}
                    url={item.url}

                    />
                
                ))
            }
        </>
    )
}

export default index
