import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaBuilding, FaGlobe, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ClientsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Featured clients with more details
  const featuredClients = [
    {
      name: "Safaricom PLC",
      logo: "/safaricomlogo.png",
      description: "Collaborated on network infrastructure projects and telecommunications solutions.",
      industry: "Telecommunications"
    },
    {
      name: "Kenya Power",
      logo: "/kenya-power.png",
      description: "Provided IT infrastructure and network security solutions for critical systems.",
      industry: "Energy"
    },
    {
      name: "Faiba",
      logo: "/faibafixed.png",
      description: "Partnered on fiber optic network expansion and maintenance projects.",
      industry: "Internet Service Provider"
    },
  ];

  // Client logos for the showcase section
  const clientLogos = [
    "/images1.png",
    "/images2.png",
    "/images3.webp",
    "/images4.jpeg",
    "/keen.jpeg",
    "/Securex.png",
    "/chai.jpeg",
    "/fibrant.jpeg",
    "/green.jpg",
  ];

  // Testimonials from clients
  const testimonials = [
    {
      quote: "Fischer Telesec has been instrumental in upgrading our network infrastructure. Their expertise and professionalism are unmatched in the industry.",
      author: "John Kamau",
      position: "IT Director",
      company: "Global Enterprises Ltd"
    },
    {
      quote: "We've worked with Fischer Telesec for over 5 years, and they consistently deliver high-quality telecommunications solutions that meet our complex needs.",
      author: "Sarah Njeri",
      position: "CTO",
      company: "TechVision Kenya"
    },
    {
      quote: "Their team's technical knowledge and commitment to excellence have made them our go-to partner for all our IT and network security requirements.",
      author: "Michael Omondi",
      position: "Operations Manager",
      company: "Secure Systems International"
    }
  ];

  // Industry sectors served
  const sectors = [
    { name: "Telecommunications", icon: <FaGlobe className="text-4xl text-primary-600 mb-4" /> },
    { name: "Financial Services", icon: <FaBuilding className="text-4xl text-primary-600 mb-4" /> },
    { name: "Government", icon: <FaUsers className="text-4xl text-primary-600 mb-4" /> },
    { name: "Corporate", icon: <FaHandshake className="text-4xl text-primary-600 mb-4" /> }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Digital background elements */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Digital accent orbs */}
      <motion.div 
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [20, -10, 20], 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [-10, 20, -10], 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="bg-gradient-to-b from-white to-gray-50 relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Digital background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 z-0"></div>
          
          {/* Digital circuit pattern */}
          <div className="absolute inset-0 z-10 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40,0 L0,0 0,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <circle cx="30" cy="30" r="1" fill="currentColor" />
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          
          {/* Animated tech nodes */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary-300"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
          {/* Central digital glow effect */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary-400/20 blur-xl z-10 pointer-events-none"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="container mx-auto max-w-6xl relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  Trusted by Leading <span className="text-primary-300">Organizations</span>
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-primary-400 rounded-full"></div>
                <motion.div 
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-lg z-0"
                  animate={{ 
                    background: [
                      'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                      'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                      'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-primary-100 max-w-3xl mx-auto relative z-10"
              >
                Fischer Telesec has built strong relationships with clients across various industries, 
                delivering exceptional telecommunications and IT solutions that drive business success.
              </motion.p>
              
              {/* Animated accent lines */}
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-px bg-primary-400/50"
                  animate={{ width: [20, 60, 20] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary-300 mx-2"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="w-20 h-px bg-primary-400/50"
                  animate={{ width: [20, 60, 20] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Digital wave accent */}
          <svg className="absolute left-0 right-0 bottom-0 h-8 w-full" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <motion.path 
              d="M0,0 L1440,0 L1440,48 L0,48 L0,0 Z" 
              fill="url(#gradient)" 
              initial={{ d: "M0,30 L360,25 L720,40 L1080,25 L1440,30 L1440,48 L0,48 L0,30 Z" }}
              animate={{ 
                d: ["M0,30 L360,25 L720,40 L1080,25 L1440,30 L1440,48 L0,48 L0,30 Z", 
                    "M0,25 L360,40 L720,30 L1080,35 L1440,25 L1440,48 L0,48 L0,25 Z", 
                    "M0,30 L360,25 L720,40 L1080,25 L1440,30 L1440,48 L0,48 L0,30 Z"] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#081427" />
                <stop offset="50%" stopColor="#0f2b4a" />
                <stop offset="100%" stopColor="#081427" />
              </linearGradient>
            </defs>
          </svg>
        </section>

        {/* Featured Clients */}
        <section className="py-20 px-4 relative z-20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600"
            >
              Our Featured Partners
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {featuredClients.map((client, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white backdrop-blur-md bg-opacity-80 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative"
                  whileHover={{ y: -5 }}
                >
                  {/* Digital corner accents */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-primary-500/5 z-10" viewBox="0 0 16 16" fill="none">
                    <path d="M0,0 L16,0 L16,16 L0,0 Z" fill="currentColor" />
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-16 h-16 text-primary-500/5 z-10" viewBox="0 0 16 16" fill="none">
                    <path d="M0,16 L0,0 L16,16 L0,16 Z" fill="currentColor" />
                  </svg>
                  
                  {/* Card accent lighting */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-8 flex flex-col items-center relative z-10">
                    <div className="h-24 flex items-center justify-center mb-6 relative">
                      {/* Logo glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-primary-500/20 blur-md transition-opacity duration-300"
                      />
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={200}
                        height={80}
                        objectFit="contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{client.name}</h3>
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 mb-4">{client.industry}</p>
                    <p className="text-gray-600 text-center">{client.description}</p>
                    
                    {/* Digital scan effect on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400/30 opacity-0 group-hover:opacity-100 pointer-events-none"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="h-full bg-primary-500/80"
                        initial={{ width: 0 }}
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Our Valued Clients
            </motion.h2>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
            >
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32 w-full"
                >
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={60}
                    objectFit="contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Digital background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 z-0"></div>
          
          {/* Tech grid pattern */}
          <div className="absolute inset-0 z-10 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="tech-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40,0 L0,0 0,40" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="white" />
                <circle cx="30" cy="30" r="1" fill="white" />
                <path d="M0,20 L40,20 M20,0 L20,40" fill="none" stroke="white" strokeWidth="0.2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#tech-grid)" />
            </svg>
          </div>
          
          {/* Animated accent orbs */}
          <motion.div 
            className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl z-10 pointer-events-none"
            animate={{ 
              x: [20, -10, 20], 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-primary-300/10 blur-3xl z-10 pointer-events-none"
            animate={{ 
              x: [-10, 20, -10], 
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200 inline-block mb-4">
                What Our Clients Say
              </h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-accent-500 to-primary-400 mx-auto rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 96, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-xl relative border border-white/10 group"
                >
                  {/* Digital corner accents */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-white/5" viewBox="0 0 16 16" fill="none">
                    <path d="M16,0 L16,16 L0,16 L16,0 Z" fill="currentColor" />
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-16 h-16 text-white/5" viewBox="0 0 16 16" fill="none">
                    <path d="M0,16 L0,0 L16,0 L0,16 Z" fill="currentColor" />
                  </svg>
                  
                  {/* Glowing quote mark */}
                  <motion.div 
                    className="absolute -top-4 left-8 text-5xl text-primary-400 opacity-75"
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                      textShadow: [
                        "0 0 5px rgba(96, 165, 250, 0.3)",
                        "0 0 15px rgba(96, 165, 250, 0.5)",
                        "0 0 5px rgba(96, 165, 250, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    &ldquo;
                  </motion.div>
                  
                  <p className="mb-6 relative z-10 pt-4 text-white/90">{testimonial.quote}</p>
                  
                  <div className="flex flex-col relative">
                    {/* Digital scan effect */}
                    <motion.div 
                      className="absolute -top-2 left-0 right-0 h-0.5 bg-white/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                    />
                    
                    <span className="font-semibold text-white mt-2">{testimonial.author}</span>
                    <span className="text-primary-300 text-sm">{testimonial.position}, {testimonial.company}</span>
                  </div>
                  
                  {/* Digital scan effect on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 pointer-events-none"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="h-full bg-accent-500/80"
                      initial={{ width: "0%" }}
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Digital wave accent */}
          <svg className="absolute left-0 right-0 bottom-0 h-8 w-full text-gray-50" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <motion.path 
              d="M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z" 
              fill="currentColor" 
              animate={{ 
                d: ["M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z", 
                    "M0,48 L1440,48 L1440,0 C1080,0 720,20 360,0 L0,20 L0,48 Z", 
                    "M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z"] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </section>

        {/* Industries Served */}
        <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
          {/* Digital accent patterns */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="industry-grid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <rect width="25" height="25" fill="none" />
                <path d="M25,0 L0,0 0,25" stroke="#000" strokeWidth="0.2" fill="none" />
                <circle cx="12.5" cy="12.5" r="1" fill="#000" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#industry-grid)" />
            </svg>
          </div>
          
          {/* Animated digital nodes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
          
          {/* Digital connectivity lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M10,50 Q30,30 50,50 T90,50" 
              stroke="url(#connectivity-gradient)" 
              strokeWidth="0.2" 
              fill="none" 
              strokeDasharray="1 2"
              animate={{ 
                d: ["M10,50 Q30,30 50,50 T90,50", "M10,60 Q30,40 50,60 T90,60", "M10,50 Q30,30 50,50 T90,50"] 
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="connectivity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
                Industries We Serve
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0, left: "50%" }}
                  whileInView={{ width: "100%", left: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                Our expertise spans across multiple sectors, providing specialized telecommunications and IT solutions.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white p-8 rounded-xl shadow-md text-center relative group overflow-hidden border border-gray-100"
                >
                  {/* Hover background effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  />
                  
                  {/* Digital corner accents */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-primary-500/5" viewBox="0 0 16 16" fill="none">
                    <path d="M16,0 L16,16 L0,16 L16,0 Z" fill="currentColor" />
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-16 h-16 text-primary-500/5" viewBox="0 0 16 16" fill="none">
                    <path d="M0,16 L0,0 L16,0 L0,16 Z" fill="currentColor" />
                  </svg>
                  
                  {/* Icon container with glow effect */}
                  <motion.div 
                    className="relative z-10 inline-flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-20 bg-primary-500 blur-md transition-opacity duration-300"
                    />
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-primary-600 relative"
                    >
                      {sector.icon}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 relative z-10 group-hover:text-primary-700 transition-colors duration-300">
                    {sector.name}
                  </h3>
                  
                  {/* Digital scan effect on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    <motion.div 
                      className="h-full bg-primary-500"
                      initial={{ width: "0%" }}
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Digital portal background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 z-0"></div>
          
          {/* Tech grid pattern */}
          <div className="absolute inset-0 z-10 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="cta-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20,0 L0,0 0,20" stroke="white" strokeWidth="0.2" fill="none" />
                <circle cx="10" cy="10" r="0.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          
          {/* Animated particle system */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
                y: [0, -10, 0],
                x: [0, Math.random() * 10 - 5, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
          
          {/* Digital portal rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <motion.div 
              className="w-[300px] h-[300px] rounded-full border border-white/10 opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/20 opacity-40"
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full border border-white/30 opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
          </div>
          
          {/* Central glowing orb */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 blur-xl z-10 pointer-events-none"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          {/* Data stream visualization */}
          <svg className="absolute inset-0 w-full h-full z-10 opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 Q25,45 50,50 T100,50" 
              stroke="url(#data-gradient)" 
              strokeWidth="0.5" 
              fill="none" 
              strokeDasharray="1 2"
              animate={{ 
                d: ["M0,50 Q25,45 50,50 T100,50", "M0,55 Q25,50 50,45 T100,45", "M0,50 Q25,45 50,50 T100,50"] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M0,60 Q30,65 50,60 T100,60" 
              stroke="url(#data-gradient)" 
              strokeWidth="0.5" 
              fill="none" 
              strokeDasharray="2 1"
              animate={{ 
                d: ["M0,60 Q30,65 50,60 T100,60", "M0,55 Q30,50 50,55 T100,55", "M0,60 Q30,65 50,60 T100,60"] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="container mx-auto max-w-4xl px-4 text-center relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white">
                  Ready to Work Together?
                </span>
              </h2>
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-accent-500 to-primary-400 mx-auto rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 128, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-10 text-primary-100"
            >
              Join our growing list of satisfied clients and experience the Fischer Telesec difference.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <Link href="/contact">
                <motion.a 
                  className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-primary-700 bg-white rounded-full shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button background glow */}
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Button text */}
                  <span className="relative flex items-center font-semibold text-lg">
                    Contact Us Today
                    <motion.span 
                      className="ml-2 text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                  
                  {/* Digital scan effect */}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30 opacity-0 group-hover:opacity-100"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-primary-500"
                      animate={{ scaleX: [0, 1, 0], x: ["0%", "0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.span>
                </motion.a>
              </Link>
            </motion.div>
          </div>
          
          {/* Digital rays */}
          <div className="absolute bottom-0 left-0 right-0 h-32 z-10 overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-10"
              style={{
                background: "conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0) 40%)",
                transform: "translateY(65%)",
              }}
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientsPage;
