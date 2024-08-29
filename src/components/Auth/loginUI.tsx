import React from 'react'
import { SquarePlus } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';

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
        <div>
          <div className='absolute top-[65%] left-[12%] px-20 flex space-x-1'>
            <h6 className='text-md text-black items-center'><SquarePlus /></h6>
            <h6 className='text-md text-black items-center'>Check out faster with saved info</h6>
          </div>
          <div className='absolute top-[70%] left-[12%] px-20 flex space-x-1'>
            <h6 className='text-md text-black items-center'><SquarePlus /></h6>
            <h6 className='text-md text-black items-center'>Enjoy our personalized journe</h6>
          </div>
          <div className='absolute top-[75%] left-[12%] px-20 flex space-x-1'>
            <h6 className='text-md text-black items-center'><SquarePlus /></h6>
            <h6 className='text-md text-black items-center'>Keep your orders on track</h6>
          </div>
          <div className='absolute top-[80%] left-[12%] px-20 flex space-x-1'>
            <h6 className='text-md text-black items-center'><SquarePlus /></h6>
            <h6 className='text-md text-black items-center'>Get loyality discounts</h6>
          </div>
        </div>
        <div className='absolute top-[85%] left-[60%] px-20 flex space-x-2'>
          <h6 className='flex text-lg text-green-700 items-center font-bold'>Join with us Now</h6>
          <h6 className='flex text-lg text-green-700 items-center font-bold'><CircleArrowRight />
          </h6>
        </div>
      </div>
    </div>
  )
}

export default loginUI;