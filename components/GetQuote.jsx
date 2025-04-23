import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaCheckCircle, FaNetworkWired, FaServer, FaShieldAlt, FaHeadset, FaCloudUploadAlt, FaTools, FaChevronRight } from 'react-icons/fa';

const GetQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: []
  });

  const services = [
    { id: 'telecommunications', name: 'Telecommunications Services', icon: <FaNetworkWired /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <FaServer /> },
    { id: 'data-center', name: 'Data Center Services', icon: <FaShieldAlt /> },
    { id: 'managed-services', name: 'Managed IT Services', icon: <FaHeadset /> },
    { id: 'cloud-services', name: 'Cloud Services', icon: <FaCloudUploadAlt /> },
    { id: 'maintenance', name: 'Maintenance & Support', icon: <FaTools /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceToggle = (serviceId) => {
    const updatedServices = [...formData.services];
    
    if (updatedServices.includes(serviceId)) {
      // Remove service if already selected
      const index = updatedServices.indexOf(serviceId);
      updatedServices.splice(index, 1);
    } else {
      // Add service if not selected
      updatedServices.push(serviceId);
    }
    
    setFormData({
      ...formData,
      services: updatedServices
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.phone.trim()) return 'Please enter your phone number';
    if (formData.services.length === 0) return 'Please select at least one service';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);
    
    // Prepare formatted services list
    const selectedServices = formData.services.map(id => {
      const service = services.find(s => s.id === id);
      return service ? service.name : id;
    }).join(', ');
    
    // Prepare form data for Formspree with explicit reply-to field
    const formspreeData = {
      name: formData.name,
      email: formData.email,
      _replyto: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      services: selectedServices,
      _subject: `Quote Request: ${formData.name} - ${selectedServices}`
    };
    
    try {
      // Using Formspree API endpoint
      const response = await fetch('https://formspree.io/f/mayrbovd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formspreeData),
      });

      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          services: []
        });
        toast.success('Your quote request has been submitted successfully. We will get back to you soon!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "linear-gradient(to right, #0f2b4a, #1e4976)",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            padding: "16px",
            fontSize: "16px"
          },
          progressStyle: { background: "#00b4d8" },
          icon: "🎉"
        });
      } else {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('Failed to send quote request. Please try again later or contact us directly at info@fischertelesec.co.ke');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-50 pb-20 relative overflow-hidden">
      {/* Digital background elements */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating digital orbs */}
      <motion.div 
        className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [0, 30, 0], 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-accent-500/10 blur-3xl z-0 pointer-events-none"
        animate={{ 
          x: [0, -20, 0], 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden mb-16">
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
        
        {/* Central digital glow effect */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary-400/20 blur-xl z-10 pointer-events-none"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative z-20 py-20 text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block mb-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  Request a Free Quote
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
                className="text-xl text-primary-100 relative z-10"
              >
                Get a customized solution and pricing for your telecommunications and IT needs
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
                  animate={{ width: [20, 80, 20] }}
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
                  animate={{ width: [20, 80, 20] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
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
      </section>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Panel */}
            <div className="bg-primary-900 text-white p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span>Customized solutions tailored to your business needs</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span>Transparent pricing with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span>Expert consultation from certified professionals</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive service packages</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                  <span>24/7 support and maintenance options</span>
                </li>
              </ul>
              
              <div className="mt-10 pt-10 border-t border-primary-800">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-6">If you prefer to speak directly with our team:</p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href="tel:+254725763135" className="hover:text-primary-300 transition-colors">+254 725 763 135</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <a href="mailto:info@fischertelesec.co.ke" className="hover:text-primary-300 transition-colors">info@fischertelesec.co.ke</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Form */}
            <div className="col-span-2 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6 text-primary-900">Tell Us About Your Project</h2>
              
              {formError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                  {formError}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field to prevent spam - should remain empty */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+254 7XX XXX XXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">
                    Services You&apos;re Interested In *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-neutral-300 hover:border-primary-300'
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <div className={`mr-3 ${formData.services.includes(service.id) ? 'text-primary-600' : 'text-neutral-500'}`}>
                          {service.icon}
                        </div>
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your project requirements and any specific needs..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Quote'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
