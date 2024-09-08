// import React, { useState } from 'react';
// import { SquarePlus, CircleArrowRight } from 'lucide-react';
// import { Button } from '../ui/button';
// import LoginForm from './loginForm';
// import SignupForm from './signupForm';

// const LoginUI: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);

//   const toggle = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div className="w-full h-screen flex flex-col md:flex-row items-start">
//       <div className="relative bg-slate-200 w-full md:w-3/5 h-full flex flex-col">
//         <div className="absolute top-[10%] left-[2%] md:left-[12%] flex flex-col">
//           <h1 className="text-xl md:text-4xl text-black space-y-2 space-x-4 ">
//             Make things easier with an official account
//             {/* <p className="flex justify-center gap-2 md:gap-4">with an official</p>
//             <p className="flex justify-center space-x-2 md:space-x-4">account</p> */}
//           </h1>
//         </div>

//         <div className="absolute top-[10%] left-[5%] md:left-[18%] px-4 md:px-56 flex flex-col">
//           <h1 className="text-xl md:text-4xl text-black mt-10 md:mt-40 items-center font-bold">
//             <p className="flex justify-center">Welcome</p>
//             <p className="flex justify-center">to</p>
//             <p className="flex justify-center text-green-700">NOVACART</p>
//           </h1>
//         </div>

//         <div className="mt-32 md:mt-0">
//           <div className="absolute top-[65%] left-[5%] md:left-[12%] px-4 md:px-20 flex space-x-1">
//             <h6 className="text-sm md:text-md text-black items-center">
//               <SquarePlus />
//             </h6>
//             <h6 className="text-sm md:text-md text-black items-center">
//               Check out faster with saved info
//             </h6>
//           </div>

//           <div className="absolute top-[70%] left-[5%] md:left-[12%] px-4 md:px-20 flex space-x-1">
//             <h6 className="text-sm md:text-md text-black items-center">
//               <SquarePlus />
//             </h6>
//             <h6 className="text-sm md:text-md text-black items-center">
//               Enjoy our personalized journey
//             </h6>
//           </div>

//           <div className="absolute top-[75%] left-[5%] md:left-[12%] px-4 md:px-20 flex space-x-1">
//             <h6 className="text-sm md:text-md text-black items-center">
//               <SquarePlus />
//             </h6>
//             <h6 className="text-sm md:text-md text-black items-center">
//               Keep your orders on track
//             </h6>
//           </div>

//           <div className="absolute top-[80%] left-[5%] md:left-[12%] px-4 md:px-20 flex space-x-1">
//             <h6 className="text-sm md:text-md text-black items-center">
//               <SquarePlus />
//             </h6>
//             <h6 className="text-sm md:text-md text-black items-center">
//               Get loyalty discounts
//             </h6>
//           </div>
//         </div>

//         <div className="absolute top-[85%] left-[10%] md:left-[60%] px-10 md:px-20 flex space-x-2">
//           <h6 className="flex text-md md:text-lg text-green-700 items-center font-bold">
//             Join with us Now
//           </h6>
//           <h6 className="flex text-md md:text-lg text-green-700 items-center font-bold">
//             <CircleArrowRight />
//           </h6>
//         </div>
//       </div>

//       <div className="w-full md:w-2/5 h-full flex flex-col p-10">
//         <div className="bg-white rounded-lg w-full max-w-md mx-auto">
//           <div className="flex items-center justify-center">
//             <div className="flex w-64 h-12 bg-gray-200 rounded-full p-1">
//               <Button
//                 onClick={() => setIsLogin(false)}
//                 className={`flex-1 text-center font-semibold rounded-full ${!isLogin ? 'bg-black text-white' : 'bg-white text-black'
//                   } transition-all duration-300 ease-in-out`}
//               >
//                 Sign Up
//               </Button>
//               <Button
//                 onClick={() => setIsLogin(true)}
//                 className={`flex-1 text-center font-semibold rounded-full ${isLogin ? 'bg-black text-white' : 'bg-white text-black'
//                   } transition-all duration-300 ease-in-out`}
//               >
//                 Log In
//               </Button>
//             </div>
//           </div>

//           <div className="grid">
//             {isLogin ? <LoginForm /> : <SignupForm />}
//           </div>

//           {/* Horizontal Line */}
//           <div className="flex items-center justify-center my-4">
//             <div className="border-t border-gray-600 flex-grow mr-3"></div>
//             <span className="text-gray-500">OR</span>
//             <div className="border-t border-gray-600 flex-grow ml-3"></div>
//           </div>

//           {/* Social Login Buttons as Column */}
//           <div className="flex flex-col items-center gap-4 mb-4">
//             <button className="flex items-center justify-center w-full max-w-xs bg-white border border-gray-300 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Logo" className="w-5 h-5 mr-2" />
//               Continue with Google
//             </button>
//             <button className="flex items-center justify-center w-full max-w-xs bg-white border border-gray-300 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" className="w-5 h-5 mr-2" />
//               Continue with Apple
//             </button>
//           </div>

//           {/* Terms and Conditions */}
//           <p className="text-xs text-gray-500 text-center">
//             By continuing you agree to create or log in to an account under NovaCart Terms of Use and Privacy Policy and Bolt’s Terms of Use and Privacy Policy.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginUI;

import React, { useState } from 'react';
import { SquarePlus, CircleArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import LoginForm from './loginForm';
import SignupForm from './signupForm';

const LoginUI: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Left Section */}
      <div className="relative bg-slate-200 w-full md:w-3/5 h-full flex flex-col p-8">
        <div className="absolute top-10 left-4 md:left-16 space-y-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-black">
            Make things easier with an official account
          </h1>
        </div>

        <div className="absolute top-[15%] left-4 md:left-16 px-4 md:px-56">
          <h1 className="text-3xl md:text-5xl text-black mt-8 md:mt-20 text-center font-bold">
            <p>Welcome</p>
            <p>to</p>
            <p className="text-green-700">NOVACART</p>
          </h1>
        </div>

        {/* Features */}
        <div className="absolute bottom-32 md:bottom-40 space-y-4 left-4 md:left-16">
          {[
            'Check out faster with saved info',
            'Enjoy our personalized journey',
            'Keep your orders on track',
            'Get loyalty discounts',
          ].map((text, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm md:text-md">
              <SquarePlus />
              <h6 className="text-black">{text}</h6>
            </div>
          ))}
        </div>

        {/* Join Now Button */}
        <div className="absolute bottom-10 md:bottom-16 left-10 md:left-[60%] flex items-center space-x-2">
          <h6 className="text-lg text-green-700 font-bold">Join with us Now</h6>
          <CircleArrowRight className="text-green-700" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/5 h-full flex flex-col justify-center p-6 md:p-10">
        <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6">
          {/* Toggle between Log In and Sign Up */}
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

          {/* Form Section */}
          <div className="grid">
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-600 flex-grow mr-3"></div>
            <span className="text-gray-500">OR</span>
            <div className="border-t border-gray-600 flex-grow ml-3"></div>
          </div>

          {/* Social Login Buttons */}
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

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-500 text-center">
            By continuing you agree to create or log in to an account under NovaCart Terms of Use and Privacy Policy and Bolt’s Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
