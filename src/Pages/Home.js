import React from "react";
import "./../App.css";
import { Hero } from "../Components/Hero";
import { SubHero } from "../Components/SubHero";
export const Home = () => {
  return (
    <div className="bg-[#F4ECD6]">
     <Hero />
     <SubHero />
    </div>
  );
};
