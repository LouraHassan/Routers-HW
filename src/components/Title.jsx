import React from 'react'
import Cards from './Cards'
function Title(props) {
  return (
    <div className='z-10 w-full h-screen flex flex-col justify-around items-center'>
    <div className='z-10 flex flex-col items-center'>
  
    <p className='m-3 text-6xl text-white font-semibold'>{props.title}</p>
              <p className='text-xl tracking-wider text-white w-[60vw] text-center max-md:text-sm max-md:w-[90vw]'>{props.text}</p>
  
    </div>
    <div className='z-10 flex flex-col items-center'>
      
    <p className='text-md text-white font-semibold m-2 max-md:text-xs'>Click on the card to change the background</p>
  <Cards></Cards>
  </div>
  </div>
  )
}

export default Title
