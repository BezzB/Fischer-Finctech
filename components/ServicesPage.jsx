import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaServer, FaShieldAlt, FaHeadset, FaCloudUploadAlt, FaTools } from 'react-icons/fa';

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

  const services = [
    {
      id: 'telecommunications',
      title: 'Telecommunications Services',
      icon: <FaNetworkWired className="text-5xl text-primary-600 mb-4" />,
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
              Enterprise-Grade Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8"
            >
              Comprehensive telecommunications and IT services tailored to meet the unique needs of your business
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/getaquote" className="btn btn-accent">
                Request a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Our Services Portfolio</h2>
            <p className="section-subtitle">
              Fischer Telesec offers a comprehensive range of telecommunications and IT solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.1}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-sm overflow-hidden card-hover"
              >
                <div className="p-8 text-center">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-900">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <a href={`#${service.id}`} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-bg-light'}`}
        >
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary-500/10 rounded-xl blur-lg -z-10"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900">{service.title}</h2>
                </div>
                <p className="text-lg text-neutral-700 mb-8">{service.description}</p>
                
                <div className="space-y-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                      <h3 className="text-xl font-semibold mb-2 text-primary-800">{feature.title}</h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business Technology?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact our team of experts today to discuss how our services can be tailored to meet your specific business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/getaquote" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Get a Free Quote
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

export default ServicesPage;
