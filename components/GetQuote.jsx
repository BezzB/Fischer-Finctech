import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaNetworkWired, FaServer, FaShieldAlt, FaHeadset, FaCloudUploadAlt, FaTools } from 'react-icons/fa';

const GetQuote = () => {
  const form = useRef();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);
    
    // Prepare form data for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      services: formData.services.map(id => {
        const service = services.find(s => s.id === id);
        return service ? service.name : id;
      }).join(', ')
    };
    
    // Send email
    emailjs
      .send('service_dv7wh96', 'template_nf3bs2w', templateParams, {
        publicKey: 'bD4Vm_zoa3MYX5QBf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(null);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            services: []
          });
          toast.success('Your quote request has been submitted successfully. We will get back to you soon!');
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormError('Failed to send quote request. Please try again later or contact us directly.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="gradient-bg-primary py-20 text-white mb-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Request a Free Quote
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100"
            >
              Get a customized solution and pricing for your telecommunications and IT needs
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container-wide">
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
                    <a href="tel:+254724612514" className="hover:text-primary-300 transition-colors">+254 724 612 514</a>
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
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
