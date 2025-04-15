import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FaAward, FaUsers, FaLightbulb, FaHandshake, FaRocket, FaNetworkWired, FaChartLine, FaBrain } from 'react-icons/fa';

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });

  const coreValues = [
    {
      icon: <FaRocket className="text-4xl mb-4" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive tangible business results.'
    },
    {
      icon: <FaUsers className="text-4xl mb-4" />,
      title: 'Customer Focus',
      description: 'Our clients are at the center of everything we do. We listen, understand, and tailor our solutions to meet their unique needs.'
    },
    {
      icon: <FaBrain className="text-4xl mb-4" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new technologies and approaches to solve complex business challenges.'
    },
    {
      icon: <FaNetworkWired className="text-4xl mb-4" />,
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards, building trust through transparency and accountability.'
    }
  ];

  const teamMembers = [
    {
      name: 'John Kamau',
      position: 'CEO & Founder',
      image: '/user.svg',
      bio: 'With over 15 years of experience in telecommunications, John founded Fischer Telesec with a vision to transform how businesses leverage technology.'
    },
    {
      name: 'Sarah Njeri',
      position: 'Technical Director',
      image: '/user.svg',
      bio: 'Sarah leads our technical team with her extensive expertise in network infrastructure and IT systems integration.'
    },
    {
      name: 'David Omondi',
      position: 'Operations Manager',
      image: '/user.svg',
      bio: 'David ensures the smooth execution of all projects, maintaining our high standards of service delivery and client satisfaction.'
    },
    {
      name: 'Grace Wanjiku',
      position: 'Client Relations Manager',
      image: '/user.svg',
      bio: 'Grace works closely with our clients to understand their needs and ensure they receive personalized support throughout their journey with us.'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Floating Particles Background - spans the entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-black"></div>
        
        {/* Digital circuit overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="circuitPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20,0 L0,0 0,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuitPattern)" />
          </svg>
        </div>
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-500/20 animate-pulse-slow filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-500/20 animate-pulse-slow delay-1000 filter blur-3xl"></div>
        </div>
        
        {/* Digital lines */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeroInView ? 0.3 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHeroInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M0,50 C25,30 75,70 100,50"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.2"
              fill="none"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHeroInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.8 }}
              d="M0,30 C30,50 70,50 100,30"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.2"
              fill="none"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHeroInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 1.1 }}
              d="M0,70 C30,50 70,50 100,70"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.2"
              fill="none"
            />
          </svg>
        </motion.div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-block"
            >
              <div className="flex items-center justify-center relative">
                <div className="absolute -inset-6 rounded-full bg-primary-500/10 blur-xl animate-pulse-slow"></div>
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-0.5 rounded-full relative">
                  <div className="bg-primary-900 p-2 rounded-full">
                    <FaRocket className="text-4xl text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-accent-200"
            >
              Innovating the<br />Future of Technology
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-px w-40 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mb-8"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Your trusted partner in telecommunications and IT solutions since 2013, pioneering digital transformation across East Africa.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link href="/services" className="btn bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full shadow-lg hover:shadow-primary-500/25 flex items-center gap-2 group font-medium transition-all duration-500">
                <span>Explore Our Solutions</span>
                <div className="w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/contact" className="btn border-2 border-white text-white px-8 py-4 rounded-full group hover:bg-white/10 transition-all duration-300 font-medium">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-primary-100 text-sm mb-2">Scroll to Explore</span>
            <div className="w-1 h-16 rounded-full overflow-hidden bg-white/20">
              <motion.div 
                className="w-full bg-accent-500"
                animate={{ height: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section - Enhanced with parallax and morphing shapes */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-50/20"></div>
        
        {/* Morphing background shape */}
        <div className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,0 L100,0 L100,100 C75,90 25,110 0,100 Z"
              fill="url(#bgGradient)"
              animate={{
                d: [
                  "M0,0 L100,0 L100,100 C75,90 25,110 0,100 Z",
                  "M0,0 L100,0 L100,100 C75,110 25,90 0,100 Z",
                  "M0,0 L100,0 L100,100 C75,90 25,110 0,100 Z"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-24 h-24 border-t-4 border-l-4 border-accent-500/20 rounded-tl-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-4 border-r-4 border-accent-500/20 rounded-br-xl"></div>
                
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-br from-primary-500/30 via-transparent to-accent-500/20 rounded-2xl blur-2xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-1 border border-white/10 shadow-2xl relative overflow-hidden group">
                  {/* Digital circuit overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-800/80 opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                  
                  <div className="aspect-video relative overflow-hidden rounded-xl">
                    <Image
                      src="/Fischerlogo.png"
                      alt="Fischer Fintech Logo"
                      width={200}
                      height={80}
                      priority={true}
                      style={{ width: 'auto', height: 'auto' }}
                      className="object-contain"
                    />
                    
                    {/* Digital edge accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-500/50 rounded-tl-sm"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-500/50 rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-500/50 rounded-bl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-500/50 rounded-br-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center mb-4">
                <div className="h-px w-12 bg-accent-500/80"></div>
                <span className="mx-4 text-sm font-bold tracking-wider uppercase text-accent-500">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-primary-200">
                Pioneering Digital Transformation
              </h2>
              
              <div className="space-y-6 text-primary-100 text-lg">
                <p>
                  Founded in 2013, Fischer Telesec began as a visionary startup with a bold mission: to revolutionize telecommunications infrastructure across East Africa.
                </p>
                <p>
                  What started as a small team of innovators has evolved into a technological powerhouse, developing cutting-edge solutions that bridge the digital divide and empower businesses to thrive in an increasingly connected world.
                </p>
                <p>
                  Today, we stand at the forefront of digital innovation, combining deep industry expertise with emerging technologies to create solutions that don&apos;t just meet current needs but anticipate the challenges of tomorrow.
                </p>
                
                {/* Timeline indicator */}
                <div className="pt-8">
                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent-500/10 animate-pulse-slow"></div>
                      <div className="absolute w-6 h-6 rounded-full bg-accent-500/20"></div>
                      <div className="absolute w-3 h-3 rounded-full bg-accent-500"></div>
                    </div>
                    <div>
                      <div className="text-sm text-accent-400">Est. 2013</div>
                      <div className="text-2xl font-bold text-white">A Decade of Innovation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Transformed with futuristic 3D cards */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Digital grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="valueGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10,0 L0,0 0,10" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#valueGrid)" />
          </svg>
        </div>
        
        {/* Curved accent line */}
        <div className="absolute inset-x-0 top-0 h-40 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path 
              d="M0,0 Q600,120 1200,0 V120 H0 Z" 
              fill="rgba(79, 70, 229, 0.03)"
            ></path>
          </svg>
        </div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-8 bg-primary-400"></div>
              <span className="mx-4 px-5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-sm font-bold text-primary-700">Our Principles</span>
              <div className="h-px w-8 bg-primary-400"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Values</span> That Define Us
            </h2>
            
            <div className="h-1 w-20 bg-accent-500 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The guiding principles that shape our approach to innovation and service excellence
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* 3D card effect with gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col items-center text-center border border-primary-100 overflow-hidden backdrop-blur-sm">
                  {/* Digital circuit background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon container with glowing effect */}
                  <div className="relative mb-6 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-0.5">
                      <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary-900 relative z-10">{value.title}</h3>
                  
                  <p className="text-neutral-600 relative z-10">{value.description}</p>
                  
                  {/* Digital accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Transformed with 3D elements and holo-cards */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50/40 relative overflow-hidden">
        {/* Tech circuit lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,20 L100,20 M0,40 L100,40 M0,60 L100,60 M0,80 L100,80" stroke="#4338ca" strokeWidth="0.2" fill="none"/>
            <path d="M20,0 L20,100 M40,0 L40,100 M60,0 L60,100 M80,0 L80,100" stroke="#4338ca" strokeWidth="0.2" fill="none"/>
          </svg>
        </div>
        
        {/* Digital floating elements */}
        <motion.div 
          className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary-500/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-accent-500/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="px-5 py-1.5 rounded-full bg-primary-100 text-sm font-bold text-primary-800 inline-block mb-4">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Innovation</span> with Purpose
            </h2>
            
            <div className="h-1 w-20 bg-accent-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* 3D Card with digital effects */}
              <div className="relative h-full perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl opacity-30 blur-md group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white to-primary-50 backdrop-blur-sm p-10 rounded-2xl border border-primary-100 shadow-xl h-full transform preserve-3d group-hover:rotate-y-2 transition-all duration-500">
                  {/* Digital interface elements */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500 to-primary-500/0"></div>
                  
                  {/* Circuit corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary-300 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary-300 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary-300 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary-300 rounded-br-lg"></div>
                  
                  <div className="flex flex-col h-full items-center">
                    <div className="relative w-20 h-20 mb-8">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-primary-500/20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center">
                        <Image
                          src="/mission.png"
                          alt="Mission"
                          width={40}
                          height={40}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-primary-900 flex items-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-900">Our Mission</span>
                      <motion.div 
                        className="ml-2 h-1 w-6 bg-accent-500 rounded-full"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </h3>
                    
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      To empower businesses through innovative telecommunications and IT solutions that enhance connectivity, productivity, and growth, delivered with unparalleled expertise and customer service.
                    </p>
                    
                    {/* Data connection visualization */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div 
                            key={i}
                            className="h-1 w-1 rounded-full bg-primary-500"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ translateY: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* 3D Card with digital effects */}
              <div className="relative h-full perspective-1000">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent-500 to-primary-700 rounded-2xl opacity-30 blur-md group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white to-primary-50 backdrop-blur-sm p-10 rounded-2xl border border-primary-100 shadow-xl h-full transform preserve-3d group-hover:rotate-y-[-2deg] transition-all duration-500">
                  {/* Digital interface elements */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500/0 via-accent-500 to-accent-500/0"></div>
                  
                  {/* Circuit corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent-300 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent-300 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent-300 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent-300 rounded-br-lg"></div>
                  
                  <div className="flex flex-col h-full items-center">
                    <div className="relative w-20 h-20 mb-8">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-accent-500/20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center">
                        <Image
                          src="/vision-1.png"
                          alt="Vision"
                          width={40}
                          height={40}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-primary-900 flex items-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-accent-600">Our Vision</span>
                      <motion.div 
                        className="ml-2 h-1 w-6 bg-accent-500 rounded-full"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      />
                    </h3>
                    
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      To be the leading telecommunications and IT solutions provider in East Africa, recognized for our technical excellence, innovation, and commitment to helping businesses thrive in the digital era.
                    </p>
                    
                    {/* Data connection visualization */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.div 
                            key={i}
                            className="h-1 w-1 rounded-full bg-accent-500"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Futuristic holographic cards */}
      <section id="team" className="py-24 bg-gradient-to-b from-primary-50/40 to-white relative overflow-hidden">
        {/* Digital data visualization */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#4338ca" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#4338ca" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,20 C20,40 80,0 100,20"
              stroke="url(#teamGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M0,40 C20,60 80,20 100,40"
              stroke="url(#teamGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
            />
            <motion.path
              d="M0,60 C20,80 80,40 100,60"
              stroke="url(#teamGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6 }}
            />
            <motion.path
              d="M0,80 C20,100 80,60 100,80"
              stroke="url(#teamGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.9 }}
            />
          </svg>
        </div>
        
        <div className="container-wide relative z-10">
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-8 bg-primary-400/50"></div>
              <span className="mx-4 px-5 py-1.5 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 text-sm font-bold text-primary-700">Meet Our Team</span>
              <div className="h-px w-8 bg-primary-400/50"></div>
                </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Visionary <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">Leaders</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-accent-500"></div>
              </span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet the innovators driving our vision and technological excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
                className="group"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:via-primary-500/20 blur-xl z-0 transition-all duration-500"
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                    }}
                  />
                  
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary-100 group-hover:border-primary-300 transition-all duration-300 h-full z-10 relative">
                    {/* Digital interface overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Digital corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-300/0 group-hover:border-accent-500/80 transition-colors duration-300 rounded-tl-sm z-20"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary-300/0 group-hover:border-accent-500/80 transition-colors duration-300 rounded-tr-sm z-20"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary-300/0 group-hover:border-accent-500/80 transition-colors duration-300 rounded-bl-sm z-20"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-300/0 group-hover:border-accent-500/80 transition-colors duration-300 rounded-br-sm z-20"></div>
                    
                    <div className="p-6">
                      <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary-100 group-hover:border-primary-300 transition-colors duration-300">
                        <div className="absolute inset-0 bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300"></div>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="relative z-10 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Digital scan effect */}
                        <motion.div 
                          className="absolute inset-x-0 h-1 bg-accent-500/30 z-20"
                          initial={{ top: "0%" }}
                          animate={{ top: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: index * 0.5 }}
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1 text-primary-900">{member.name}</h3>
                        <div className="text-primary-600 mb-4 text-sm font-medium">{member.position}</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                      
                      {/* Connect button */}
                      <div className="mt-6 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors duration-300"
                        >
                          <span className="mr-2">Connect</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Futuristic digital portal */}
      <section className="py-24 relative overflow-hidden">
        {/* Digital background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
        
        {/* Digital grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        {/* Digital particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        {/* Glowing orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-primary-500/20 filter blur-3xl"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
                  <div className="absolute inset-3 rounded-full border border-white/40"></div>
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-white">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join us on a journey of digital innovation and technological excellence
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link href="/contact" className="btn bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full shadow-lg hover:shadow-white/25 flex items-center gap-2 group font-medium">
                <span>Get Started</span>
                <div className="w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/services" className="btn border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full group hover:bg-white/10 transition-all duration-300 font-medium">
                Explore Solutions
              </Link>
            </motion.div>
            
            {/* Digital data stream */}
            <div className="mt-16 flex justify-center">
              <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-primary-400 to-transparent overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
