import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../Media/Logo.svg";
import { FaBars } from "react-icons/fa";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "fixed top-0 left-0 w-full h-full bg-[#F4ECD6] z-50" : ""
      }`}
    >
      <div className="bg-[#F4ECD6]  w-full">
        <nav className="mx-auto flex justify-between  bg-[#F4ECD6]">
          <img src={logo} alt="Logo" className="lg:h-36 lg:m-8 h-20" />
          <div className="block  mt-2 mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center m-2 px-5 py-3  text-beige-200"
              style={{backgroundColor:'#F4ECD6'}}
            >
              <FaBars size={40} style={{color:'black'}} />
            </button>
          </div>

          <ul
            className={`text-right font-light text-2xl p-4 inline-flex ${
              isOpen ? "" : "hidden lg:flex justify-end mx-22"
            } lg:hidden`}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "#F4ECD6",
              zIndex: "5",
              display: isOpen ? "block" : "none",
            }}
          >
            <div className="grid grid-cols-2">
              <div className="gird col-start-2">
                <Link onClick={() => setIsOpen(false)} to="/">
                  <li className="m-4  hover:text-stone-400">
                    <a href="home">HOME</a>
                  </li>
                </Link>
                <li className="m-4 hover:text-stone-400 ">
                  <Link onClick={() => setIsOpen(false)} to="/rentals">
                    <a href="rentals">RENTALS</a>
                  </Link>
                </li>
                <li className="m-4 hover:text-stone-400 ">
                  <a href="extra">EXTRAS</a>
                </li>
                <li className="m-4 hover:text-stone-400 ">
                  <a href="pop-ups">POP-UPS</a>
                </li>
                <li className="m-4 hover:text-stone-400 ">
                  <Link onClick={() => setIsOpen(false)} to="/partners">
                    <a href="partners">PARTNERS</a>
                  </Link>
                </li>
                <li className="m-4 hover:text-stone-400 ">
                  <Link to="/checkout" onClick={() => setIsOpen(false)}>
                    {" "}
                    <a href="book">BOOK</a>
                  </Link>
                </li>
              </div>
              <div className="grid col-start-1 absolute top-0">
                <li className="m-4 hover:text-slate-400 text-md ">
                  <button onClick={() => setIsOpen(false)} className='text-md'
                  style={{backgroundColor: '#F4ECD6', fontSize:'2rem'}}>x</button>
                </li>
              </div>
            </div>
            <div></div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
