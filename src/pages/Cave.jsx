import React from 'react'
import cave from '../assets/cave.avif'
import Title from '../components/Title'
function Cave() {
  return (
      <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${cave})` }}>
                        <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
                        <Title title='Cave' text='A cave is a natural underground space formed by rock erosion, often featuring stalactites and stalagmites. Caves provide shelter and are found worldwide, like Mammoth Cave in the U.S.'></Title>


    </div>
  )
}

export default Cave
