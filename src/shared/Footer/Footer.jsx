import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
<div className="bg-yellow-700 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <footer className="text-white py-10 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The Daily Dish</h2>
        <p className="text-sm leading-6">
          Serving delicious meals daily with love and care. Come dine with us and enjoy!
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/menu" className="hover:underline">Menu</a></li>
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/*-- Social Links-- */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center md:justify-start gap-4 text-lg">
          <a href="#"><FaFacebookF className="hover:text-orange-200" /></a>
          <a href="#"><FaInstagram className="hover:text-orange-200" /></a>
          <a href="#"><FaTwitter className="hover:text-orange-200" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-orange-200" /></a>
        </div>
      </div>
    </div>
  </footer>

  {/* Bottom Bar */}
  <div className="text-center text-sm text-orange-100 pb-5">
    &copy; {new Date().getFullYear()} The Daily Dish. All rights reserved.
  </div>
</div>

)};

export default Footer;
