import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaNetworkWired, FaServer, FaShieldAlt, FaHeadset, FaCloudUploadAlt, FaTools, FaChevronRight } from 'react-icons/fa';

const ServicesPage = () => {
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

  const services = [
    {
      id: 'telecommunications',
      title: 'Telecommunications Services',
      icon: <FaNetworkWired className="text-5xl mb-4" />,
      description: 'Comprehensive telecommunications solutions designed to enhance connectivity, reliability, and performance for businesses of all sizes.',
      image: '/telecom_image.jpg',
      features: [
        {
          title: 'Network Design & Implementation',
          description: 'Custom network architecture design and implementation services tailored to your specific business requirements and future growth plans.'
        },
        {
          title: 'Fiber Optic Solutions',
          description: 'High-speed fiber optic installations, maintenance, and troubleshooting for reliable and fast data transmission.'
        },
        {
          title: 'Wireless Systems',
          description: 'Enterprise-grade wireless network solutions with optimal coverage, security, and performance.'
        },
        {
          title: 'VoIP & Unified Communications',
          description: 'Integrated voice, video, and messaging solutions that streamline communication and enhance collaboration.'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Services',
      icon: <FaServer className="text-5xl text-primary-600 mb-4" />,
      description: 'End-to-end IT infrastructure solutions that provide the foundation for your digital business operations and growth.',
      image: '/it-services.jpg',
      features: [
        {
          title: 'Server Solutions',
          description: 'Enterprise-grade server deployment, configuration, and management to ensure optimal performance and reliability.'
        },
        {
          title: 'Storage Systems',
          description: 'Scalable storage solutions designed to securely manage your growing data needs with redundancy and fast access.'
        },
        {
          title: 'Network Security',
          description: 'Comprehensive security measures to protect your network from threats, including firewalls, intrusion detection, and prevention systems.'
        },
        {
          title: 'Hardware Procurement',
          description: 'Strategic sourcing and procurement of IT hardware from trusted vendors with competitive pricing and warranty support.'
        }
      ]
    },
    {
      id: 'data-center',
      title: 'Data Center Services',
      icon: <FaShieldAlt className="text-5xl text-primary-600 mb-4" />,
      description: 'State-of-the-art data center solutions with robust security, redundancy, and performance optimization.',
      image: '/datacenter.jpg',
      features: [
        {
          title: 'Data Center Design',
          description: 'Custom data center architecture design that optimizes space, power efficiency, cooling, and scalability.'
        },
        {
          title: 'Colocation Services',
          description: 'Secure hosting of your servers and networking equipment in our state-of-the-art facilities with 24/7 monitoring.'
        },
        {
          title: 'Disaster Recovery',
          description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity in case of emergencies.'
        },
        {
          title: 'Infrastructure Monitoring',
          description: 'Proactive monitoring of your data center infrastructure to identify and resolve issues before they impact operations.'
        }
      ]
    },
    {
      id: 'managed-services',
      title: 'Managed IT Services',
      icon: <FaHeadset className="text-5xl text-primary-600 mb-4" />,
      description: 'Proactive management and support of your IT environment, allowing you to focus on your core business activities.',
      image: '/maas.webp',
      features: [
        {
          title: '24/7 Technical Support',
          description: 'Round-the-clock technical assistance from our team of certified IT professionals to resolve issues promptly.'
        },
        {
          title: 'Proactive Monitoring',
          description: 'Continuous monitoring of your IT systems to identify and address potential issues before they cause disruptions.'
        },
        {
          title: 'Patch Management',
          description: 'Systematic application of updates and security patches to keep your systems secure and up-to-date.'
        },
        {
          title: 'IT Consulting',
          description: 'Strategic IT consulting to align your technology investments with your business objectives and industry best practices.'
        }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: <FaCloudUploadAlt className="text-5xl text-primary-600 mb-4" />,
      description: 'Comprehensive cloud solutions to enhance flexibility, scalability, and cost-efficiency for your business operations.',
      image: '/datacenter.png',
      features: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration of your applications and data to the cloud with minimal disruption to your business operations.'
        },
        {
          title: 'Hybrid Cloud Solutions',
          description: 'Custom hybrid cloud architectures that combine the benefits of private and public cloud environments.'
        },
        {
          title: 'Cloud Security',
          description: 'Advanced security measures to protect your cloud-based data and applications from unauthorized access and threats.'
        },
        {
          title: 'Cloud Optimization',
          description: 'Performance tuning and cost optimization of your cloud resources to maximize ROI and efficiency.'
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      icon: <FaTools className="text-5xl text-primary-600 mb-4" />,
      description: 'Comprehensive maintenance and support services to ensure the reliability and longevity of your IT and telecommunications infrastructure.',
      image: '/maintenance_image.jpg',
      features: [
        {
          title: 'Preventive Maintenance',
          description: 'Regular scheduled maintenance to prevent system failures and extend the lifespan of your hardware.'
        },
        {
          title: 'Emergency Repairs',
          description: 'Rapid response to critical system failures with minimal downtime and business disruption.'
        },
        {
          title: 'Software Updates',
          description: 'Timely application of software updates and security patches to maintain system performance and security.'
        },
        {
          title: 'Performance Optimization',
          description: 'Tuning and optimization of your systems to ensure they operate at peak efficiency and performance.'
        }
      ]
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
        {/* Digital background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-black"></div>
        
        {/* Digital circuit grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="serviceGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20,0 L0,0 0,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#serviceGrid)" />
          </svg>
        </div>
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-600/20 animate-pulse-slow filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-500/20 animate-pulse-slow delay-1000 filter blur-3xl"></div>
        </div>
        
        {/* Digital intersecting lines */}
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
                    <FaNetworkWired className="text-4xl text-white" />
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
              Enterprise-Grade<br />Technology Solutions
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
              Comprehensive telecommunications and IT services tailored to meet the unique needs of your business
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link href="/getaquote" className="btn bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full shadow-lg hover:shadow-primary-500/25 flex items-center gap-2 group font-medium transition-all duration-500">
                <span>Request a Consultation</span>
                <div className="w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="#services-overview" className="btn border-2 border-white text-white px-8 py-4 rounded-full group hover:bg-white/10 transition-all duration-300 font-medium">
                Explore Solutions
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

      {/* Services Overview - Digital Approach */}
      <section id="services-overview" className="relative py-28 overflow-hidden">
        {/* Digital background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-white"></div>
        
        {/* Digital flowing grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="servicesPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <motion.rect 
              width="100%" 
              height="100%" 
              fill="url(#servicesPattern)"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </svg>
        </div>
        
        {/* Blurred gradient orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 5 }}
        />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-8 bg-primary-400/70"></div>
              <span className="mx-4 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 text-sm font-bold text-primary-700">Service Portfolio</span>
              <div className="h-px w-8 bg-primary-400/70"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-700 leading-tight md:leading-tight">
              Technology Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Digital Era</span>
            </h2>
            
            <div className="h-1 w-24 bg-accent-500/70 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Fischer Telesec offers a comprehensive range of telecommunications and IT solutions to help your business thrive in the digital age
            </p>
            
            {/* Digital data points */}
            <div className="flex justify-center gap-2 mb-4 mt-10">
              <motion.div 
                className="w-2 h-2 rounded-full bg-accent-500/70" 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-accent-500/70" 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-accent-500/70" 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card with tech-inspired design */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-full border border-primary-100 z-10">
                  {/* Digital accent elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-300/40 rounded-tl-sm"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-300/40 rounded-tr-sm"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-300/40 rounded-bl-sm"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-300/40 rounded-br-sm"></div>
                  
                  {/* Card content */}
                  <div className="p-8 text-center">
                    <div className="relative mb-6 flex justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-0.5">
                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary-900">{service.title}</h3>
                    <p className="text-neutral-600 mb-6">{service.description}</p>
                    
                    <a 
                      href={`#${service.id}`} 
                      className="inline-flex items-center font-semibold text-primary-600 group-hover:text-primary-700 transition-all duration-300 relative"
                    >
                      <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">Explore Details</span>
                      <div className="relative ml-2 w-6 h-6">
                        <div className="absolute inset-0 bg-primary-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <FaChevronRight className="w-6 h-6 relative z-10" />
                      </div>
                    </a>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections - Futuristic design */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 relative overflow-hidden ${index % 2 === 0 ? 'bg-primary-50/30' : 'bg-white'}`}
        >
          {/* Digital background effect */}
          {index % 2 === 0 && (
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id={`serviceGrid-${index}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M15,0 L0,0 0,15" fill="none" stroke="currentColor" strokeWidth="0.2" />
                </pattern>
                <rect width="100%" height="100%" fill={`url(#serviceGrid-${index})`} />
              </svg>
            </div>
          )}
          
          {/* Accent lighting */}
          <motion.div 
            className={`absolute ${index % 2 === 0 ? 'top-10 right-10' : 'bottom-10 left-10'} w-80 h-80 rounded-full bg-primary-500/5 blur-3xl`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                <div className="inline-flex items-center mb-4">
                  <div className="h-px w-12 bg-primary-500/50"></div>
                  <span className="mx-4 text-sm font-bold text-primary-700">{service.title}</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-8 text-primary-900">{service.title}</h2>
                
                <p className="text-lg text-neutral-600 mb-8">{service.description}</p>
                
                <div className="space-y-6 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex group"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-primary-800">{feature.title}</h3>
                        <p className="text-neutral-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Link href="/getaquote" className="btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-primary-300/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
                  <span>Request This Service</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="relative group">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-primary-400/30 rounded-tl-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-primary-400/30 rounded-br-xl"></div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-8 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-400/20 rounded-2xl blur-2xl"
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-primary-200 shadow-xl">
                    {/* Digital scan effect */}
                    <motion.div 
                      className="absolute inset-x-0 h-[2px] bg-accent-500/40 z-20 pointer-events-none"
                      initial={{ top: "0%" }}
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                    
                    <div className="aspect-video relative bg-primary-100/50">
                      <Image
                        src={service.image || '/fallback-service.jpg'} 
                        alt={service.title} 
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Digital corner accents */}
                      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/40 rounded-tl-sm z-20"></div>
                      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/40 rounded-tr-sm z-20"></div>
                      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/40 rounded-bl-sm z-20"></div>
                      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/40 rounded-br-sm z-20"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section - Futuristic digital portal */}
      <section className="py-24 relative overflow-hidden">
        {/* Digital background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
        
        {/* Digital grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="ctaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>
        
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
          style={{ transform: 'translate(-50%, -50%)' }}
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Our team of experts is ready to design a custom solution tailored to your business needs
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link href="/getaquote" className="btn bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-full shadow-lg hover:shadow-white/25 flex items-center gap-2 group font-medium">
                <span>Request Free Consultation</span>
                <div className="w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/contact" className="btn border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full group hover:bg-white/10 transition-all duration-300 font-medium">
                Contact Our Team
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

export default ServicesPage;
