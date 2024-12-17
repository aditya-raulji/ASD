import React from 'react'
import './MainPage.css'

function MainPage() {
  return (
    
    <div className="group bg-gradient-to-r from-blue-400 to-green-500 p-8 rounded-lg shadow-lgflex items-center justify-center h-screen">
   <div className="w-full max-w-md mx-auto">
    <ul className="grid grid-cols-1 gap-4">
      {/* <!-- Home --> */}
      <li className="group bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <a href="/Home" className="flex items-center justify-between">
          <button  className="glow-on-hover relative w-56 h-12 text-white bg-gray-900 rounded-lg focus:outline-none">Home</button>
          <svg className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
          </svg>
        </a>
      </li>
      {/* <!-- Meals -->/ */}
      <li className="group bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <a href="/Meals" className="flex items-center justify-between">
          <button className="glow-on-hover relative w-56 h-12 text-white bg-gray-900 rounded-lg focus:outline-none">Meals</button>
          <svg className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14V10m0 0V7m0 3h3m-3 0h-3m9 9a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </a>
      </li>
      {/* <!-- Cocktails --> */}
      <li className="group bg-gradient-to-r from-purple-400 to-indigo-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <a href="/Cocktails" className="flex items-center justify-between">
          <button className="glow-on-hover relative w-56 h-12 text-white bg-gray-900 rounded-lg focus:outline-none">Cocktails</button>
          <svg className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12l-8-5-8 5m0 0v7a4 4 0 008 0v-7m0 0l8-5m-8 5l8 5"></path>
          </svg>
        </a>
      </li>
      {/* <!-- Potter --> */}
      <li className="group bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <a href="Potter" className="flex items-center justify-between">
          <button className="glow-on-hover relative w-56 h-12 text-white bg-gray-900 rounded-lg focus:outline-none">Potter</button>
          <svg className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3L12 15.75M12 15.75L14.25 3M12 15.75L21 12m-18 0l9-3.75"></path>
          </svg>
        </a>
      </li>
      {/* <!-- Banks --> */}
      <li className="group bg-gradient-to-r from-teal-400 to-cyan-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
        <a href="Banks" className="flex items-center justify-between">
          <button className="glow-on-hover relative w-56 h-12 text-white bg-gray-900 rounded-lg focus:outline-none">Banks</button>
          <svg className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3L12 15.75M12 15.75L14.25 3M12 15.75L21 12m-18 0l9-3.75"></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
    </div>


   

  
  )
}

export default MainPage
