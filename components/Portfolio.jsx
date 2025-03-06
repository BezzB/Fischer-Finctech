import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaServer, FaWifi, FaShieldAlt, FaDesktop } from 'react-icons/fa';

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
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Project Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful telecommunications and IT infrastructure projects 
            that have helped businesses across East Africa transform their operations.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80 w-full">
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
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View Case Study
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
              Let's discuss how Fischer Telesec can help transform your telecommunications and IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="/getaquote" 
                className="bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
