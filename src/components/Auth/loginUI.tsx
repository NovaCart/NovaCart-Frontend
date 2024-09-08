import React, { useState } from 'react';
import { SquarePlus, CircleArrowRight } from 'lucide-react';
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
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-start">
      <div className="relative bg-slate-200 w-full h-full lg:w-3/5 lg:h-auto flex flex-col p-6 lg:p-0">
        <div className="flex flex-col text-center lg:text-left lg:absolute lg:top-[10%] lg:left-[12%]">
          <h1 className="text-xl lg:text-3xl text-black font-bold mb-4">Make things easier with an official account</h1>
          <h1 className="text-xl lg:text-3xl text-black font-bold mt-8 lg:mt-16">
            <p>Welcome to</p>
            <p className="text-green-700">NOVACART</p>
          </h1>
        </div>

        <div className="flex flex-col mt-10 lg:mt-auto">
          <div className="flex items-center space-x-2 mt-4">
            <SquarePlus className="text-black" />
            <h6 className="text-black">Check out faster with saved info</h6>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <SquarePlus className="text-black" />
            <h6 className="text-black">Enjoy our personalized journey</h6>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <SquarePlus className="text-black" />
            <h6 className="text-black">Keep your orders on track</h6>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <SquarePlus className="text-black" />
            <h6 className="text-black">Get loyalty discounts</h6>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start items-center mt-8 lg:mt-16 space-x-2">
          <h6 className="text-green-700 font-bold">Join with us Now</h6>
          <CircleArrowRight className="text-green-700" />
        </div>
      </div>

      <div className="w-full lg:w-2/5 h-full lg:h-auto flex flex-col p-10 bg-white">
        <div className="bg-white rounded-lg w-full max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex w-64 h-12 bg-gray-200 rounded-full p-1">
              <Button
                onClick={() => setIsLogin(false)}
                className={`flex-1 text-center font-semibold rounded-full ${!isLogin ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300 ease-in-out`}
              >
                Sign Up
              </Button>
              <Button
                onClick={() => setIsLogin(true)}
                className={`flex-1 text-center font-semibold rounded-full ${isLogin ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300 ease-in-out`}
              >
                Log In
              </Button>
            </div>
          </div>

          <div>
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-600 flex-grow mr-3"></div>
            <span className="text-gray-500">OR</span>
            <div className="border-t border-gray-600 flex-grow ml-3"></div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-4">
            <button className="flex items-center justify-center w-full max-w-xs bg-white border border-gray-300 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Logo" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center w-full max-w-xs bg-white border border-gray-300 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" className="w-5 h-5 mr-2" />
              Continue with Apple
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By continuing you agree to create or log in to an account under NovaCart Terms of Use and Privacy Policy and Bolt’s Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
