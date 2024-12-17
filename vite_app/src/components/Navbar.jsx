import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className ="bg-gray-100" >
      <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* <!-- Logo --> */}
        <div className="flex-shrink-0">
          <a href="#" className="text-white text-2xl font-bold"><img  src="https://www.themealdb.com/images/logo-small.png " alt="" /></a>
        </div>
        {/* <!-- Links --> */}
        <div className="hidden md:flex space-x-8">
          <a href="/Home" className="text-white text-lg font-medium hover:text-yellow-300 transition duration-200">Home</a>
          <a href="/Meals" className="text-white text-lg font-medium hover:text-pink-300 transition duration-200">Meals</a>
          <a href="Cocktails" className="text-white text-lg font-medium hover:text-red-300 transition duration-200">Cocktails</a>
          <a href="Potter" className="text-white text-lg font-medium hover:text-teal-300 transition duration-200">Potter</a>
          <a href="Banks" className="text-white text-lg font-medium hover:text-orange-300 transition duration-200">Banks</a>
        </div>
        {/* <!-- Mobile Menu Button --> */}
        <div className="md:hidden flex items-center">
          <button id="mobile-menu-button" className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* <!-- Mobile Menu --> */}
    <div id="mobile-menu" className="md:hidden hidden bg-gradient-to-r from-green-500 via-blue-600 to-purple-700">
      <button  className="block text-white px-4 py-2 hover:bg-yellow-300 hover:text-black">Home</button>
      <button  className="block text-white px-4 py-2 hover:bg-pink-300 hover:text-black">Meals</button>
      <button  className="block text-white px-4 py-2 hover:bg-red-300 hover:text-black"> Cocktails </button>
      <button  className="block text-white px-4 py-2 hover:bg-teal-300 hover:text-black">Potter</button>
      <button  className="block text-white px-4 py-2 hover:bg-orange-300 hover:text-black">Banks</button>
    </div>
  </nav>

    </div>
  )
}

export default Navbar
