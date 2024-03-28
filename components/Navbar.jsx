import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="top-text bg-gray-800 text-white p-2 overflow-hidden">
        <p className="scrolling-text">
          <span>
            Mobile: +254724612514 | Email Us info@fischertelesec.co.ke{" "}
          </span>
        </p>
      </div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
        <div className="flex items-center">
  <div className="relative">
    <Image
      src="/LG1.PNG"
      alt="logo"
      height={60} // Adjust the height to fit your design
      width={80} // Adjust the width to fit your design
      className="logo-image" // Add your custom class here
    />   
  </div>
  <h1 className="text-red-600 text-3xl font-bold tracking-wide py-4 px-8  border-red-600">Fischer Telesec</h1>

</div>

        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex justify-end"
        >
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/aboutus">AboutUs</Link>
          </li>
          <li className="p-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/clients">Our Clients</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link href="/getaquote">
              <a className="bg-orange-500 text-white px-4 py-2 rounded">
                Get a Quote
              </a>
            </Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={50} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={50} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/clients">Our Clients</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/getaquote">
                <a className="bg-orange-500 text-white px-4 py-2 rounded">
                  Get a Quote
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
