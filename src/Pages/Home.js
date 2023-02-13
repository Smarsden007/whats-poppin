import React from "react";
import TanArch from "./../Media/TanArch.png";
import "./../App.css";
export const Home = () => {
  return (
    <div className="bg-[#F4ECD6]">
      <div className="flex flex-row justify-around ">
        <div className="flex flex-col">
          <h1 className="align-middle my-6 w-96 Lemon-Font">
            Don't let your event fall flat, make it pop with
            <span> </span>
            <span style={{color: "#ff0000" }}>W</span>
            <span style={{ color: "#00ff00" }}>h</span>
            <span style={{ color: "#0000ff" }}>a</span>
            <span style={{ color: "#ffff00" }}>t</span>
            <span style={{ color: "#00ffff" }}>s</span>
            <span> </span>
            <span style={{ color: "#ff00ff" }}>P</span>
            <span style={{ color: "#0000ff" }}>o</span>
            <span style={{ color: "#00ff00" }}>p</span>
            <span style={{ color: "#ff0000" }}>p</span>
            <span style={{ color: "#00ffff" }}>i</span>
            <span style={{ color: "#ffff00" }}>n</span>
            <span> </span>
            Balloon Decor
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
