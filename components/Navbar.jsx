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
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      aria-label="Main Navigation"
    >
      <div className="top-text bg-gray-800 text-white p-2 overflow-hidden">
        <p className="scrolling-text">
          <span>
            Mobile: +254724612514 | Email Us Today info@fischertelesec.co.ke{" "}
          </span>
        </p>
      </div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <a className="flex items-center" aria-label="Home">
            <div className="relative" style={{ height: '70px', width: '300px' }}>
              <Image
                src="/Fischerlogo.png"
                alt="Fischer Telesec Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex justify-end"
        >
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/aboutus">About Us</Link>
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
        <button onClick={handleNav} className="block sm:hidden z-10" aria-label="Toggle Navigation Menu">
          {nav ? (
            <AiOutlineClose size={50} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={50} style={{ color: `${textColor}` }} />
          )}
        </button>
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
    </nav>
  );
};

export default Navbar;
