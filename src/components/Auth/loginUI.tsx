import React, { useState } from 'react'
import { SquarePlus } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import LoginForm from './loginForm';
import SignupForm from './signupForm';

const LoginUI: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative bg-slate-200 w-3/5 h-full flex flex-col'>
        <div className='absolute top-[10%] left-[20%] flex flex-col0'>
          <h1 className='text-3xl text-black space-y-2 space-x-4 px-40'>Make things easier
            <p className='flex justify-center gap-4'>with an official</p>
            <p className='flex justify-center space-x-4'>account</p>
          </h1>
        </div>
        <div className='absolute top-[15%] left-[18%] px-56 flex flex-col0'>
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
      <div className='w-2/5 h-full flex flex-col p-10 '>


        <div className="bg-white sm:pl-20 rounded-lg w-full max-w-md">
          <div className="flex items-center justify-center">
            <div className="flex w-64 h-12 bg-gray-200 rounded-full p-1">
              <Button
                onClick={() => setIsLogin(false)}
                className={`flex-1 text-center font-semibold rounded-full ${!isLogin ? 'bg-black text-white' : 'bg-white text-black'
                  } transition-all duration-300 ease-in-out`}
              >
                Sign Up
              </Button>
              <Button
                onClick={() => setIsLogin(true)}
                className={`flex-1 text-center font-semibold rounded-full ${isLogin ? 'bg-black text-white' : 'bg-white text-black'
                  } transition-all duration-300 ease-in-out`}
              >
                Log In
              </Button>
            </div>
           

          </div>
          <div className='grid' >
              {isLogin ? <LoginForm /> : <SignupForm />}
            </div>
          
        </div>
      </div>


    </div>
  )
}


export default LoginUI;