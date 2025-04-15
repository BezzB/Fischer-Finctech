import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Handle section highlighting based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      // Set scrolled state for navbar background effects
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

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

  // Staggered animation for navbar items
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  // Check if the current path matches the navLink path
  const isActivePage = (path) => {
    if (path === "/" && router.pathname === "/") return true;
    if (path !== "/" && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg' : ''}`}
      aria-label="Main Navigation"
    >
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-1 px-4 relative overflow-hidden">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="navTopPattern" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M20,0 L0,0 0,10" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#navTopPattern)" />
          </svg>
        </div>
        
        <div className="container-wide flex-between relative z-10">
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              whileHover={{ scale: 1.05, x: 5 }}
              href="tel:+254724612514" 
              className="flex items-center text-sm hover:text-primary-200 transition-colors"
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-700/50 mr-2">
                <FaPhoneAlt className="text-primary-300" size={10} />
              </div>
              +254 724 612 514
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, x: 5 }}
              href="mailto:info@fischertelesec.co.ke" 
              className="flex items-center text-sm hover:text-primary-200 transition-colors"
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-700/50 mr-2">
                <FaEnvelope className="text-primary-300" size={10} />
              </div>
              info@fischertelesec.co.ke
            </motion.a>
          </div>
          <div className="flex items-center space-x-3 ml-auto">
            <motion.a 
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: { duration: 0.2 }
              }} 
              className="w-6 h-6 rounded-full flex items-center justify-center"
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-primary-200" />
            </motion.a>
            <motion.a 
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: { duration: 0.2 }
              }} 
              className="w-6 h-6 rounded-full flex items-center justify-center"
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
            >
              <FaTwitter className="text-primary-200" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-white/90 shadow-md py-3 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : ''}`}>
        <div className="container-wide flex-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="logo-container"
          >
            <Link href="/" className="block relative">
              {/* Logo accent glow effect */}
              <motion.div 
                className="absolute -inset-1 rounded-full opacity-0 bg-primary-500/20 blur-lg"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
              />
              
              <Image
                src="/Fischerlogo.png"
                alt="Fischer Fintech Logo"
                width={120}
                height={30}
                priority={true}
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = isActivePage(link.path);
              return (
                <motion.div
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden group ${
                      isActive
                        ? "text-primary-700 bg-primary-50 shadow-sm"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50"
                    }`}
                  >
                    {/* Active page marker with animations */}
                    {isActive && (
                      <motion.div 
                        className="absolute -left-1 top-1/2 w-1.5 h-1.5 rounded-full bg-primary-500"
                        initial={{ scale: 0, translateY: "-50%" }}
                        animate={{ scale: 1, translateY: "-50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Digital accent line */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                    
                    {/* Glow behind text for active pages */}
                    {isActive && (
                      <span className="absolute inset-0 bg-primary-200/10 blur-sm"></span>
                    )}
                    
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </motion.div>
              )
            })}
            
            <motion.div
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                href="/getaquote"
                className="relative overflow-hidden btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-primary-300/30 flex items-center gap-2 group ml-4 transition-all duration-300"
              >
                {/* Button accent lighting */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
                
                <span>Get a Quote</span>
                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleNav}
              className="p-2 rounded-md text-neutral-800 relative"
              aria-label="Toggle menu"
            >
              {/* Button glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary-500/20 opacity-0"
                animate={{ opacity: nav ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {nav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl overflow-hidden absolute w-full left-0 top-full z-50 border-t border-primary-100"
          >
            <div className="relative overflow-hidden">
              {/* Digital background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="mobileMenuPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20,0 L0,0 0,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#mobileMenuPattern)" />
                </svg>
              </div>
              
              {/* Accent lighting */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-500/10 blur-3xl"
                animate={{ 
                  x: [0, 20, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            
              <div className="container py-6 flex flex-col space-y-1 relative z-10">
                {navLinks.map((link, index) => {
                  const isActive = isActivePage(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setNav(false)}
                        className={`relative px-4 py-3 rounded-md flex items-center justify-between overflow-hidden ${
                          isActive ? "bg-primary-50 text-primary-700 shadow-sm" : "text-neutral-800 hover:bg-primary-50/60 transition-colors"
                        }`}
                      >
                        {/* Left Active page indicator */}
                        {isActive && (
                          <motion.span 
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        {/* Glow behind text for active pages */}
                        {isActive && (
                          <motion.span 
                            className="absolute inset-0 bg-primary-500/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        <div className="flex items-center">
                          {isActive && (
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          <span className={`font-medium ${isActive ? 'text-primary-700' : ''}`}>{link.name}</span>
                        </div>
                        
                        {/* Current page label */}
                        {isActive && (
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-primary-500 font-medium">Current</span>
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="/getaquote"
                    onClick={() => setNav(false)}
                    className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-primary-300/30 flex items-center justify-center gap-2 group w-full transition-all duration-300"
                  >
                    <span>Get a Quote</span>
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (navLinks.length + 1) * 0.05 }}
                  className="mt-6 pt-6 border-t border-neutral-200/50 space-y-4"
                >
                  <Link href="tel:+254724612514" className="flex items-center space-x-3 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors duration-300">
                      <FaPhoneAlt size={14} />
                    </div>
                    <span className="text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">+254 724 612 514</span>
                  </Link>
                  
                  <Link href="mailto:info@fischertelesec.co.ke" className="flex items-center space-x-3 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors duration-300">
                      <FaEnvelope size={14} />
                    </div>
                    <span className="text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">info@fischertelesec.co.ke</span>
                  </Link>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600"
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={16} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600"
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Twitter"
                    >
                      <FaTwitter size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
