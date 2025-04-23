import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHandshake, 
  FaUsers, 
  FaBuilding, 
  FaGlobe, 
  FaArrowRight, 
  FaGraduationCap, 
  FaHome, 
  FaHotel, 
  FaShieldAlt 
} from "react-icons/fa";
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
    description: "Leading Architectural company in East Africa",
    industry: "Architecture"
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
    description: "Leading Real Estate company in Kenya",
    industry: "Real Estate"
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
  { name: "Corporate", icon: <FaHandshake className="text-4xl text-primary-600 mb-4" /> },
  { name: "Education", icon: <FaGraduationCap className="text-4xl text-primary-600 mb-4" /> },
  { name: "Real Estate", icon: <FaHome className="text-4xl text-primary-600 mb-4" /> },
  { name: "Hospitality", icon: <FaHotel className="text-4xl text-primary-600 mb-4" /> },
  { name: "Security", icon: <FaShieldAlt className="text-4xl text-primary-600 mb-4" /> }
];

const ClientsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [logoPositions, setLogoPositions] = useState([]);
  const [centerLogo, setCenterLogo] = useState(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastUpdateTimeRef = useRef(0);
  const rotationProgressRef = useRef(0);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Create enhanced client logos with proper data
  const enhancedLogos = clientLogos.map((logo) => {
    // Find matching client data if available
    const clientData = [...featuredClients, ...partners].find(
      client => client.logo && client.logo.includes(logo.replace("/", ""))
    );
    
    return {
      image: logo,
      name: clientData?.name || "Partner",
      industry: clientData?.industry || "Technology"
    };
  });

  // Set up timed logo cycling - separate from the animation
  useEffect(() => {
    // Cycle to the next logo every 4 seconds
    const logoTimer = setInterval(() => {
      setCurrentLogoIndex(prev => (prev + 1) % enhancedLogos.length);
    }, 4000);
    
    return () => clearInterval(logoTimer);
  }, [enhancedLogos.length]);

  // Define left-facing C-shaped arc positions with more points for smoother path
  const arcPositions = [
    { x: -50, y: 180 },   // Bottom entry point
    { x: -75, y: 155 },   // Additional point
    { x: -100, y: 130 },  // Bottom arc 
    { x: -120, y: 95 },   // Additional point
    { x: -140, y: 60 },   // Lower middle
    { x: -155, y: 30 },   // Additional point
    { x: -160, y: 0 },    // Center position (furthest left)
    { x: -155, y: -30 },  // Additional point
    { x: -140, y: -60 },  // Upper middle
    { x: -120, y: -95 },  // Additional point
    { x: -100, y: -130 }, // Top arc
    { x: -75, y: -155 },  // Additional point
    { x: -50, y: -180 },  // Top exit point
  ];

  // Animate the rotation continuously - only handle position animations
  const animateRotation = (timestamp) => {
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = timestamp;
    }
    
    const deltaTime = timestamp - lastUpdateTimeRef.current;
    lastUpdateTimeRef.current = timestamp;
    
    // Progress at a constant rate - extremely slow for elegant, measured flow
    const rotationSpeed = 0.000015; // Extremely slow for a premium showcase experience
    rotationProgressRef.current += deltaTime * rotationSpeed;
    
    // Reset progress counter when it reaches 1
    if (rotationProgressRef.current >= 1) {
      rotationProgressRef.current = 0;
    }
    
    updateLogoPositions(rotationProgressRef.current);
    
    animationRef.current = requestAnimationFrame(animateRotation);
  };
  
  // Update logo positions based on current rotation progress
  const updateLogoPositions = (progress) => {
    const totalPositions = arcPositions.length;
    const positions = [];
    
    // For each position in the arc
    for (let posIndex = 0; posIndex < totalPositions; posIndex++) {
      // Calculate the blended position based on progress
      const currentPosIndex = posIndex;
      const nextPosIndex = (posIndex + 1) % totalPositions;
      
      // For smooth transitions between arc positions with better curve interpolation
      const startPos = arcPositions[currentPosIndex];
      const endPos = posIndex === totalPositions - 1 
        ? { x: arcPositions[0].x, y: arcPositions[0].y - 350 } // Special case for wrapping animation
        : arcPositions[nextPosIndex];
      
      // Use cubic bezier easing for extremely smooth motion around curves
      const t = progress;
      const easedT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // Custom easing for smoother flow
      const x = startPos.x + (endPos.x - startPos.x) * easedT;
      const y = startPos.y + (endPos.y - startPos.y) * easedT;
      
      // Calculate logo index to ensure all logos cycle through
      // Use the time-based currentLogoIndex instead of the animation-based activeLogoIndex
      const totalLogos = enhancedLogos.length;
      const logoIndex = (currentLogoIndex + posIndex) % totalLogos;
      
      const logo = enhancedLogos[logoIndex];
      
      // Calculate scale and opacity based on position - emphasize center logo more
      // Position 6 is the center (largest)
      const distanceFromCenter = Math.abs(6 - (posIndex + progress));
      const scale = 1 - (distanceFromCenter * 0.06); // Even smaller scaling factor for more gradual size changes
      const opacity = 0.3 + (1 - distanceFromCenter / 6) * 0.7; // More contrast between center and other logos
      
      positions.push({
        ...logo,
        x,
        y,
        scale,
        opacity,
        posIndex,
        progress,
        isCenter: posIndex === 6 && progress < 0.5 || posIndex === 5 && progress >= 0.5
      });
    }
    
    // Set center logo for reference
    const centerLogoPos = positions.find(logo => logo.isCenter);
    setCenterLogo(centerLogoPos);
    
    // Update positions state
    setLogoPositions(positions);
  };

  useEffect(() => {
    setMounted(true);
    
    // Ensure we start with a clean state
    lastUpdateTimeRef.current = 0;
    rotationProgressRef.current = 0;
    setActiveLogoIndex(0);
    
    // Start the animation loop
    animationRef.current = requestAnimationFrame(animateRotation);
    
    // Cleanup animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // No dependencies to ensure animation runs only once

  if (!mounted) {
    return null;
  }

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
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Industry Leaders</span> Across East Africa
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
            
            {/* Fluid Logo Arc Showcase */}
            <div ref={containerRef} className="relative h-[500px] w-full hidden lg:block">
              {/* Subtle arc path guide - left-facing C shape */}
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                <path
                  d="M-50,-180 C-120,-120 -180,-70 -160,0 C-180,70 -120,120 -50,180"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  className="animate-pulse"
                />
              </svg>

              {/* Dynamic glow effect that follows center logo */}
              {centerLogo && (
                <motion.div 
                  className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary-500/10 via-yellow-500/10 to-primary-500/10 blur-3xl"
                  animate={{
                    x: centerLogo.x,
                    y: centerLogo.y,
                    opacity: [0.1, 0.25, 0.1],
                    scale: [0.9, 1.05, 0.9]
                  }}
                  transition={{
                    opacity: {
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    },
                    scale: {
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut"
                    },
                    x: {
                      type: "spring",
                      damping: 20,
                    },
                    y: {
                      type: "spring",
                      damping: 20,
                    }
                  }}
                />
              )}
              
              {/* Logo showcase - fluid animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {logoPositions.map((logo, index) => (
                  <motion.div
                    key={`logo-${currentLogoIndex}-${logo.posIndex}-${logo.name}`}
                    initial={false}
                    animate={{ 
                      x: logo.x, 
                      y: logo.y, 
                      opacity: logo.opacity, 
                      scale: logo.isCenter ? 1.25 : logo.scale,
                      zIndex: logo.isCenter ? 10 : (10 - Math.abs(6 - logo.posIndex)),
                    }}
                    transition={{ 
                      type: "tween", 
                      duration: 1.5,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className="absolute"
                  >
                    {/* Logo container with glass effect for center logo */}
                    <motion.div 
                      className={`
                        relative flex items-center justify-center rounded-full 
                        ${logo.isCenter 
                          ? 'w-36 h-36 bg-white shadow-2xl border-3 border-yellow-400' 
                          : `w-${16 + (4 * (3 - Math.abs(logo.posIndex - 3)))} h-${16 + (4 * (3 - Math.abs(logo.posIndex - 3)))} bg-white/90 border border-white/50 backdrop-blur-sm`
                        }
                        transition-all duration-700
                      `}
                      whileHover={{ scale: 1.05 }}
                      animate={logo.isCenter ? {
                        boxShadow: ['0 0 15px rgba(255,255,255,0.4)', '0 0 30px rgba(255,255,255,0.6)', '0 0 15px rgba(255,255,255,0.4)']
                      } : {}}
                      transition={{
                        boxShadow: { repeat: Infinity, duration: 3 }
                      }}
                    >
                      <Image
                        src={logo.image || "/Fischerlogo.png"}
                        alt={logo.name}
                        width={logo.isCenter ? 90 : 45 + (5 * (3 - Math.abs(logo.posIndex - 3)))}
                        height={logo.isCenter ? 90 : 45 + (5 * (3 - Math.abs(logo.posIndex - 3)))}
                        className="object-contain p-3 max-w-[85%] max-h-[85%]"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/Fischerlogo.png"; // Fallback image
                        }}
                      />
                      
                      {/* Animated pulse behind center logo */}
                      {logo.isCenter && (
                        <motion.div 
                          className="absolute inset-0 rounded-full -z-10"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="absolute inset-1 bg-gradient-to-br from-white via-yellow-50 to-white rounded-full"></div>
                        </motion.div>
                      )}

                      {/* Subtle particle effects for center logo - reduced quantity */}
                      {logo.isCenter && (
                        <div className="absolute -inset-10 -z-10">
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-yellow-400/50 rounded-full"
                              initial={{
                                x: 0,
                                y: 0,
                                opacity: 0,
                              }}
                              animate={{
                                x: [0, (Math.random() - 0.5) * 60],
                                y: [0, (Math.random() - 0.5) * 60],
                                opacity: [0, 0.5, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: "easeInOut" // Smoother easing
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Enhanced name and info display for center logo - positioned to the left */}
                    {logo.isCenter && (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 right-full -translate-y-1/2 mr-4 flex flex-col items-end gap-2"
                      >
                        <span className="font-medium text-white bg-primary-600/80 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm shadow-lg whitespace-nowrap">
                          {logo.name}
                        </span>
                        
                        {logo.industry && (
                          <span className="text-xs bg-yellow-500/80 text-white/90 px-3 py-0.5 rounded-full shadow-sm">
                            {logo.industry}
                          </span>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Animated scrolling indicator */}
              <motion.div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="h-px w-8 bg-white/20"
                  animate={{
                    width: [32, 48, 32],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-white/60 text-xs font-light">Continuous Flow</span>
                <motion.div 
                  className="h-px w-8 bg-white/20"
                  animate={{
                    width: [32, 48, 32],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-sm font-medium text-primary-700 mb-4">Industry Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative inline-block">
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
              Our expertise spans across multiple sectors, providing specialized telecommunications and IT solutions tailored to your industry's unique needs.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white p-6 rounded-xl shadow-md text-center relative group overflow-hidden border border-gray-100 transition-all duration-300"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
                
                {/* Digital corner accents */}
                <svg className="absolute top-0 right-0 w-16 h-16 text-primary-500/5" viewBox="0 0 16 16" fill="none">
                  <path d="M16,0 L16,16 L0,16 L16,0 Z" fill="currentColor" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-16 h-16 text-primary-500/5" viewBox="0 0 16 16" fill="none">
                  <path d="M0,16 L0,0 L16,0 L0,16 Z" fill="currentColor" />
                </svg>
                
                {/* Icon container with glow effect */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-200/40 transition-all duration-300">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                      className="text-primary-600 relative group-hover:text-primary-700 transition-colors duration-300"
                  >
                    {sector.icon}
                  </motion.div>
                  </div>
                  <motion.div 
                    className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-30 bg-primary-500/20 blur-lg transition-opacity duration-300"
                    style={{ top: '25%', left: '25%' }}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 relative z-10 group-hover:text-primary-700 transition-colors duration-300 mb-1">
                  {sector.name}
                </h3>
                
                <div className="w-8 h-0.5 bg-primary-300/50 mx-auto mt-2 mb-3 group-hover:bg-primary-500 transition-colors duration-300"></div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs text-primary-600 font-medium">Learn More</span>
                </div>
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