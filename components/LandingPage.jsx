import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaShieldAlt, FaHeadset, FaChartLine, FaUsers } from 'react-icons/fa';

const LandingPage = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <FaChartLine className="text-primary-600 mb-3 text-3xl" />, description: 'Decade of excellence in delivering enterprise solutions' },
    { number: '500+', label: 'Projects Completed', icon: <FaNetworkWired className="text-primary-400 mb-3 text-3xl" />, description: 'Successfully transformed businesses across East Africa' },
    { number: '98%', label: 'Client Satisfaction', icon: <FaUsers className="text-primary-400 mb-3 text-3xl" />, description: 'Consistently exceeding client expectations' },
    { number: '24/7', label: 'Support Available', icon: <FaHeadset className="text-primary-400 mb-3 text-3xl" />, description: 'Round-the-clock technical support and assistance' },
  ];

  const services = [
    {
      title: 'Telecommunication Services',
      icon: <FaNetworkWired className="text-4xl text-primary-600" />,
      description: 'Comprehensive network infrastructure solutions including fiber optics, wireless systems, and VoIP implementations.',
      features: ['Network Design & Implementation', 'Fiber Optic Solutions', 'Wireless Systems'],
      link: '/services#telecommunications'
    },
    {
      title: 'IT Infrastructure',
      icon: <FaServer className="text-4xl text-primary-600" />,
      description: 'End-to-end IT infrastructure solutions designed to optimize performance, security, and scalability for your business.',
      features: ['Server Solutions', 'Cloud Infrastructure', 'Hardware Procurement'],
      link: '/services#it-infrastructure'
    },
    {
      title: 'Data Center Services',
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      description: 'State-of-the-art data center solutions with robust security, redundancy, and performance optimization.',
      features: ['Data Center Design', 'Colocation Services', 'Disaster Recovery'],
      link: '/services#data-center'
    },
  ];

  const testimonials = [
    {
      quote: "Fischer Telesec transformed our network infrastructure, resulting in a 40% increase in performance and significant cost savings.",
      author: "Sarah Johnson",
      position: "CTO, Safaricom",
      image: "/safaricomlogo.png"
    },
    {
      quote: "Their expertise in telecommunications and IT services has been invaluable to our business growth and digital transformation journey.",
      author: "Michael Kamau",
      position: "IT Director, Kenya Power",
      image: "/kenya-power.png"
    }
  ];

  // Section transition animations
  const waveTransition = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
      }
    }
  };

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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative bg-primary-900 overflow-visible">
        <div className="min-h-[90vh] flex items-center justify-center tech-pattern overflow-hidden pt-10 md:pt-0 pb-16 md:pb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95"></div>
          
          {/* Tech particles animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary-500/10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary-400/10 animate-pulse delay-1000"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-accent-500/10 animate-ping"></div>
            <div className="absolute top-1/3 left-1/3 w-10 h-10 rounded-full bg-primary-600/20 animate-ping delay-700"></div>
            
            {/* Floating digital lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
              <path d="M0,50 L100,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-pulse"></path>
              <path d="M50,0 L50,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-pulse delay-700"></path>
          </svg>
            
            {/* Digital circuit nodes */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`absolute w-1.5 h-1.5 rounded-full bg-primary-300/40 animate-ping`}
                  style={{ 
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
        </div>
        
        <div className="container-wide z-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
                className="mb-8"
            >
                <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary-700/80 to-primary-600/80 text-sm font-bold tracking-wide text-white mb-4 backdrop-blur-sm border border-primary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300">
                East Africa&apos;s Premier Enterprise Technology Partner
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-none tracking-tight"
              >
                <div className="inline-block relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-white">Transform</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-500 rounded-full"></div>
                </div>
                <br />
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-white">Your Business</span>
                <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl text-primary-100 font-semibold">with Future-Proof Tech</span>
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
                className="text-xl md:text-2xl text-primary-100 mb-12 max-w-xl font-light leading-relaxed border-l-4 border-accent-500 pl-6"
            >
                Empowering businesses in East Africa with enterprise-grade telecommunications & IT solutions for innovation, growth, and efficiency.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
                className="flex flex-wrap gap-6"
            >
                <Link href="/getaquote" className="btn bg-accent-500 hover:bg-accent-600 text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-accent-500/25 hover:-translate-y-1 transition-all duration-300">
                Get a Free Consultation
              </Link>
                <Link href="/services" className="btn border-2 border-white text-white hover:bg-white/10 text-base font-bold px-8 py-4 rounded-xl group transition-all duration-300">
                Explore Our Services
                  <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
                {/* Image glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-accent-500/20 to-primary-700/30 rounded-3xl filter blur-3xl opacity-80 animate-pulse"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 border-4 border-primary-500/30 rounded-2xl transform rotate-12 z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-accent-500/30 rounded-full z-0"></div>
                
                <div className="relative z-10">
              <Image
                src="/datacenter.jpg"
                alt="Data Center Technology"
                width={600}
                height={500}
                    className="rounded-2xl shadow-2xl object-cover relative animate-float border-2 border-white/10"
              />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-bold text-white">Enterprise Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Service Highlights - Visible only on smaller screens */}
        <div className="bg-primary-900 pt-6 pb-16 px-4 block lg:hidden">
          <div className="container-wide">
            <h3 className="text-xl font-bold text-white text-center mb-6">Our Core Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { 
                  icon: <FaNetworkWired className="text-2xl text-accent-500" />,
                  title: "Network Infrastructure",
                },
                { 
                  icon: <FaServer className="text-2xl text-accent-500" />,
                  title: "Data Center Services",
                },
                { 
                  icon: <FaShieldAlt className="text-2xl text-accent-500" />,
                  title: "Cybersecurity",
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-primary-700/30"
                >
                  <div className="bg-primary-700/50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-medium text-primary-100 text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Service Highlights - visible only on large screens */}
        <div className="hidden lg:block relative mx-auto container-wide z-20 pb-16" style={{ marginTop: "-80px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { 
                icon: <FaNetworkWired className="text-3xl text-accent-500" />,
                title: "Network Infrastructure",
                desc: "Enterprise-grade networking solutions" 
              },
              { 
                icon: <FaServer className="text-3xl text-accent-500" />,
                title: "Data Center Services",
                desc: "Robust & secure data management" 
              },
              { 
                icon: <FaShieldAlt className="text-3xl text-accent-500" />,
                title: "Cybersecurity Solutions",
                desc: "Protection against emerging threats" 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-xl border border-primary-100 flex items-center gap-5 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Wave Transition */}
      <div className="relative h-24 md:h-32 lg:h-40 -mt-1 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3949ab" />
            </linearGradient>
          </defs>
          <motion.path
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={waveTransition}
            fill="url(#waveGradient)"
            d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,117.3C672,96,768,64,864,69.3C960,75,1056,117,1152,133.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></motion.path>
        </svg>
        
        {/* Digital data streams */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ 
                x: "-10%", 
                y: `${i * 15}%`,
                opacity: 0 
              }}
              animate={{ 
                x: "110%",
                opacity: [0, 0.8, 0] 
              }}
              transition={{ 
                duration: 3 + (i % 3),
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute h-px bg-gradient-to-r from-primary-300/0 via-primary-300/80 to-primary-300/0"
              style={{ 
                width: `${100 + (i * 20)}px`,
                height: `${1 + (i % 2)}px`
              }}
            />
          ))}
          
          {/* Floating nodes */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`node-${i}`}
              initial={{ 
                x: `${i * 20}%`,
                y: `${i * 15}%`,
                scale: 0 
              }}
              animate={{ 
                y: [`${i * 15}%`, `${i * 15 + 5}%`, `${i * 15}%`],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + i,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute w-2 h-2 rounded-full bg-primary-400/50"
            />
          ))}
        </div>
      </div>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50/50 relative overflow-hidden">
        {/* Tech circuit background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M20,0 L20,100 M0,20 L100,20 M40,0 L40,100 M0,40 L100,40 M60,0 L60,100 M0,60 L100,60 M80,0 L80,100 M0,80 L100,80" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="40" cy="40" r="2" fill="currentColor" />
            <circle cx="60" cy="60" r="2" fill="currentColor" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
            <circle cx="20" cy="80" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="2" fill="currentColor" />
          </svg>
        </div>
        
        {/* Digital pulse rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
          <div className="absolute inset-0 border-2 border-primary-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-[15%] border-2 border-primary-500/30 rounded-full animate-pulse-slow delay-500"></div>
          <div className="absolute inset-[30%] border-2 border-primary-500/40 rounded-full animate-pulse-slow delay-1000"></div>
          <div className="absolute inset-[45%] border-2 border-primary-500/50 rounded-full animate-pulse-slow delay-1500"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 top-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -left-10 bottom-20 w-60 h-60 bg-accent-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 text-sm font-bold text-primary-800 mb-4 shadow-sm">Industry Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-900 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-800 via-primary-600 to-primary-800">Powering Innovation</span>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to deliver cutting-edge solutions
            </p>
          </motion.div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-primary-100 relative">
            {/* Digital data streams */}
            <svg width="100%" height="100%" className="absolute inset-0 opacity-20 hidden md:block">
              <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow" />
              <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-700" />
              <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-1500" />
              
              {/* Vertical connections */}
              <line x1="20%" y1="30%" x2="20%" y2="70%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-500" />
              <line x1="40%" y1="30%" x2="40%" y2="70%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-1000" />
              <line x1="60%" y1="30%" x2="60%" y2="70%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-300" />
              <line x1="80%" y1="30%" x2="80%" y2="70%" stroke="#4338ca" strokeWidth="1" strokeDasharray="5,5" className="animate-data-flow delay-800" />
            </svg>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {[
                { name: "Safaricom", img: "/safaricomlogo.png" },
                { name: "Kenya Power", img: "/kenya-power.png" },
                { name: "ICT Authority", img: "/ictlogo.png" },
                { name: "Securex", img: "/Securex.png" }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-primary-50 hover:border-primary-300 transition-all duration-300 group relative transform hover:scale-105 hover:shadow-xl mb-3 h-24 w-full flex items-center justify-center overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    {/* Digital corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary-300/0 group-hover:border-primary-300/80 transition-colors duration-300 rounded-tl-sm"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary-300/0 group-hover:border-primary-300/80 transition-colors duration-300 rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary-300/0 group-hover:border-primary-300/80 transition-colors duration-300 rounded-bl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary-300/0 group-hover:border-primary-300/80 transition-colors duration-300 rounded-br-sm"></div>
                    
                    <Image 
                      src={partner.img} 
                      alt={partner.name} 
                      width={130} 
                      height={65} 
                      className="transition-all duration-300 group-hover:brightness-110 z-10 relative" 
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-primary-700">Trusted Partner</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connection nodes */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none hidden md:block">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary-500/50 animate-pulse"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Circuit Board Section Divider */}
      <div className="relative h-40 overflow-hidden bg-primary-50/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 900 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#eff6ff" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#dividerGradient)" 
              d="M0 0L900 0 900 150Q675 200 450 150 225 100 0 150Z"
            />
            
            {/* Circuit paths */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M0 75 L900 75" 
              stroke="#4338ca" 
              strokeWidth="0.5" 
              strokeDasharray="10,10" 
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
              d="M0 100 L450 125 L900 100" 
              stroke="#4338ca" 
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
          
          {/* Circuit nodes */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute left-1/4 top-1/2 w-3 h-3 rounded-full bg-primary-100 border border-primary-400"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="absolute left-1/2 top-[60%] w-4 h-4 rounded-full bg-primary-100 border border-primary-400"
          />
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="absolute left-3/4 top-1/2 w-3 h-3 rounded-full bg-primary-100 border border-primary-400"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-28 relative overflow-hidden">
        {/* Tech-inspired background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Digital framework lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" className="absolute">
            <defs>
              <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#4338ca" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4338ca" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q250,0 500,100 T1000,100" fill="none" stroke="url(#statsGradient)" strokeWidth="2" />
            <path d="M0,200 Q250,100 500,200 T1000,200" fill="none" stroke="url(#statsGradient)" strokeWidth="2" />
            <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="url(#statsGradient)" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 transform -translate-y-1/2 translate-x-1/2 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full opacity-30 transform translate-y-1/2 -translate-x-1/2 filter blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-6 bg-primary-400"></div>
              <span className="px-4 py-1 rounded-full bg-primary-100 text-sm font-bold text-primary-700 mx-3">Data-Driven Excellence</span>
              <div className="h-px w-6 bg-primary-400"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary-900 leading-tight">
              Our <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">Performance</span>
                <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent-500"></div>
              </span> Metrics
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Delivering measurable results through technological excellence and innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 relative">
            {/* Connecting lines between stats (only visible on larger screens) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent hidden lg:block" style={{ transform: 'translateY(-50%)' }}></div>
            
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Vertical connection dot */}
                <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary-300 -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative group overflow-hidden h-full flex flex-col items-center">
                  {/* Background decoration */}
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300"></div>
                  
                  {/* Icon container with animated background */}
                  <div className="relative mb-6 w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-all duration-500 z-10">
                    <div className="absolute inset-0 bg-primary-500/5 rounded-2xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-px bg-primary-300/30"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-300/30"></div>
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-300/30"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-primary-300/30"></div>
                    </div>
                    
                    <div className="text-primary-600 text-3xl transform group-hover:scale-110 transition-all duration-500">
                {stat.icon}
                    </div>
                  </div>
                  
                  {/* Stat number with animated effect */}
                  <div className="relative mb-3 z-10">
                    <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">{stat.number}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl text-primary-900 mb-3 text-center z-10">{stat.label}</h3>
                  
                  <p className="text-neutral-600 text-sm text-center leading-relaxed z-10">{stat.description}</p>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary-200"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary-200"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary-200"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary-200"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link href="/aboutus" className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-300/20 group">
              <span className="font-semibold">Learn More About Our Success</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Digital Flow Transition */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white"></div>
        <svg viewBox="0 0 1440 150" className="absolute w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#4338ca" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,110L1380,110C1320,110,1200,110,1080,110C960,110,840,110,720,110C600,110,480,110,360,110C240,110,120,110,60,110L0,110Z"
            fill="url(#flowGradient)"
          ></motion.path>
        </svg>
        
        {/* Flowing particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{ 
                x: `${i * 12}%`, 
                y: -10, 
                opacity: 0 
              }}
              animate={{ 
                y: 150,  
                opacity: [0, 0.7, 0]
              }}
              transition={{ 
                duration: 2 + (i % 3),
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="relative py-28 overflow-hidden">
        {/* Tech-inspired background */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full opacity-10 filter blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-primary-400/50"></div>
              <span className="mx-4 px-5 py-1.5 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 text-sm font-bold text-primary-700">Enterprise Solutions</span>
              <div className="h-px w-8 bg-primary-400/50"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary-900 leading-tight">
              Cutting-<span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">Edge</span>
                <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent-500"></div>
              </span> Services
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive telecommunications and IT solutions tailored for enterprise excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-100 group relative"
              >
                {/* Digital edge accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/80 to-primary-400/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-8">
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-primary-50 group-hover:bg-primary-100 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                    </div>
                    {/* Digital corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary-300/30 rounded-tl-sm"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary-300/30 rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary-300/30 rounded-bl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary-300/30 rounded-br-sm"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary-900 group-hover:text-primary-700 transition-all duration-300">{service.title}</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8 space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start group/item">
                        <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover/item:bg-primary-100 transition-all duration-300">
                          <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-neutral-700 group-hover/item:text-primary-800 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link href="/services" className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-primary-300/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
              Explore All Solutions
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5"></div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary-600 rounded-full opacity-20 filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-400 rounded-full opacity-10 filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-800 text-sm font-medium text-primary-200 mb-4 border border-primary-700">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto font-light">
              We&apos;ve helped businesses across East Africa transform their telecommunications and IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-800 to-primary-900 p-10 rounded-2xl shadow-xl backdrop-blur-sm border border-primary-700/30"
              >
                <svg className="w-12 h-12 text-primary-500 mb-6 opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10,8c-4.418,0-8,3.582-8,8c0,2.837,1.479,5.331,3.704,6.752C5.802,23.139,6,23.939,6,24c0,2.25-0.5,4-0.5,4h5v-2c0-1.104,0.896-2,2-2h2c0.359,0,0.689,0.118,0.964,0.304C16.469,24.754,17.586,25,18,25c0.761,0,1.464-0.196,2.065-0.511C20.345,24.817,20.668,25,21,25h2c1.104,0,2,0.896,2,2v2h5c0,0-0.5-1.75-0.5-4c0-0.061,0.198-0.861,0.296-1.248C32.521,21.331,34,18.837,34,16c0-4.418-3.582-8-8-8C21.979,8,18.19,11.983,16,11.983C13.806,11.983,10.019,8,10,8z"></path>
                </svg>
                <p className="text-primary-100 italic text-lg mb-8 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="p-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      width={60} 
                      height={60}
                      className="rounded-full bg-white p-1" 
                    />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonial.author}</h4>
                    <p className="text-primary-300">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <svg className="absolute right-0 top-0 h-full" width="400" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"></path>
          </svg>
        </div>
        
        <div className="container-tight relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform <br className="hidden md:block" />Your Business?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-light">
              Get in touch with our experts today for a free consultation and discover how our telecommunications and IT solutions can drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/getaquote" className="btn bg-white text-primary-700 hover:bg-primary-50 font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                Request a Free Quote
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-4 rounded-xl">
                Contact Our Team
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-primary-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Secure Support</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-primary-400/30"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-primary-400/30"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Free Consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;