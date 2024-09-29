import React from 'react'

function Card(props) {
  return (
      <div className='relative h-[15vh] w-[15vw] m-1 bg-cover flex justify-center items-center shadow-xl rounded max-md:w-[20vw] max-sm:w-[40vw]' style={{ backgroundImage: `url(${props.image})` }}>
          <div className='z-0 absolute inset-0 bg-black opacity-50 hover:opacity-60 transition duration-150 ease-in rounded'></div>
          <p className='z-10 text-white font-semibold text-2xl shadow-2xl'>{props.title}</p>
    </div>
  )
}

export default Card
