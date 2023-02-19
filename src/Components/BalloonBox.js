import React from 'react';
import balloonImage from './../Media/BlueArch.png';

export const BalloonBox = () => {
  return (
    <div>
     
        <div className="relative">
          <img
            src={balloonImage}
            alt="Balloon Arrangement"
            className="w-full h-full object-cover"
          />
          
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-2 z-10 text-white Lemon-Font2 text-[1rem2]">
            Browse collection of luxury balloon arrangements. Select the arrangement that best suits your needs and preferences.Choose your preferred color scheme, theme, and any additional customizations you would like to add.
          </h4>
        </div>
    
    </div>
  );
};
