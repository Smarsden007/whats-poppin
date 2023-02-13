import React from 'react'
import logo from './../Media/Logo.svg'
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-[#F4ECD6]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-36" />
      </div>
      <div className="flex items-center">
        <a className="px-3 py-2 rounded-lg text-white hover:bg-gray-700" href="/home">Home</a>
        <a className="px-3 py-2 rounded-lg text-white hover:bg-gray-700" href="/gallery">Gallery</a>
        <a className="px-3 py-2 rounded-lg text-white hover:bg-gray-700" href="/book">Book</a>
      </div>
    </nav>
  )
}
