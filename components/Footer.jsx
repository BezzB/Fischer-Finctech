import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

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
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/Fischerlogo.png" 
                alt="Fischer Telesec Logo" 
                width={180} 
                height={45} 
                className="object-contain bg-white p-2 rounded-md"
              />
            </Link>
            <p className="text-primary-200 mb-6 max-w-md">
              Fischer Telesec is a leading provider of telecommunications and IT solutions, 
              delivering innovative technology services to businesses across East Africa.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <p className="text-primary-100">123 Business Park, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-primary-400 mr-3" />
                <a href="tel:+254724612514" className="text-primary-100 hover:text-white transition-colors">
                  +254 724 612 514
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a href="mailto:info@fischertelesec.co.ke" className="text-primary-100 hover:text-white transition-colors">
                  info@fischertelesec.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-6 text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-primary-200 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            © {currentYear} Fischer Telesec. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;