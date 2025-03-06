import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake, FaUsers, FaBuilding, FaGlobe } from "react-icons/fa";

const ClientsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Featured clients with more details
  const featuredClients = [
    {
      name: "Safaricom PLC",
      logo: "/safaricomlogo.png",
      description: "Collaborated on network infrastructure projects and telecommunications solutions.",
      industry: "Telecommunications"
    },
    {
      name: "Kenya Power",
      logo: "/kenya-power.png",
      description: "Provided IT infrastructure and network security solutions for critical systems.",
      industry: "Energy"
    },
    {
      name: "Faiba",
      logo: "/faibafixed.png",
      description: "Partnered on fiber optic network expansion and maintenance projects.",
      industry: "Internet Service Provider"
    },
  ];

  // Client logos for the showcase section
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

  // Testimonials from clients
  const testimonials = [
    {
      quote: "Fischer Telesec has been instrumental in upgrading our network infrastructure. Their expertise and professionalism are unmatched in the industry.",
      author: "John Kamau",
      position: "IT Director",
      company: "Global Enterprises Ltd"
    },
    {
      quote: "We've worked with Fischer Telesec for over 5 years, and they consistently deliver high-quality telecommunications solutions that meet our complex needs.",
      author: "Sarah Njeri",
      position: "CTO",
      company: "TechVision Kenya"
    },
    {
      quote: "Their team's technical knowledge and commitment to excellence have made them our go-to partner for all our IT and network security requirements.",
      author: "Michael Omondi",
      position: "Operations Manager",
      company: "Secure Systems International"
    }
  ];

  // Industry sectors served
  const sectors = [
    { name: "Telecommunications", icon: <FaGlobe className="text-4xl text-primary-600 mb-4" /> },
    { name: "Financial Services", icon: <FaBuilding className="text-4xl text-primary-600 mb-4" /> },
    { name: "Government", icon: <FaUsers className="text-4xl text-primary-600 mb-4" /> },
    { name: "Corporate", icon: <FaHandshake className="text-4xl text-primary-600 mb-4" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading <span className="text-primary-600">Organizations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fischer Telesec has built strong relationships with clients across various industries, 
              delivering exceptional telecommunications and IT solutions that drive business success.
            </p>
          </motion.div>

          {/* Featured Clients */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {featuredClients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8 flex flex-col items-center">
                  <div className="h-24 flex items-center justify-center mb-6">
      <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={80}
                      objectFit="contain"
      />
    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-sm text-primary-600 mb-4">{client.industry}</p>
                  <p className="text-gray-600 text-center">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-32 w-full"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  objectFit="contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-800 p-8 rounded-xl relative"
              >
                <div className="absolute -top-4 left-8 text-5xl text-primary-500">"</div>
                <p className="mb-6 relative z-10 pt-4">{testimonial.quote}</p>
                <div className="flex flex-col">
                  <span className="font-semibold">{testimonial.author}</span>
                  <span className="text-primary-300 text-sm">{testimonial.position}, {testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
</div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                {sector.icon}
                <h3 className="text-xl font-semibold text-gray-900">{sector.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 opacity-90"
          >
            Join our growing list of satisfied clients and experience the Fischer Telesec difference.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-gray-100 transition-colors duration-300">
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
