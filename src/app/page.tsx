"use client";
import React, { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  { name: 'Overview', id: 'overview' },
  { name: 'Prices', id: 'prices' },
  { name: 'Blog', id: 'blog' },
  { name: 'Feedback', id: 'feedback' }
];

const NavItem = ({ name, id, isActive, onClick }) => (
    <li
        href="#"
        onClick={onClick}
        className={`block px-4 py-2 text-white ${isActive ? 'text-[#6a5eae]' : 'hover:text-[#5b4da5]'}`}
    >
      {name}
    </li>
);

export default function Home() {
  const [activeLink, setActiveLink] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className="bg-[#2c198d] min-h-screen">
        <nav className="flex justify-between items-center w-full p-4 mt-8 md:justify-center fixed top-0 left-0 right-0 z-50 p-4 text-white">
          <div
              className="flex-initial justify-center items-center md:flex-[0.5] text-lg font-bold cursor-pointer">Startup 3
          </div>
          <ul className="hidden md:flex list-none hidden md:flex list-none flex-row justify-between items-center text-white">
            {navItems.map(item => (
                <NavItem
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    isActive={activeLink === item.id}
                    onClick={() => handleLinkClick(item.id)}
                />
            ))}
            <li className="px-7 py-2 mx-4 bg-[#e93a7d] rounded-full cursor-pointer hover:opacity-90">Purchase</li>
          </ul>
          <div className="relative flex">
            {!isMenuOpen && (
                <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={toggleMenu}/>
            )}
            {isMenuOpen && (
                <ul className="fixed top-0 right-0 w-[70vw] h-screen p-3 shadow-2xl z-10 md:hidden list-none flex flex-col items-end justify-start blue-glassmorphism text-white animate-slide-in">
                  <li className="w-full my-2 text-xl mt-10"><AiOutlineClose onClick={toggleMenu}/></li>
                  {navItems.map(item => (
                      <NavItem
                          key={item.id}
                          name={item.name}
                          id={item.id}
                          isActive={activeLink === item.id}
                          onClick={() => handleLinkClick(item.id)}
                          classprops="my-2 text-lg"
                      />
                  ))}
                  <li className="mt-8 px-7 py-2 mx-4 bg-[#e93a7d] rounded-full cursor-pointer hover:opacity-90">Purchase</li>
                </ul>
            )}
          </div>
        </nav>
        <div className="container mx-auto flex flex-col items-center justify-center md:md:flex-[0.5] min-h-screen text-white py-20 md:flex-row md:py-10">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="mb-8 text-5xl font-bold">
              <span className="block mb-2 md:mb-4">Generate</span>
              <span className="block mb-2 md:mb-4">Awesome Web</span>
              <span className="block">Pages</span>
            </div>
            <p className="mb-6 text-base w-[300px] md:text-lg">
              The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.
            </p>
            <button className="px-6 py-3 bg-[#e93a7d] rounded-full hover:opacity-90">Learn More</button>
          </div>
          <div className="bg-white rounded-lg shadow-lg md:p-8 p-6 w-[420px] text-blue-900">
            <h2 className="mt-4 mb-6 text-4xl text-center">Sign Up Now</h2>
            <form className="flex flex-col items-center">
              <input type="email" placeholder="Your email" className="w-[300px] p-3 mb-4 border rounded-full" />
              <input type="password" placeholder="Your password" className="w-[300px] p-3 mb-4 border rounded-full" />
              <div className="flex items-center w-[300px] mb-4 justify-start">
                <input type="checkbox" id="terms" className="mr-2 custom-checkbox" />
                <label htmlFor="terms" className="text-sm text-[#a1a1b0]">I agree to the Terms of Service.</label>
              </div>
              <button type="submit" className="w-[300px] py-3 mb-4 bg-[#442cde] text-white rounded-full hover:opacity-90">Sign In</button>
              <div className="flex items-center w-[300px] mb-4">
                <div className="flex-1 border-t-2 border-gray-300"></div>
                <span className="mx-4 text-[#a1a1b0]">or</span>
                <div className="flex-1 border-t-2 border-gray-300"></div>
              </div>
              <button type="button" className="w-[300px] py-3 mb-4 bg-[#4d9feb] text-white rounded-full hover:opacity-90">Login via Twitter</button>
              <p className="mt-4 text-sm text-center text-[#a1a1b0]">
                Do you have an Account? <a href="#" className="text-[#68d7c5] hover:opacity-90">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}
