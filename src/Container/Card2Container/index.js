import React from 'react'
import Card from '../../Components/Card/Card'


const data = [
    {
        url: require('../../assets/cake5.webp').default,
        title: 'Chocolate',
        description: 'Land behold it created good saw after shed our set.'

    },
    {
        url: require('../../assets/title.webp').default,
        title: 'Sweetheart',
        description: 'Land behold it created good saw after shed our set.'

    },
    {
        url: require('../../assets/cake6.webp').default,
        title: 'Blackforest',
        description: 'Land behold it created good saw after shed our set.'

    },
]

function index() {
    return (
        <>
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
