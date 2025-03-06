import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake, FaAward, FaCertificate, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const PartnersPage = () => {
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

  // Strategic partners with more details
  const strategicPartners = [
    {
      name: "ICT Authority",
      logo: "/ictlogo.png",
      description: "Collaborating on digital transformation initiatives and ICT infrastructure development across Kenya.",
      partnerSince: "2015"
    },
    {
      name: "Liquid Telecom",
      logo: "/logoliquid.png",
      description: "Strategic partnership for fiber optic network solutions and enterprise connectivity services.",
      partnerSince: "2017"
    },
    {
      name: "Safaricom",
      logo: "/safaricomlogo.png",
      description: "Joint ventures in telecommunications infrastructure and mobile network solutions.",
      partnerSince: "2014"
    },
  ];

  // Technology partners
  const technologyPartners = [
    {
      name: "Kenya Power",
      logo: "/kenya-power.png",
      category: "Infrastructure"
    },
    {
      name: "Faiba",
      logo: "/faibafixed.png",
      category: "Connectivity"
    },
    // Add more technology partners as needed
  ];

  // Partnership benefits
  const partnershipBenefits = [
    {
      title: "Technical Expertise",
      description: "Access to our team of certified telecommunications and IT professionals.",
      icon: <FaCertificate className="text-4xl text-primary-600" />
    },
    {
      title: "Market Expansion",
      description: "Leverage our established client base and market presence across East Africa.",
      icon: <FaGlobe className="text-4xl text-primary-600" />
    },
    {
      title: "Innovation Collaboration",
      description: "Joint development of cutting-edge telecommunications solutions.",
      icon: <FaAward className="text-4xl text-primary-600" />
    },
    {
      title: "Strategic Growth",
      description: "Long-term partnerships focused on mutual business development and success.",
      icon: <FaHandshake className="text-4xl text-primary-600" />
    }
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
              Our Strategic <span className="text-primary-600">Partners</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fischer Telesec collaborates with industry leaders to deliver comprehensive 
              telecommunications and IT solutions that drive innovation and excellence.
            </p>
          </motion.div>

          {/* Strategic Partners */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {strategicPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8 flex flex-col items-center">
                  <div className="h-24 flex items-center justify-center mb-6">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={80}
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-primary-600 mb-4">Partner since {partner.partnerSince}</p>
                  <p className="text-gray-600 text-center">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Partnership Approach</h2>
              <p className="text-lg mb-6 opacity-90">
                At Fischer Telesec, we believe in building long-term, mutually beneficial partnerships 
                that create value for all stakeholders. Our collaborative approach focuses on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-700 p-2 rounded-full mr-4 mt-1">
                    <FaHandshake className="text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Shared Vision</h3>
                    <p className="opacity-80">Aligning our goals and strategies for maximum impact</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-700 p-2 rounded-full mr-4 mt-1">
                    <FaAward className="text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Excellence</h3>
                    <p className="opacity-80">Maintaining the highest standards in all our collaborations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-700 p-2 rounded-full mr-4 mt-1">
                    <FaGlobe className="text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation</h3>
                    <p className="opacity-80">Continuously exploring new technologies and solutions</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-primary-900/50 z-10"></div>
              <Image
                src="/network-partners.jpg"
                alt="Partnership Collaboration"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
                  <p className="mb-6 max-w-md">Join our network of industry leaders and innovators</p>
                  <Link href="/contact">
                    <a className="bg-white text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Get in Touch
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Technology Partners
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center h-40 w-full"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    objectFit="contain"
                  />
                </div>
                <p className="text-sm text-primary-600 font-medium">{partner.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Fischer Telesec
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            Interested in Partnering With Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 opacity-90"
          >
            Let's explore how we can create value together through strategic collaboration.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <a className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-gray-100 transition-colors duration-300">
                Contact Us
              </a>
            </Link>
            <Link href="/getaquote">
              <a className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-white/10 transition-colors duration-300">
                Request Information
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
