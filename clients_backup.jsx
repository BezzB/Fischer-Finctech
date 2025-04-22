import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaBuilding, FaGlobe, FaArrowRight, FaStar } from "react-icons/fa";
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

/*
const testimonials = [
  {
    name: "John Smith",
    position: "CEO, China Mobile International",
    quote: "Fischer Fintech has been instrumental in helping us streamline our financial operations. Their expertise and dedication are unmatched.",
    rating: 5,
    avatar: "/user.svg"
  },
  {
    name: "Sarah Johnson",
    position: "CTO, Data5 IT GmbH",
    quote: "Working with Fischer Fintech has transformed our financial technology infrastructure. Their solutions are innovative and reliable.",
    rating: 5,
    avatar: "/user.svg"
  },
  {
    name: "Michael Brown",
    position: "Director, Fibrant EOOD",
    quote: "The team at Fischer Fintech delivered exceptional results. Their attention to detail and customer service is outstanding.",
    rating: 5,
    avatar: "/user.svg"
  }
];
*/

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
  },
  {
    name: "Mitchell Cotts Logistics",
    logo: "/mitchell-cotts-logo.png",
    description: "Comprehensive logistics solutions",
    industry: "Logistics"
  },
  {
    name: "Securex Agencies Limited",
    logo: "/securex-logo.png",
    description: "Security and risk management services",
    industry: "Security"
  },
  {
    name: "Double Portion Agencies Limited",
    logo: "/double-portion-logo.png",
    description: "Business development and consulting",
    industry: "Consulting"
  },
  {
    name: "The Nyali School",
    logo: "/nyali-school-logo.png",
    description: "Premier educational institution",
    industry: "Education"
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
    name: "Cambium Networks",
    logo: "/cambium-logo.png",
    description: "Wireless networking solutions provider",
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
  },
  {
    name: "iColo (Digital Reality Company)",
    logo: "/icolo-logo.png",
    description: "Data center and cloud solutions provider",
    industry: "Technology"
  },
  {
    name: "Wingu Datacenters",
    logo: "/wingu-logo.png",
    description: "Data center and cloud infrastructure provider",
    industry: "Technology"
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
    "/green.jpg",
  ];

  const sectors = [
    { name: "Telecommunications", icon: <FaGlobe className="text-4xl text-primary-600 mb-4" /> },
  { name: "Information Technology", icon: <FaUsers className="text-4xl text-primary-600 mb-4" /> },
  { name: "Manufacturing", icon: <FaBuilding className="text-4xl text-primary-600 mb-4" /> },
    { name: "Corporate", icon: <FaHandshake className="text-4xl text-primary-600 mb-4" /> }
  ];

const ClientsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setMounted(true);
    const newPositions = Array.from({ length: 8 }).map(() => ({
      transform: `translate(${Math.random() * 80}%, ${Math.random() * 60}%)`
    }));
    setPositions(newPositions);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            {mounted && positions.length > 0 && (
          <div className="absolute inset-0 z-10 overflow-hidden">
                {positions.map((pos, i) => (
                  <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary-300"
                    style={pos}
              />
            ))}
          </div>
            )}
          
          {/* Central digital glow effect */}
            {mounted && (
              <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary-400/20 blur-xl z-10 pointer-events-none"
          />
            )}
          
          <div className="container mx-auto max-w-6xl relative z-20">
              {mounted ? (
                <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  Trusted by Leading <span className="text-primary-300">Organizations</span>
                </h1>
                  <p className="text-xl text-primary-100 max-w-3xl mx-auto relative z-10 mt-6">
                Fischer Telesec has built strong relationships with clients across various industries, 
                delivering exceptional telecommunications and IT solutions that drive business success.
                  </p>
                </MotionDiv>
              ) : null}
            </div>
          </section>

          {/* Featured Clients Section */}
          <section className="py-20 px-4 relative z-20">
            <div className="container mx-auto max-w-6xl">
              {mounted ? (
                <MotionH2 
                initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600"
                >
                  Our Featured Clients
                </MotionH2>
              ) : (
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600">
                  Our Featured Clients
                </h2>
              )}
              
              {mounted ? (
                <MotionDiv
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                  {featuredClients.map((client, index) => (
                    <MotionDiv
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
                        <div className="h-24 flex items-center justify-center mb-6 relative w-full max-w-[200px]">
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-primary-500/20 blur-md transition-opacity duration-300"
                          />
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={140}
                            height={70}
                            className="object-contain"
                            priority={index < 2}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2 text-center">{client.name}</h3>
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
                    </MotionDiv>
                  ))}
                </MotionDiv>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  {featuredClients.map((client, index) => (
                    <div
                      key={index}
                      className="bg-white backdrop-blur-md bg-opacity-80 rounded-xl shadow-lg overflow-hidden group relative"
                    >
                      <div className="p-8 flex flex-col items-center relative z-10">
                        <div className="h-24 flex items-center justify-center mb-6 relative w-full max-w-[200px]">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={140}
                            height={70}
                            className="object-contain"
                            priority={index < 2}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2 text-center">{client.name}</h3>
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 mb-4">{client.industry}</p>
                        <p className="text-gray-600 text-center">{client.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Client Testimonials */}
          {/*
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto max-w-6xl px-4">
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="text-center mb-16"
              >
                <MotionH2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                  What Our Clients Say
                </MotionH2>
                <MotionP
                  variants={itemVariants}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  Hear from our satisfied clients about their experience working with us
                </MotionP>
              </MotionDiv>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {testimonial.quote}
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
        </section>
        */}

          {/* Our Partners Section */}
          <section className="py-20 px-4 relative z-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
              {mounted ? (
                <MotionH2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600"
            >
                  Our Partners
                </MotionH2>
              ) : (
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600">
                  Our Partners
                </h2>
              )}
              
              {mounted ? (
                <MotionDiv
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
                  {partners.map((partner, index) => (
                    <MotionDiv
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
                    <div className="h-24 flex items-center justify-center mb-6 relative w-full max-w-[200px]">
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-primary-500/20 blur-md transition-opacity duration-300"
                      />
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={140}
                        height={70}
                        className="object-contain"
                        priority={index < 2}
                      />
                    </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2 text-center">{partner.name}</h3>
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 mb-4">{partner.industry}</p>
                        <p className="text-gray-600 text-center">{partner.description}</p>
                    
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
                    </MotionDiv>
                  ))}
                </MotionDiv>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-white backdrop-blur-md bg-opacity-80 rounded-xl shadow-lg overflow-hidden group relative"
                    >
                      <div className="p-8 flex flex-col items-center relative z-10">
                        <div className="h-24 flex items-center justify-center mb-6 relative w-full max-w-[200px]">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={140}
                            height={70}
                            className="object-contain"
                            priority={index < 2}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2 text-center">{partner.name}</h3>
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 mb-4">{partner.industry}</p>
                        <p className="text-gray-600 text-center">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              {/*
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
                    <motion.div 
                      className="absolute -top-2 left-0 right-0 h-0.5 bg-white/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                    />
                    
                      <span className="font-semibold text-white mt-2">{testimonial.name}</span>
                      <span className="text-primary-300 text-sm">{testimonial.position}</span>
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
              */}
            </motion.div>
          </div>
          
          {/* Digital wave accent */}
          <svg className="absolute left-0 right-0 bottom-0 h-8 w-full text-gray-50" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <motion.path 
              initial={{ d: "M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z" }}
              animate={{ 
                d: [
                  "M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z",
                  "M0,48 L1440,48 L1440,0 C1080,0 720,20 360,0 L0,20 L0,48 Z",
                  "M0,48 L1440,48 L1440,0 C1080,20 720,0 360,20 L0,0 L0,48 Z"
                ] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              fill="currentColor"
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
              initial={{ d: "M10,50 Q30,30 50,50 T90,50" }}
              animate={{ 
                d: [
                  "M10,50 Q30,30 50,50 T90,50",
                  "M10,60 Q30,40 50,60 T90,60",
                  "M10,50 Q30,30 50,50 T90,50"
                ] 
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              stroke="url(#connectivity-gradient)"
              strokeWidth="0.2"
              fill="none"
              strokeDasharray="1 2"
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
              initial={{ d: "M0,50 Q25,45 50,50 T100,50" }}
              animate={{ 
                d: [
                  "M0,50 Q25,45 50,50 T100,50",
                  "M0,55 Q25,50 50,45 T100,45",
                  "M0,50 Q25,45 50,50 T100,50"
                ] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              stroke="url(#data-gradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="1 2"
            />
            <motion.path 
              initial={{ d: "M0,60 Q30,65 50,60 T100,60" }}
              animate={{ 
                d: [
                  "M0,60 Q30,65 50,60 T100,60",
                  "M0,55 Q30,50 50,55 T100,55",
                  "M0,60 Q30,65 50,60 T100,60"
                ] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              stroke="url(#data-gradient)"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="2 1"
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
                <Link href="/contact" passHref>
                  <div className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-primary-700 bg-white rounded-full shadow-md cursor-pointer">
                  <span className="relative flex items-center font-semibold text-lg">
                    Contact Us Today
                      <span className="ml-2 text-lg">
                      <FaArrowRight />
                  </span>
                    </span>
                  </div>
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
    </Suspense>
  );
};

export default ClientsPage;
