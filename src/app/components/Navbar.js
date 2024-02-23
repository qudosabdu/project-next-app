'use client'
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
const { useState } = React;
let url = [
  { name: "About us", link: "/" },
  { name: "Who we are", link: "/" },
  { name: "Our Solution", link: "/" },
  { name: "العربية", link: "/" },
];

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <div className="text-white mx-auto">
      <div className="flex justify-between items-center px-10 py-5">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        {isMenuVisible && (
          <div className="text-white  shadow transition-all duration-300  ">
            <ul className="flex space-x-5">
              {url.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
        <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <IoMenuOutline size={30}  />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
