"use client";
import React from 'react';
import Image from 'next/image';
import logoImage from '../assets/images/1.png';
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=''>
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgba(222,242,65,0.7),rgba(0,107,96,0.7),rgba(165,220,210,0.7),rgba(100,155,146,0.7))] blur-md"></div>
            <Image 
              src={logoImage} 
              alt= "BloomCard logo" 
              className= "h-16 w-16 relative" 
            />
          </div>
          {/* Hamburger menu button for mobile */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer">
            <MenuIcon className="text-white" />
          </div>
          {/* Desktop Menu */}
          <nav className="gap-6 items-center hidden sm:flex">
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Özellikler</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Ürünler</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>İletişim</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Dene</a>
            <button className='bg-white py-2 px-4 rounded-lg'>Satın Al!</button>
          </nav>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center bg-black py-4 space-y-4">
          <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Özellikler</a>
          <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Ürünler</a>
          <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>İletişim</a>
          <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Dene</a>
          <button className='bg-white py-2 px-4 rounded-lg'>Satın Al!</button>
        </div>
      )}
    </div>
  );
};
