import React from 'react'

const images=["/images/design4.png","/images/image 2.jpg","/images/design2.png","/images/design3.png","/images/design5.png","/images/design6.png","/images/design7.jpeg","/images/design8.jpeg","/images/design9.jpeg","/images/design10.jpeg","/images/design11.jpeg","/images/design12.jpeg","/images/design13.jpeg"];

const MasonaryGrid=() =>{
  return (
    <div className='columns-2 sm:columns-4 lg:column-4 px-4 py-10 md:py-20 md:px-6 gap-4'>
      {images.map((src,index)=>
      <div key={index} className='mb-4 break-inside-avoid'>
        <img src={src} className='w-full object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300' />
      </div>)}
    </div>
  )
}

export default MasonaryGrid;