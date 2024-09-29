import React from 'react'
import ocean from '../assets/ocean.avif'
import Title from '../components/Title'
function Ocean() {
  return (
      <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${ocean})` }}>
                       <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
                       <Title title='Ocean' text="An ocean is a vast body of saltwater that covers most of Earth's surface, supporting marine life and ecosystems. Examples include the Atlantic and Pacific Oceans."></Title>


    </div>
  )
}

export default Ocean
