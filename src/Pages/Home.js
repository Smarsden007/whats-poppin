import React from "react";
import "./../App.css";
import { Hero } from "../Components/Hero";
import { SubHero } from "../Components/SubHero";
import { BalloonBox } from "../Components/BalloonBox";
import ThreeTest from "../Components/ThreeTest";


export const Home = () => {
  return (
    <div className="bg-[#F4ECD6]">
     <Hero />
     <ThreeTest />
     <SubHero />
     <BalloonBox />
    </div>
  );
};
