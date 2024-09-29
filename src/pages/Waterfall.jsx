import React from 'react'
import waterfall from '../assets/waterfall.avif'
import Title from '../components/Title'

function Waterfall() {
  return (
      <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${waterfall})` }}>
               <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
               <Title title='Waterfall' text='A waterfall is a steep descent of water from a height, often in rivers. Famous waterfalls include Niagara Falls and Angel Falls, known for their power and beauty.'></Title>


    </div>
  )
}

export default Waterfall
