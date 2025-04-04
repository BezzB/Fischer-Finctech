import React from 'react';
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
      <section id="home" className="relative min-h-screen flex items-center justify-center tech-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90"></div>
        
        {/* Animated circuit lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
            <path d="M0,50 L100,50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
            <path d="M50,0 L50,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" className="pulse-glow"></circle>
          </svg>
        </div>
        
        <div className="container-wide z-10 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-primary-200 mb-4 backdrop-blur-sm border border-white/20">
                East Africa's Premier Enterprise Technology Partner
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text bg-gradient-to-r from-white to-primary-200">Transform Your Business</span> with Future-Proof Telecommunications & IT Solutions
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
              className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl"
            >
              Empowering businesses in East Africa with enterprise-grade technology for innovation, growth, and efficiency. Experience the future of digital transformation with our cutting-edge solutions.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link href="/getaquote" className="btn btn-accent">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white/10">
                Explore Our Services
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
              <div className="absolute inset-0 bg-primary-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/datacenter.jpg"
                alt="Data Center Technology"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover z-10 relative animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-primary-900">Enterprise Solutions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-center text-xl text-neutral-600 mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="/safaricomlogo.png" alt="Safaricom" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/kenya-power.png" alt="Kenya Power" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/ictlogo.png" alt="ICT Authority" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/Securex.png" alt="Securex" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center card-hover"
              >
                {stat.icon}
                <h3 className="text-4xl font-bold text-primary-800 mb-2">{stat.number}</h3>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title gradient-text">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive telecommunications and IT solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-900">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              We&apos;ve helped businesses across East Africa transform their telecommunications and IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-800/50 p-8 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      width={60} 
                      height={60}
                      className="rounded-full bg-white p-1" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-primary-300">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-primary-100 italic">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation and discover how our telecommunications and IT solutions can drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/getaquote" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Request a Free Quote
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;