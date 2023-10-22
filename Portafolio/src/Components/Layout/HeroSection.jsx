import React from 'react'

export const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1600" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-7xl font-bold text-white">Rodrigo Martinez Duvivier</h1>
          <p className="py-6">Desarrollador web.</p>
          <button className="btn btn-primary">Get Started</button>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
