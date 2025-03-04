import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="navbar-brand">
            <Image src="/Fischerlogo.png" alt="Fischer Logo" width={180} height={40} />
          </Link>
        </motion.div>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden md:flex justify-end items-center space-x-6"
        >
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="nav-link hover:text-orange-500 transition-colors duration-300">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/aboutus" className="nav-link hover:text-orange-500 transition-colors duration-300">About Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/services" className="nav-link hover:text-orange-500 transition-colors duration-300">Services</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/work" className="nav-link hover:text-orange-500 transition-colors duration-300">Projects</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/clients" className="nav-link hover:text-orange-500 transition-colors duration-300">Our Clients</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/contact" className="nav-link hover:text-orange-500 transition-colors duration-300">Contact Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/getaquote" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">Get a Quote</Link>
          </motion.li>
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
        <AnimatePresence mode="wait">
          {nav && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="sm:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black bg-opacity-95 text-center z-50"
            >
              <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/" className="mobile-nav-link">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/services" className="mobile-nav-link">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work" className="mobile-nav-link">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/clients" className="mobile-nav-link">Our Clients</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact" className="mobile-nav-link">Contact Us</Link>
            </li>
            <li>
              <Link href="/getaquote" className="bg-orange-500 text-white px-4 py-2 rounded">Get a Quote</Link>
            </li>
          </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
