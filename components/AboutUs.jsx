import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

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

  const coreValues = [
    {
      icon: <FaAward className="text-4xl text-primary-600 mb-4" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive tangible business results.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary-600 mb-4" />,
      title: 'Customer Focus',
      description: 'Our clients are at the center of everything we do. We listen, understand, and tailor our solutions to meet their unique needs.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-600 mb-4" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new technologies and approaches to solve complex business challenges.'
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-600 mb-4" />,
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
    <div className="bg-neutral-50 pt-24">
      {/* Hero Section */}
      <section className="gradient-bg-primary py-20 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Fischer Telesec
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8"
            >
              Your trusted partner in telecommunications and IT solutions since 2013
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-500/10 rounded-xl blur-lg -z-10"></div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
                    src="/Fischerlogo.png" 
                    alt="Fischer Telesec Team" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover bg-white p-8"
          />
        </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-900">Our Story</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Founded in 2013, Fischer Telesec has grown from a small telecommunications service provider to a comprehensive IT and telecommunications solutions company serving businesses across East Africa.
                </p>
                <p>
                  Our journey began with a simple mission: to provide reliable, high-quality telecommunications services to businesses in Kenya. As technology evolved, so did we, expanding our expertise to include IT infrastructure, data center services, and managed IT solutions.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner to organizations of all sizes, from small businesses to large enterprises, helping them leverage technology to achieve their business objectives and stay competitive in an increasingly digital world.
          </p>
        </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-bg-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
            <Image
              src="/mission.png"
                  alt="Mission" 
                  width={40} 
                  height={40} 
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Mission</h3>
              <p className="text-neutral-700">
                To empower businesses through innovative telecommunications and IT solutions that enhance connectivity, productivity, and growth, delivered with unparalleled expertise and customer service.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                <Image 
                  src="/vision-1.png" 
                  alt="Vision" 
                  width={40} 
                  height={40} 
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-900">Our Vision</h3>
              <p className="text-neutral-700">
                To be the leading telecommunications and IT solutions provider in East Africa, recognized for our technical excellence, innovation, and commitment to helping businesses thrive in the digital era.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and relationships with clients, partners, and each other
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-sm text-center border border-neutral-200 hover:border-primary-200 transition-colors"
              >
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-900">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-bg-light">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Our Leadership Team</h2>
            <p className="section-subtitle">
              Meet the experienced professionals who drive our vision and ensure excellence in everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="aspect-square relative bg-primary-50">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover p-8"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.position}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary-900">Why Choose Fischer Telesec</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-800">Industry Expertise</h3>
                    <p className="text-neutral-600">
                      With over a decade of experience, our team brings deep industry knowledge and technical expertise to every project.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-800">Comprehensive Solutions</h3>
                    <p className="text-neutral-600">
                      We offer end-to-end telecommunications and IT solutions, eliminating the need to work with multiple vendors.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-800">Customer-Centric Approach</h3>
                    <p className="text-neutral-600">
                      We prioritize understanding your business needs and delivering solutions that address your specific challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-800">Reliable Support</h3>
                    <p className="text-neutral-600">
                      Our dedicated support team ensures your systems run smoothly with 24/7 monitoring and rapid response to issues.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary-500/10 rounded-xl blur-lg -z-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
                  src="/telecomunication.jpg" 
                  alt="Fischer Telesec Services" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Partner with Fischer Telesec for innovative telecommunications and IT solutions that drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/getaquote" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Request a Consultation
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

export default AboutUs;
