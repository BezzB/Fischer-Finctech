import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandshake, FaUsers, FaBuilding, FaGlobe, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import dynamic from 'next/dynamic';

// Create dynamic motion components with SSR disabled
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const featuredClients = [
  {
    name: "China Mobile International",
    logo: "/china-mobile-logo.png",
    description: "Leading telecommunications provider in China",
    industry: "Telecommunications"
  },
  {
    name: "Data5 IT GmbH (Germany)",
    logo: "/data5-logo.png",
    description: "German IT solutions provider",
    industry: "Information Technology"
  },
  {
    name: "Fibrant EOOD",
    logo: "/fibrant-logo.png",
    description: "Bulgarian fiber optics manufacturer",
    industry: "Manufacturing"
  },
  {
    name: "Innovis Telecoms",
    logo: "/innovis-logo.png",
    description: "Innovative telecom solutions provider",
    industry: "Telecommunications"
  },
  {
    name: "Symbion Consulting Group",
    logo: "/symbion-logo.png",
    description: "Business and technology consulting firm",
    industry: "Consulting"
  },
  {
    name: "Green Telecoms Tanzania Limited",
    logo: "/green-telecoms-logo.png",
    description: "Sustainable telecom solutions in Tanzania",
    industry: "Telecommunications"
  },
  {
    name: "Solian",
    logo: "/solian-logo.png",
    description: "Digital transformation specialists",
    industry: "Technology"
  },
  {
    name: "Chai Trading Company Limited (KTDA)",
    logo: "/chai-trading-logo.png",
    description: "Leading tea trading company",
    industry: "Agriculture"
  }
];

const partners = [
  {
    name: "Safaricom",
    logo: "/safaricomlogo.png",
    description: "Leading telecommunications provider in Kenya",
    industry: "Telecommunications"
  },
  {
    name: "Huawei",
    logo: "/huawei-logo.png",
    description: "Global ICT solutions provider",
    industry: "Technology"
  },
  {
    name: "ICT Authority",
    logo: "/ictlogo.png",
    description: "Government ICT regulatory body",
    industry: "Government"
  },
  {
    name: "Hewlett Packard",
    logo: "/hp-logo.png",
    description: "Global technology company",
    industry: "Technology"
  },
  {
    name: "Cisco",
    logo: "/cisco-logo.png",
    description: "Networking and communications technology",
    industry: "Technology"
  },
  {
    name: "Airtel",
    logo: "/airtel-logo.png",
    description: "Global telecommunications company",
    industry: "Telecommunications"
  }
];

const clientLogos = [
  "/images1.png",
  "/images2.png",
  "/images3.webp",
  "/images4.jpeg",
  "/keen.jpeg",
  "/Securex.png",
  "/chai.jpeg",
  "/fibrant.jpeg",
  "/Fischerlogo.png",
];

const sectors = [
  { name: "Telecommunications", icon: <FaGlobe className="text-4xl text-primary-600 mb-4" /> },
  { name: "Information Technology", icon: <FaUsers className="text-4xl text-primary-600 mb-4" /> },
  { name: "Manufacturing", icon: <FaBuilding className="text-4xl text-primary-600 mb-4" /> },
  { name: "Corporate", icon: <FaHandshake className="text-4xl text-primary-600 mb-4" /> }
];

const ClientsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [arcPosition, setArcPosition] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Automatic animation along the arc
    const timer = setInterval(() => {
      setArcPosition(prev => (prev + 1) % clientLogos.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }
  
  // Function to rotate array to simulate movement along the arc
  const getRotatedLogos = () => {
    if (!clientLogos.length) return [];
    
    // Create a copy of the array
    const rotated = [...clientLogos];
    
    // Rotate the array by arcPosition
    for (let i = 0; i < arcPosition; i++) {
      const item = rotated.shift();
      rotated.push(item);
    }
    
    return rotated;
  };
  
  const rotatedLogos = getRotatedLogos();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>
        
        <div className="container-wide relative z-10 py-24 px-4 md:px-0 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary-800 to-primary-700 text-sm font-medium text-primary-200 mb-5 border border-primary-700/50">Fischer Telesec</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Industry Leaders</span> Across East Africa
              </h1>
              <p className="text-xl text-primary-200 mb-8 max-w-lg">
                Delivering innovative telecommunications and IT solutions to businesses of all sizes across multiple industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-full shadow-md inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300">
                  Get in Touch
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link href="/work" className="btn border-2 border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full inline-flex items-center gap-2 font-medium transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
            
            </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-50 text-sm font-medium text-primary-700 mb-4">Trusted Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Global Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve businesses across the globe, from startups to multinational corporations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative p-6 bg-gray-50 flex items-center justify-center h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-4 relative z-10">
                    <Image
                      src={client.logo || "/Fischerlogo.png"}
                      alt={client.name}
                      width={140}
                      height={70}
                      className="object-contain max-h-28"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/Fischerlogo.png"; // Fallback image
                      }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{client.description}</p>
                  <div className="flex items-center text-xs text-primary-600">
                    <span className="px-2 py-1 bg-primary-50 rounded-full">{client.industry}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-sm font-medium text-primary-700 mb-4">Strategic Alliances</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading technology providers to deliver the best solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center gap-4 relative overflow-hidden group"
              >
                <div className="relative w-full h-24 flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-20 relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Fischerlogo.png"; // Fallback image
                    }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
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
        
        <div className="container-tight relative z-20 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white"
            >
              Join Our Growing List of Satisfied Clients
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-10"
            >
              Experience the Fischer Telesec difference with tailored telecommunications and IT solutions designed for your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-white/20 transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 font-semibold">
                Contact Us Today
                <FaArrowRight className="text-sm" />
              </Link>
              
              <Link href="/getaquote" className="btn border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-300 font-semibold">
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage; 