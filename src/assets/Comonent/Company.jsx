import React from "react";
import Back from "../Photos/Back.png";
import Cablebs from "../Photos/Cablebs.png";
import Easy from "../Photos/Easy.png";
import Amd from "../Photos/Amd.png";
import Dbs from "../Photos/Dbs.png";

function Company() {
  return (
    <section className="py-12 bg-[#07292F]">
      {/* Scrolling Text */}
      <div className="text-center mb-8">
        <h4 className="text-white text-2xl font-semibold animate-marquee">
          Our Trusted Partners
        </h4>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1  justify-center mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <img
            src={Back}
            alt="Back"
            className="w-20 h-20 object-contain shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Cablebs}
            alt="Cablebs"
            className="w-28 h-20 object-contain shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Dbs}
            alt="Dbs"
            className="w-28 h-20 object-contain shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Easy}
            alt="Easy"
            className="w-28 h-20 object-contain shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Amd}
            alt="Amd"
            className="w-28 h-20 object-contain shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>


    </section>
  );
}

export default Company;
