import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaServer, FaWifi, FaShieldAlt, FaDesktop, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Portfolio = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'network', name: 'Network Infrastructure', icon: <FaNetworkWired /> },
    { id: 'security', name: 'Security Systems', icon: <FaShieldAlt /> },
    { id: 'telecom', name: 'Telecommunications', icon: <FaWifi /> },
    { id: 'server', name: 'Server Solutions', icon: <FaServer /> },
    { id: 'it', name: 'IT Support', icon: <FaDesktop /> },
  ];

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Enterprise Network Infrastructure',
      category: 'network',
      description: 'Complete network infrastructure deployment for a corporate headquarters with 500+ workstations.',
      image: '/projects3.jpg',
      client: 'Corporate Financial Services',
      year: '2023',
      featured: true
    },
    {
      id: 2,
      title: 'Data Center Security Implementation',
      category: 'security',
      description: 'Comprehensive security system installation for a major data center, including access control and surveillance.',
      image: '/project2.jpg',
      client: 'TechVault Solutions',
      year: '2022'
    },
    {
      id: 3,
      title: 'Fiber Optic Network Expansion',
      category: 'telecom',
      description: 'Expansion of fiber optic network across multiple locations for improved connectivity and bandwidth.',
      image: '/projects3.jpg',
      client: 'Regional Telecommunications Provider',
      year: '2023',
      featured: true
    },
    {
      id: 4,
      title: 'Server Room Optimization',
      category: 'server',
      description: 'Complete redesign and optimization of server infrastructure for improved performance and reliability.',
      image: '/project.jpg',
      client: 'Healthcare Systems Inc.',
      year: '2022'
    },
    {
      id: 5,
      title: 'Wireless Network Deployment',
      category: 'network',
      description: 'Large-scale wireless network deployment for a university campus with seamless coverage.',
      image: '/project 6.jpg',
      client: 'National University',
      year: '2023'
    },
    {
      id: 6,
      title: 'IT Support Infrastructure',
      category: 'it',
      description: 'Implementation of comprehensive IT support systems and help desk solutions for a large organization.',
      image: '/project 8.jpg',
      client: 'Government Agency',
      year: '2022'
    },
  ];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Toggle project details
  const toggleProjectDetails = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background digital elements */}
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
      
      <div className="bg-gradient-to-b from-white to-gray-50 py-16 relative z-10">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Hero Section */}
          <div className="relative py-10 mb-16 overflow-hidden rounded-3xl">
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
            
            <div className="relative z-20 py-16 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div className="relative inline-block mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                    Our <span className="text-primary-300">Project Portfolio</span>
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
                  Explore our successful telecommunications and IT infrastructure projects 
                  that have helped businesses across East Africa transform their operations.
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
          </div>

          {/* Featured Projects */}
          <section className="mb-20 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-600">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group relative"
                >
                  {/* Digital corner accents */}
                  <svg className="absolute top-0 right-0 w-16 h-16 text-primary-500/5 z-10" viewBox="0 0 16 16" fill="none">
                    <path d="M0,0 L16,0 L16,16 L0,0 Z" fill="currentColor" />
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-16 h-16 text-primary-500/5 z-10" viewBox="0 0 16 16" fill="none">
                    <path d="M0,16 L0,0 L16,16 L0,16 Z" fill="currentColor" />
                  </svg>
                  
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-white/80 mb-4">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary-300">{project.client}</span>
                          <span className="bg-primary-600 px-3 py-1 rounded-full text-sm">{project.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Digital scan effect on hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="absolute top-0 left-0 right-0 h-0.5 bg-primary-400/50"
                        initial={{ width: 0 }}
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.icon && <span>{category.icon}</span>}
                  {category.name}
                </button>
              ))}
          </div>
          </section>

          {/* Project Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => toggleProjectDetails(project.id)}
              >
                <div className="relative h-56">
            <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600">{project.client}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
          </div>
                  
                  {/* Expanded details */}
                  {expandedProject === project.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <h4 className="font-semibold mb-2">Project Details</h4>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex justify-end">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium group inline-flex items-center gap-1">
                          <span>View Case Study</span>
                          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
          </div>
                    </motion.div>
                  )}
          </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <section className="mt-24 bg-primary-900 text-white rounded-2xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold mb-2">100+</span>
                <span className="text-primary-300">Projects Completed</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold mb-2">50+</span>
                <span className="text-primary-300">Satisfied Clients</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold mb-2">10+</span>
                <span className="text-primary-300">Years Experience</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold mb-2">5</span>
                <span className="text-primary-300">Industry Awards</span>
              </motion.div>
          </div>
          </section>

          {/* CTA Section */}
          <section className="mt-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss how Fischer Telesec can help transform your telecommunications and IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/getaquote" 
                  className="bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Request a Quote
                </Link>
          </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
