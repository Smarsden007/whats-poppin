import React from 'react'
import tiktok from './../Media/TikTok.png'
import facebook from './../Media/Facebook.png'
import instagram from './../Media/Instagram.png'

export const Footer = () => {
  return (
    <footer className="bg-[#F4ECD6] text-gray-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2022 Whats Poppin Sonoma —
          <a
            href="https://twitter.com/intent/tweet?url=#"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @whatspoppinsonoma
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <img src={tiktok} alt='tiktok' />
          </a>
          <a className="ml-4 text-gray-500">
          <img src={facebook} alt='tiktok' />

          </a>
          <a className="ml-4 text-gray-500">
          <img src={instagram} alt='tiktok' />

          </a>
        </span>
        <nav className="sm:ml-auto sm:mt-0 mt-4 flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="mr-5 hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <p className="sm:mt-0 mt-4 text-gray-500">
          Phone: (555) 555-5555
        </p>
      </div>
    </footer>
  )
}
