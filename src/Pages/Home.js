import React from "react";
import TanArch from "./../Media/TanArch.png";
import "./../App.css";
export const Home = () => {
  return (
    <div className="bg-[#F4ECD6]">
      <div className="flex flex-row justify-around ">
        <div className="flex flex-col">
        <h1 className="align-middle my-6 w-96 Lemon-Font">
          Don't let your event fall flat, make it pop with Whats Poppin Balloon
          Decor
        </h1> 
        <button className="w-72">
        <span class="button_top"> LEARN MORE</span>
      </button>
      </div>
      <div>
        <img src={TanArch} className="h-full w-full " />
        </div>
      </div>
     
    </div>
  );
};
