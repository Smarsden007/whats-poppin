import React from 'react'
import tiktok from './../Media/TikTok.png'
import facebook from './../Media/Facebook.png'
import instagram from './../Media/Instagram.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-[#F4ECD6] text-black-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="text-sm text-black-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2022 Whats Poppin Sonoma
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="https://www.tiktok.com/">
            <img src={tiktok} alt='tiktok' className='hover:scale-110' />
          </a>
          <a className="ml-4 text-gray-500" href="https://www.tiktok.com/">
          <img src={facebook} alt='tiktok' className='hover:scale-110' />

          </a>
          <a className="ml-4 text-gray-500" href="https://www.tiktok.com/">
          <img src={instagram} alt='tiktok' className='hover:scale-110' />

          </a>
          
        </span>
        
        <nav className="sm:ml-auto sm:mt-0 mt-4 flex flex-wrap items-center text-base justify-center">
          <Link to='/home'>
          <a href="/" className="mr-5 hover:text-gray-300">
            Home
          </a>
          </Link>
          <Link to='/gallery'>
          <a href="/gallery" className="mr-5 hover:text-gray-300">
            Gallery
          </a>
          </Link>
          <Link to='/book'>
          <a href="/book" className="hover:text-gray-300">
            Book
          </a>
          </Link>
        </nav>
       
      </div>
    </footer>
  )
}
