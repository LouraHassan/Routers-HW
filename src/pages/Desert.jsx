import React from 'react'
import desert from '../assets/desert.avif'
import Title from '../components/Title'
function Desert() {
  return (
      <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${desert})` }}>
                         <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
                         <Title title='Desert' text='A desert is a dry, barren region with little rainfall and sparse vegetation. Deserts like the Sahara and Arabian are known for extreme temperatures and sand dunes.'></Title>

    </div>
  )
}

export default Desert
