import React from 'react'
import Testimonial from '../../Components/Testimonial/Testimonial'

const data = [
    {
        description: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.Statement buttons cover-up tweaks patch.',
        url: require('../../assets/face.webp').default,
        name: 'Oliva jems',
        work: 'UIX designer'
    },
    {
        description: 'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.Statement buttons cover-up tweaks patch.',
        url: require('../../assets/face2.webp').default,
        name: 'Oliva jems',
        work: 'UIX designer'
    }
]

function index() {
    return (
        <>
            <div className='testimonial'>
                <div className='title_text'>
                    <h4>Testimonial</h4>
                    <h1>What Customers Say</h1>
                </div>
                <div className='testimonial_flex'>
                    {
                        data.map((item, index) => (
                            <Testimonial
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
