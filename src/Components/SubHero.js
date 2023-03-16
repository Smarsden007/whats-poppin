import React from "react";
import "./../App.css";

export const SubHero = () => {
  return (
    <div className="flex flex-col justify-center align-center items-center m-8 p-8">
      <div className="flex lg:flex-row flex-col justify-center gap-0">
        <div className="border-4 border-black lg:border-r-2 lg:w-3/12 p-4">
          <h3 className="text-center p-4 Lemon-Font">Step 1.</h3>
          <h4 className="text-center p-2 Lemon-Font2 text-[1rem2]">
            Browse collection of luxury balloon arrangements. Select the
            arrangement that best suits your needs and preferences. Choose your
            preferred color scheme, theme, and any additional customizations you
            would like to add.
          </h4>
        </div>
        <div className="border-4 border-black lg:border-r-2 lg:w-3/12 p-4">
          <h3 className="text-center p-4 Lemon-Font">Step 2.</h3>
          <h4 className="text-center p-2 Lemon-Font2 text-[1rem2]">
            Specify any special requests or instructions you may have for the
            arrangement. Provide your contact and delivery information,
            including your name, address, phone number, and email address. Select
            your preferred delivery date and time.
          </h4>
        </div>
        <div className="border-4 border-black lg:w-3/12 p-4">
          <h3 className="text-center p-4 Lemon-Font">Step 3.</h3>
          <h4 className="text-center p-4 Lemon-Font2 ">
            Once all your information is received a member of our team will
            reach out to confirm the details and send a link for the deposit. As
            simple as that, one less item for you to worry about at your event.
          </h4>
        </div>
      </div>
      <button className="w-48 m-6">
            <span class="button_top "> BOOK NOW</span>
          </button>
    </div>
  );
};
