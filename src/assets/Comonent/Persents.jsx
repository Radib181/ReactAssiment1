import React from 'react';
import Img from "../Photos/Img.png";

function Persents() {
  return (
    <section className="relative  py-12 md:py-16 mt-20 hover:shadow-lg  h-auto w-full max-w-7xl mx-auto rounded-2xl shadow-2xl">
      {/* Reversed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Img})`,
          // Flip image horizontally
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Allocate effort where your reps make an inpact.
          </h1>
          <h2 className="text-[#0FF1F6] text-lg md:text-2xl italic">
          Let us handle the rest.
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-4 max-w-3xl mx-auto">
          Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
          </p>
        </div>



        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
  <div>
    <h1 className='text-3xl text-[#0FF1F6]'>32%</h1>
    <p className='text-white'>Improvement in Open Rates</p>
  </div>

  <div>
    <h1 className='text-3xl text-[#0FF1F6]'>75%</h1>
    <p className='text-white'>Improvement in Ramp Time</p>
  </div>

  <div>
    <h1 className='text-3xl text-[#0FF1F6]'>35%</h1>
    <p className='text-white'>Improvement in Meetings Booked</p>
  </div>
</div>


      </div>
    </section>
  );
}

export default Persents;
