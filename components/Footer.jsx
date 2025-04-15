import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/aboutus' },
        { name: 'Our Team', href: '/aboutus#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Telecommunications', href: '/services#telecommunications' },
        { name: 'IT Infrastructure', href: '/services#it-infrastructure' },
        { name: 'Data Center Services', href: '/services#data-center' },
        { name: 'Managed Services', href: '/services#managed-services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/work' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Support', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Digital background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footerGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20,0 L0,0 0,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="10" cy="10" r="0.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>
      
      {/* Digital accent orbs */}
      <motion.div 
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-primary-400/5 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [20, -20, 20], 
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-accent-500/5 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [-20, 20, -20], 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Top digital accent line */}
      <div className="relative h-1 w-full bg-gradient-to-r from-primary-800 via-primary-600 to-primary-800"></div>
      
      {/* Main Footer */}
      <div className="container-wide py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block mb-6 relative group">
                {/* Logo glow effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 bg-primary-500/20 blur-md transition-opacity duration-300"
                />
                
                <Image 
                  src="/Fischerlogo.png" 
                  alt="Fischer Fintech Logo" 
                  width={120} 
                  height={30} 
                  priority={true}
                  className="object-contain bg-white p-2 rounded-md relative z-10"
                />
              </Link>
              <p className="text-primary-200 mb-6 max-w-md">
                Fischer Telesec is a leading provider of telecommunications and IT solutions, 
                delivering innovative technology services to businesses across East Africa.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-800/70 mr-3 border border-primary-700 group-hover:border-primary-500 transition-colors">
                    <FaMapMarkerAlt className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                  <p className="text-primary-100 pt-1">Zayed Plaza, Mombasa-Malindi Road, Mombasa</p>
                </motion.div>
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-800/70 mr-3 border border-primary-700 group-hover:border-primary-500 transition-colors">
                    <FaPhoneAlt className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                  <a href="tel:+254725763135" className="text-primary-100 hover:text-white transition-colors">
                    +254 725 763 135
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-800/70 mr-3 border border-primary-700 group-hover:border-primary-500 transition-colors">
                    <FaEnvelope className="text-primary-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                  <a href="mailto:info@fischertelesec.co.ke" className="text-primary-100 hover:text-white transition-colors">
                    info@fischertelesec.co.ke
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((column, colIndex) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (colIndex + 1) }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                {column.title}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (colIndex + 1) + 0.05 * linkIndex }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-primary-200 hover:text-white transition-all flex items-center group"
                    >
                      <motion.span 
                        className="inline-block w-0 h-0.5 bg-primary-500 mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"
                      />
                      <span>{link.name}</span>
                      <FaArrowRight className="ml-1 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter Signup - New Section */}
        <motion.div 
          className="mt-16 pt-12 border-t border-primary-800/60 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">Stay Updated</h3>
              <p className="text-primary-200">Subscribe to our newsletter for the latest updates and industry insights.</p>
            </div>
            <div className="relative">
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-primary-800/60 border border-primary-700 focus:border-primary-500 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-primary-300 group-focus-within:w-full transition-all duration-300"></div>
                </div>
                <motion.button 
                  className="bg-primary-600 hover:bg-primary-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Subscribe</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Button accent lighting */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                    <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                  </div>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800/60 relative z-10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            © {currentYear} Fischer Telesec. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {[
              { icon: <FaLinkedin size={16} />, label: "LinkedIn", url: "https://linkedin.com" },
              { icon: <FaTwitter size={16} />, label: "Twitter", url: "https://twitter.com" },
              { icon: <FaFacebook size={16} />, label: "Facebook", url: "https://facebook.com" },
              { icon: <FaInstagram size={16} />, label: "Instagram", url: "https://instagram.com" }
            ].map((social, index) => (
              <motion.a 
                key={social.label}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-800/70 text-primary-300 hover:text-white hover:bg-primary-700 transition-colors border border-primary-700 hover:border-primary-500"
                aria-label={social.label}
                whileHover={{ y: -2, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.5 + (index * 0.1), duration: 0.3 }
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;