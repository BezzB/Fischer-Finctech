import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-4 rounded-full">
              <FaShieldAlt className="text-4xl text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-primary-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Fischer Telesec, we are committed to protecting your privacy and ensuring 
            the security of your personal information.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
        >
          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how Fischer Telesec collects, uses, and protects your personal information when you use our website or services. We respect your privacy and are committed to maintaining the confidentiality of your personal information.
            </p>
            <p className="text-gray-700">
              By accessing or using our website or services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaUserLock className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We collect personal information that you voluntarily provide to us when you interact with our website or services. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Contact information (such as name, email address, phone number)</li>
              <li>Company information (such as company name, job title)</li>
              <li>Technical information (such as IP address, browser type, device information)</li>
              <li>Usage information (such as pages visited, time spent on the site)</li>
              <li>Communication preferences and feedback</li>
            </ul>
            <p className="text-gray-700">
              We may also collect information automatically through cookies and similar technologies. For more information about our use of cookies, please see our Cookie Policy.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">
          We may use the personal information we collect for various purposes, including:
        </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Providing and improving our services</li>
              <li>Communicating with you about our services, promotions, and events</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Processing and fulfilling your requests and transactions</li>
              <li>Personalizing your experience on our website</li>
              <li>Conducting research and analysis to improve our services</li>
              <li>Protecting our rights, property, and safety, and the rights, property, and safety of others</li>
          <li>Complying with legal obligations</li>
        </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We may share your personal information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>With service providers that assist us in providing our services or operating our business</li>
              <li>With business partners for marketing and promotional purposes (with your consent)</li>
              <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, property, and safety, and the rights, property, and safety of others</li>
            </ul>
            <p className="text-gray-700">
              We do not sell, rent, or lease your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700 mb-4">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption of personal data, regular testing and evaluation of the effectiveness of our security measures, and procedures to address any suspected personal data breach.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaUserLock className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct inaccurate or incomplete personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the revised policy will take effect immediately upon posting.
            </p>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy periodically for any updates. Your continued use of our website or services after any changes to this Privacy Policy constitutes your acceptance of the revised policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl text-primary-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about our Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Fischer Telesec</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:info@fischertelesec.co.ke" className="text-primary-600 hover:text-primary-700">info@fischertelesec.co.ke</a></p>
              <p className="text-gray-700">Phone: +254 (0) 722 123 456</p>
            </div>
          </section>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>Last Updated: June 1, 2023</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
