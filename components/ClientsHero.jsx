import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ClientsHero = () => {
  const [logoPositions, setLogoPositions] = useState([]);
  const [centerLogo, setCenterLogo] = useState(null);
  const containerRef = useRef(null);
  
  // Sample client logos
  const clientLogos = [
    { name: "China Mobile", image: "/china-mobile-logo.png" },
    { name: "Safaricom", image: "/safaricomlogo.png" },
    { name: "Huawei", image: "/huawei-logo.png" },
    { name: "Hewlett Packard", image: "/hp-logo.png" },
    { name: "Cisco", image: "/cisco-logo.png" },
    { name: "ICT Authority", image: "/ictlogo.png" },
    { name: "Symbion", image: "/symbion-logo.png" },
    { name: "Solian", image: "/solian-logo.png" },
    { name: "Chai Trading", image: "/chai-trading-logo.png" }
  ];

  // Define the calculateLogoPositions function before using it in useEffect
  const calculateLogoPositions = () => {
    // Rotate the logos array to create animation
    const newClientLogos = [...clientLogos];
    const firstLogo = newClientLogos.shift();
    newClientLogos.push(firstLogo);
    
    // Set the center logo (middle of the array)
    const centerIndex = Math.floor(newClientLogos.length / 2);
    setCenterLogo(newClientLogos[centerIndex]);
    
    // Explicitly define positions for a left-facing arc
    // These positions form a left-facing "C" shape
    const arcPositions = [
      { x: -100, y: -160 },  // Top position
      { x: -140, y: -120 },  
      { x: -160, y: -60 },   
      { x: -170, y: 0 },     // Middle position (furthest left)
      { x: -160, y: 60 },    
      { x: -140, y: 120 },   
      { x: -100, y: 160 },   // Bottom position
      { x: -50, y: 180 },
      { x: 0, y: 190 }
    ];
    
    // If we have fewer logos than positions, use only the middle positions
    const adjustedPositions = arcPositions.slice(
      Math.max(0, Math.floor((arcPositions.length - newClientLogos.length) / 2)),
      Math.min(arcPositions.length, Math.floor((arcPositions.length - newClientLogos.length) / 2) + newClientLogos.length)
    );
    
    // If we have more logos than positions, duplicate the middle positions
    while (adjustedPositions.length < newClientLogos.length) {
      adjustedPositions.splice(Math.floor(adjustedPositions.length / 2), 0, arcPositions[Math.floor(arcPositions.length / 2)]);
    }
    
    // Map logos to positions
    const positions = newClientLogos.map((logo, index) => {
      // Scale factor (1.0 is original size, center logo is bigger)
      const distanceFromCenter = Math.abs(index - centerIndex);
      const scale = 1 - (distanceFromCenter * 0.15); // Scale down as it gets further from center
      
      return {
        ...logo,
        x: adjustedPositions[index].x,
        y: adjustedPositions[index].y,
        scale,
        opacity: 0.4 + (1 - distanceFromCenter / (newClientLogos.length / 2)) * 0.6 // Fade out logos farther from center
      };
    });
    
    setLogoPositions(positions);
  };

  // Calculate positions for the logos on the semi-circular arc
  useEffect(() => {
    // Initial calculation
    calculateLogoPositions();
    
    const interval = setInterval(() => {
      calculateLogoPositions();
    }, 3000); // Move the logos every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
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
          
          {/* Logo Arc Section */}
          <div ref={containerRef} className="relative h-[400px] w-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Semi-circular arc guide (optional, for visual debugging) */}
              {/* <div className="absolute w-[360px] h-[360px] border-l-2 border-t-2 border-b-2 border-primary-500/10 rounded-l-full"></div> */}
              
              {/* Company logos along the arc */}
              {logoPositions.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ x: logo.x, y: logo.y, scale: logo.scale, opacity: logo.opacity }}
                  animate={{ x: logo.x, y: logo.y, scale: logo.scale, opacity: logo.opacity }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute"
                  style={{ transform: `translate(${logo.x}px, ${logo.y}px)` }}
                >
                  <div 
                    className={`
                      flex items-center justify-center rounded-full bg-white shadow-lg
                      ${logo.name === centerLogo?.name ? 'w-24 h-24 border-2 border-primary-500' : 'w-16 h-16 border border-gray-100'}
                      transition-all duration-300
                    `}
                  >
                    <Image
                      src={logo.image || "/Fischerlogo.png"}
                      alt={logo.name}
                      width={logo.name === centerLogo?.name ? 80 : 50}
                      height={logo.name === centerLogo?.name ? 80 : 50}
                      className="object-contain p-2 max-w-[80%] max-h-[80%]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/Fischerlogo.png"; // Fallback image
                      }}
                    />
                  </div>
                  
                  {/* Only show name for center logo */}
                  {logo.name === centerLogo?.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap"
                    >
                      <span className="font-medium text-white bg-primary-700/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {logo.name}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsHero; 