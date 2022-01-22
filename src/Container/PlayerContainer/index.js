import React from 'react'
import ReactPlayer from 'react-player'
import './index.css'


function index() {
    return (
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=Wtxbt-CpA2s&t=2s'
          width='100%'
          height='600px'
          
        />
      </div>
    )
}

export default index
