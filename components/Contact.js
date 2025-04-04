import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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
      icon: <FaPhoneAlt className="text-primary-600" />,
      title: 'Phone',
      details: ['+254 724 612 514', '+254 733 123 456'],
      action: 'tel:+254724612514'
    },
    {
      icon: <FaEnvelope className="text-primary-600" />,
      title: 'Email',
      details: ['info@fischertelesec.co.ke', 'support@fischertelesec.co.ke'],
      action: 'mailto:info@fischertelesec.co.ke'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-600" />,
      title: 'Location',
      details: ['Zayed Plaza, New Mombasa-Malindi Road', 'Mombasa, Kenya'],
      action: 'https://maps.google.com/?q=Zayed+Plaza+Mombasa+Kenya'
    },
    {
      icon: <FaClock className="text-primary-600" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      action: null
    }
  ];

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
              Get in Touch
            </motion.h1>
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
      </section>

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-900">Contact Information</h2>
              <p className="text-neutral-600 mb-8">
                Reach out to us through any of these channels or fill out the form, and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-neutral-600">{detail}</p>
                      ))}
                      {item.action && (
                        <a 
                          href={item.action} 
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 inline-block"
                          target={item.action.startsWith('http') ? '_blank' : undefined}
                          rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.title === 'Location' ? 'View on map' : `Contact via ${item.title.toLowerCase()}`}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary-900">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below, and we&apos;ll get back to you within 24 hours.
              </p>
              
              {formError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                  {formError}
                </div>
              )}
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
    <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      value={formData.user_phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-medium text-neutral-700 mb-1">
                      Service Interest *
                    </label>
                    <select
                      name="service_interest"
                      id="service_interest"
                      value={formData.service_interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="telecom">Telecommunications</option>
                      <option value="it_solutions">IT Solutions</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default ContactUs;