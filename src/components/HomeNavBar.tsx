import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FiMenu, FiUser} from 'react-icons/fi'

function HomeNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between items-center bg-gray-950 py-5 md:pl-24 pl-1'>
      <div className='text-green-800 font-thin font-serif md:text-5xl text-3xl pl-24'>
        <Link to="/home">
          NovaCart
        </Link>
      </div>

      <div className="md:hidden pr-6">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FiMenu className="w-6 h-6 text-gray-100" />
        </button>
      </div>

      <div className={`absolute md:top-0 top-16 right-4 ${isMenuOpen ? "flex" : "hidden"} md:relative md:flex flex-col md:flex-row items-center md:items-center md:pr-8 md:bg-transparent bg-gray-100 rounded p-4`}>
      <ul className='flex md:flex-row flex-col md:space-x-10 space-y-4 md:space-y-0 text-gray-100 md:text-gray-100'>
      <li>
            <NavLink to='/home' 
              className={({isActive}) => (
                isActive? "text-green-600 font-bold" : "text-gray-600"
              ) }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/gallery'
              className={({isActive}) => (
                isActive? "text-green-600 font-bold" : "text-gray-600"
              ) }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to='/men'
              className={({isActive}) => (
                isActive? "text-green-600 font-bold" : "text-gray-600"
              ) }
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to='/women'
              className={({isActive}) => (
                isActive? "text-green-600 font-bold" : "text-gray-600"
              ) }
            >
              Women
            </NavLink>
          </li>
          <li >
            <NavLink to='/SignUp'
              className={({isActive}) => (
                isActive? "font-bold" : ""
              ) }
            >
              <span className='bg-green-700 px-4 py-2 rounded' >
                SignUp
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'
              className={({isActive}) => (
                isActive? "text-green-600 font-bold" : "text-gray-600"
              ) }
            >
              <FiUser className='h-6 w-6'/>
            </NavLink>
          </li>
        </ul>
      </div>
        
    </div>
  )
}

export default HomeNavBar
