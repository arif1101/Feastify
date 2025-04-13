import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative left-1/2 -ml-[50vw] w-screen text-white">
      {/* Top Footer Section with 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
        
        {/* Left Section (Contact Info) */}
        <div className="bg-[#1E293B] py-10 px-4 flex flex-col items-end lg:pr-[158px]">
          <h3 className="text-lg font-bold mb-3">CONTACT US</h3>
          <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-sm mt-1">+88 123456789</p>
          <p className="text-sm mt-1">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Right Section (Social Links) */}
        <div className="bg-[#0F172B] py-10 px-4 flex flex-col items-start lg:pl-[158px]">
          <h3 className="text-lg font-bold mb-3">Follow US</h3>
          <p className="text-sm mb-4">Join us on social media</p>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0A0A0A] py-3 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} CulinaryCloud. All rights reserved.
      </div>
    </div>

)};

export default Footer;
