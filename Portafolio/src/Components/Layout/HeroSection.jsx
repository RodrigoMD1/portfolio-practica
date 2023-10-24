import React from 'react'

export const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black ">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1600" className="max-w-xl rounded-lg shadow-2xl" />
        <div >
          <h1 className="text-7xl font-bold text-white ">Rodrigo Martinez Duvivier</h1>
          <p className="py-6">Desarrollador web.</p>
          <button className="btn  bg-blue-400 text-white">Get Started</button>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  )
}


