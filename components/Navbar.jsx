import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Handle section highlighting based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fixed navbar height for content padding
  const navbarHeight = "100px"; // Adjusted to eliminate white space

  useEffect(() => {
    // Apply padding to the body to prevent content from being hidden behind the navbar
    document.body.style.paddingTop = navbarHeight;
    
    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [navbarHeight]);

  const navLinks = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/aboutus", section: "about" },
    { name: "Services", path: "/services", section: "services" },
    { name: "Work", path: "/work", section: "work" },
    { name: "Clients", path: "/clients", section: "clients" },
    { name: "Contact", path: "/contact", section: "contact" },
  ];

  return (
    <nav
      className="fixed left-0 top-0 w-full z-50"
      aria-label="Main Navigation"
    >
      {/* Top bar with contact info */}
      <div className="bg-primary-900 text-white py-1 px-4">
        <div className="container-wide flex-between">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254724612514" className="flex items-center text-sm hover:text-primary-200 transition-colors">
              <FaPhoneAlt className="mr-2" size={14} />
              +254 724 612 514
            </a>
            <a href="mailto:info@fischertelesec.co.ke" className="flex items-center text-sm hover:text-primary-200 transition-colors">
              <FaEnvelope className="mr-2" size={14} />
              info@fischertelesec.co.ke
            </a>
          </div>
          <div className="flex items-center space-x-3 ml-auto">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-primary-200 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-primary-200 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-md py-1.5">
        <div className="container-wide flex-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="logo-container"
          >
            <Link href="/" className="block">
              <Image 
                src="/Fischerlogo.png" 
                alt="Fischer Telesec Logo" 
                width={120} 
                height={30} 
                className="object-contain" 
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.section
                    ? "text-primary-700 bg-primary-50"
                    : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/getaquote"
              className="btn btn-accent ml-4"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <button
              onClick={handleNav}
              className="p-2 rounded-md text-neutral-800"
              aria-label="Toggle menu"
            >
              {nav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden absolute w-full left-0 top-full z-50"
          >
            <div className="container py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setNav(false)}
                  className={`px-4 py-3 rounded-md text-neutral-800 hover:bg-primary-50 hover:text-primary-700 transition-colors ${
                    activeSection === link.section ? "bg-primary-50 text-primary-700" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/getaquote"
                onClick={() => setNav(false)}
                className="btn btn-accent mt-4 text-center"
              >
                Get a Quote
              </Link>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center space-x-4 mb-4">
                  <FaPhoneAlt size={16} className="text-primary-600" />
                  <a href="tel:+254724612514" className="text-neutral-800">+254 724 612 514</a>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope size={16} className="text-primary-600" />
                  <a href="mailto:info@fischertelesec.co.ke" className="text-neutral-800 text-sm">info@fischertelesec.co.ke</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
