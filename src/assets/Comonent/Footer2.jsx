import React from 'react';
import Logo from "../Photos/Logo.png";

function Footer2() {
  return (
    <section className='bg-[#02242A] text-white py-6'>
      <div className='container mx-auto px-4 flex justify-between shadow-2xl py-3 items-center'>
        {/* Logo */}
        <div>
          <img  src={Logo} alt="Wizia Logo" className='h-10 w-18' />
        </div>

        {/* Copyright Text */}
        <div className='text-[#96ACAF] text-sm'>
          Copyright © 2023 Wizia. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer2;
