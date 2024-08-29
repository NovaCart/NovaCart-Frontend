import React from 'react'

const loginUI = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative bg-slate-200 w-3/5 h-full flex flex-col'>
        <div className='absolute top-[10%] left-[20%] flex flex-col0'>
          <h1 className='text-3xl text-black space-y-2 space-x-4 px-40'>Make things easier
            <p className='flex justify-center gap-4'>with an official</p>
            <p className='flex justify-center space-x-4'>account</p>
          </h1>
        </div>
        <div className='absolute top-[15%] left-[20%] px-56 flex flex-col0'>
          <h1 className='text-3xl text-black mt-40 items-center font-bold'> <p className='flex justify-center'>Welcome</p>
            <p className='flex justify-center'>to</p>
            <p className='flex justify-center  text-green-700'>NOVACART</p>
          </h1>
        </div>
        <div className='absolute top-[65%] left-[16%] px-20 flex flex-col'>
          <h6 className='text-md text-black items-center'>Check out faster with saved info</h6>
          <h6 className='text-md text-black items-center'>Enjoy our personalized journey </h6>
          <h6 className='text-md text-black items-center'>Keep your orders on track</h6>
          <h6 className='text-md text-black items-center'>Get loyality discounts</h6>

        </div>
        <div className='absolute top-[85%] left-[60%] px-20 flex flex-co'>
        <h6 className='text-lg text-green-700 items-center font-bold'>Join with us Now</h6>

        </div>
      </div>
      </div>
      )
}

      export default loginUI;