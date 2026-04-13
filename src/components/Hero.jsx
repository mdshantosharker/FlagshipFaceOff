import React from "react";
import heroImage from "../assets/banner.png";
import MyButton from "./Shared/MyButton";
const Hero = ({handleSearch}) => {
 
  return (
    <div className="mt-10">
      <img className="lg:max-w-4xl mx-auto " src={heroImage} alt="" />
      <div className="text-center lg:space-y-4 space-y-2">
        <h1 className="font-thin mt-5 text-3xl lg:text-7xl text-gray-900">
          Browse,Search,View,Buy
        </h1>
        <p className="text-gray-500 lg:text-xl">
          Best place to browser,search,view details and purchase of top flagship{" "}
          <br />
          phones of the current time - FlagshipFaceOff
        </p>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            type="text"
            name="input" 
            placeholder="Search Phone by Name"
            className="bg-white border border-gray-300 rounded-xs shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />

          <MyButton>Search</MyButton>
        </form>
      </div>
    </div>
  );
};

export default Hero;
