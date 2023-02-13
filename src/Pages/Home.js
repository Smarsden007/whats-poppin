import React from "react";
import TanArch from "./../Media/TanArch.png";
import './../App.css'
export const Home = () => {
  return (
    <div className="bg-[#F4ECD6]">
      <div className="flex flex-row justify-around ">
        <h1 className="align-middle my-auto Lemon-Font w-1/5">Don't let your event fall flat, make it pop with Whats Poppin Balloon Decor</h1>
        <img src={TanArch} className="h-full" />
      </div><button className="border-solid border rounded shadow-xl  border-black text-[1.5rem] p-3 Retro-Font"> LEARN MORE </button>
    </div>
  );
};
