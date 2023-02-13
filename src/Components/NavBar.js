import React from 'react'
import logo from './../Media/Logo.svg'
import './../App.css'
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-[#F4ECD6]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="lg:h-36 lg:m-8" />
      </div>
      <div className="flex items-center">
        <a className="px-3 py-2 lg:m-4 rounded-lg text-black  Balloon-Font" href="/home">HOME</a>
        <a className="px-3 py-2 lg:m-4 rounded-lg text-black  Balloon-Font" href="/gallery">GALLERY</a>
        <a className="px-3 py-2 lg:m-4 rounded-lg text-black  Balloon-Font" href="/book">BOOK</a>
      </div>
    </nav>
  )
}
