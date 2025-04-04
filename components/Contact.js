import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const form = useRef();
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    company: '',
    service_interest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.user_name.trim()) return 'Please enter your name';
    if (!formData.user_email.trim()) return 'Please enter your email';
    if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) return 'Please enter a valid email address';
    if (!formData.message.trim()) return 'Please enter your message';
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    // Send email if form is valid
    emailjs
      .sendForm('service_dv7wh96', 'template_nf3bs2w', form.current, {
        publicKey: 'bD4Vm_zoa3MYX5QBf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(null);
          form.current.reset(); // Reset form after successful submission
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            company: '',
            service_interest: '',
            message: ''
          });
          toast.success('Your message has been sent successfully. We will get back to you soon!');
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormError('Failed to send message. Please try again later or contact us directly.');
          setIsSubmitting(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-primary-500" />,
      title: 'Phone',
      details: ['+254 724 612 514', '+254 733 123 456'],
      action: 'tel:+254724612514'
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: 'Email',
      details: ['info@fischertelesec.co.ke', 'support@fischertelesec.co.ke'],
      action: 'mailto:info@fischertelesec.co.ke'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: 'Location',
      details: ['Zayed Plaza, New Mombasa-Malindi Road', 'Mombasa, Kenya'],
      action: 'https://maps.google.com/?q=Zayed+Plaza+Mombasa+Kenya'
    },
    {
      icon: <FaClock className="text-primary-500" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      action: null
    }
  ];

  return (
    <div className="bg-neutral-50 relative overflow-hidden">
      {/* Digital background pattern */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating digital elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-primary-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [0, 20, 0], 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-accent-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [0, -30, 0], 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden">
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
        
        {/* Hero content */}
        <div className="relative z-20 py-24 text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block mb-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  Get in Touch
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
                className="text-xl text-primary-100"
              >
                We&apos;re here to answer your questions and discuss how we can help your business succeed
              </motion.p>
            </div>
          </div>
          
          {/* Animated accent lines */}
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
      </section>

      <div className="container-wide relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white backdrop-blur-md bg-opacity-80 rounded-xl shadow-lg overflow-hidden relative"
            >
              {/* Card accent lighting */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
              
              {/* Corner accents */}
              <svg className="absolute top-0 right-0 w-24 h-24 text-primary-500/10" viewBox="0 0 24 24" fill="none">
                <path d="M0,0 L24,0 L24,24 L0,0 Z" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-24 h-24 text-primary-500/5" viewBox="0 0 24 24" fill="none">
                <path d="M0,24 L0,0 L24,24 L0,24 Z" fill="currentColor" />
              </svg>
              
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-primary-900 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                    Contact Information
                  </span>
                  <div className="h-px flex-grow ml-4 bg-gradient-to-r from-primary-200 to-transparent"></div>
                </h2>
                <p className="text-neutral-600 mb-8">
                  Reach out to us through any of these channels or fill out the form, and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-7">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex group"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm border border-primary-100 group-hover:border-primary-300 transition-colors duration-300">
                          <div className="absolute inset-0 rounded-full bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                          {item.icon}
                        </div>
                        <motion.div 
                          className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-primary-400/30 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-neutral-600">{detail}</p>
                        ))}
                        {item.action && (
                          <motion.a 
                            href={item.action} 
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 inline-flex items-center space-x-1 group/link"
                            target={item.action.startsWith('http') ? '_blank' : undefined}
                            rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            whileHover={{ x: 3 }}
                          >
                            <span>{item.title === 'Location' ? 'View on map' : `Contact via ${item.title.toLowerCase()}`}</span>
                            <FaArrowRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white backdrop-blur-md bg-opacity-80 rounded-xl shadow-lg overflow-hidden relative"
            >
              {/* Digital accent lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-500"></div>
              
              {/* Corner accents */}
              <svg className="absolute top-0 left-0 w-20 h-20 text-primary-500/5" viewBox="0 0 20 20" fill="none">
                <path d="M0,0 L20,0 L0,20 L0,0 Z" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-20 h-20 text-primary-500/5" viewBox="0 0 20 20" fill="none">
                <path d="M20,20 L0,20 L20,0 L20,20 Z" fill="currentColor" />
              </svg>
              
              {/* Digital circuit background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="formGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20,0 L0,0 0,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
                    <circle cx="5" cy="5" r="0.5" fill="currentColor" />
                    <circle cx="15" cy="15" r="0.5" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#formGrid)" />
                </svg>
              </div>
              
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-primary-900 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                    Send Us a Message
                  </span>
                  <div className="h-px flex-grow ml-4 bg-gradient-to-r from-primary-200 to-transparent"></div>
                </h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below, and we&apos;ll get back to you within 24 hours.
                </p>
                
                {formError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {formError}
                    </div>
                  </motion.div>
                )}
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="user_name" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white"
                          placeholder="John Doe"
                          required
                        />
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="user_email" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          value={formData.user_email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white"
                          placeholder="john@example.com"
                          required
                        />
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="user_phone" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="user_phone"
                          id="user_phone"
                          value={formData.user_phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white"
                          placeholder="+254 7XX XXX XXX"
                        />
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white"
                          placeholder="Your Company"
                        />
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="service_interest" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Service Interest *
                      </label>
                      <div className="relative">
                        <select
                          name="service_interest"
                          id="service_interest"
                          value={formData.service_interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white appearance-none"
                          required
                        >
                          <option value="">Select a Service</option>
                          <option value="telecom">Telecommunications</option>
                          <option value="it_solutions">IT Solutions</option>
                          <option value="both">Both</option>
                        </select>
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white/50 focus:bg-white"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                      <div className="absolute top-0 left-0 h-full w-0.5 bg-primary-500 scale-y-0 origin-bottom group-focus-within:scale-y-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative overflow-hidden btn bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-primary-300/30 flex items-center gap-2 group transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button accent lighting */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                      </div>
                      
                      <FaPaperPlane className={`text-sm ${isSubmitting ? '' : 'group-hover:-translate-y-1 group-hover:translate-x-1'} transition-transform duration-300`} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;