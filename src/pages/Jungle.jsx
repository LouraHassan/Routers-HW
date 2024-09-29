import React from 'react'
import jungle from '../assets/jungle.avif'
import Title from '../components/Title'
function Jungle() {
  return (
      <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${jungle})` }}>
                        <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
                        <Title title='Jungle' text='A jungle is a dense, tropical forest with thick vegetation and diverse wildlife. Jungles are known for their humidity and are found in regions like the Amazon and Borneo.'></Title>


    </div>
  )
}

export default Jungle
