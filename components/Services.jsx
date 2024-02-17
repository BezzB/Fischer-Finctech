import React from "react";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div
    className=""
         style={{ background: "linear-gradient(to right, #FFA500, #FFD700)" }}
    >
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Services</h1>

      {/* Telecommunications Services Section */}
      <section className="mx-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/telecom_image.jpg"
              alt="Telecommunications Services"
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Telecommunications Services
          </h2>
          <p className="mb-4">
            At Fischer Telesec, we provide comprehensive telecommunications
            solutions to meet your business needs.
          </p>
          <h3 className="text-xl mb-2 font-semibold text-blue-600 flex items-center">
            <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={20}
                width={20}
                className="logo-image"
              />
            </div>
            Wired and Wireless Installations
            
          </h3>

          <ul className="mb-4">
            <li>
              We offer expert installation services for both wired and wireless
              telecommunications systems.
            </li>
          </ul>
          <h3 className="text-xl mb-2 font-semibold text-blue-600 flex items-center">
            <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={30}
                width={30}
                className="logo-image"
              />
            </div>
             Configurations, Activation, and Maintenance
          </h3>
          <ul className="mb-2">
            <li>
              Our team handles the setup, activation, and ongoing maintenance of
              various telecommunications technologies, including fiber, copper,
              wireless, and satellite services.
            </li>
          </ul>
        </div>
      </section>

      {/* Communication Site Maintenance Section */}
      <section className="mx-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-4">
            Communication Site Maintenance
          </h2>
          <p className="mb-4">
            Ensure the reliability and security of your communication sites with
            our comprehensive maintenance services.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-blue-600 flex items-center">
          <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={30}
                width={30}
                className="logo-image"
              />
            </div>
            Tower Maintenance
          </h3>
          <p className="mb-4">
            We provide regular maintenance and inspections for communication
            towers to ensure structural integrity and optimal performance.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-blue-600 flex items-center">
          <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={30}
                width={30}
                className="logo-image"
              />
            </div>
            Power Setup and Maintenance
          </h3>
          <p className="mb-4">
            Our team handles the setup and maintenance of power systems to
            ensure uninterrupted communication operations.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-blue-600 flex items-center">
          <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={30}
                width={30}
                className="logo-image"
              />
            </div>
            Alarm Systems
          </h3>
          <p className="mb-4">
            We install and maintain alarm systems to protect your communication
            sites from unauthorized access and security threats.
          </p>
          <h3 className="text-xl font-semibold mb-2  text-blue-600 flex items-center">
          <div className="mr-2">
              <Image
                src="/check.png"
                alt="logo"
                height={30}
                width={30}
                className="logo-image"
              />
            </div>
            Unified CCTV Surveillance
          </h3>
          <p className="mb-4">
            Implement comprehensive CCTV surveillance systems to monitor and
            secure your communication sites.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/maintenance_image.jpg"
              alt="Communication Site Maintenance"
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className=" mx-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/it-services.jpg"
              alt="IT Services"
              width={500}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">IT Services</h2>
          <p className="mb-4">
            Empower your business with our comprehensive IT services tailored to
            your specific needs.
          </p>
          <ul className="list-disc pl-6 mb-4 ">
            <li>Office-To-Office VPN Setups</li>
            <li>IT Infrastructure Setup and Maintenance</li>
            <li>Wired and Wireless LAN Setup</li>
            <li>LAN and WAN Diagnostics</li>
            <li>Firewall and Server Setup, Diagnostics, and Maintenance</li>
          </ul>
        </div>
      </section>

      {/* Datacenter Services Section */}
      <section className=" mx-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-4">Datacenter Services</h2>
          <p className="mb-4">
            Ensure the reliability and security of your data with our
            comprehensive datacenter services.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Design and Setup</li>
            <li>
              Equipment Supply, Installation, Configuration, and Maintenance
            </li>
            <li>Biometrics and Access Control</li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/datacenter.jpg"
              alt="Datacenter Services"
              width={500}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Management As A Service (MaaS) Section */}
      <section className="mx-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/MaaS.jpg"
              alt="Management As A Service (MaaS)"
              width={500}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Management As A Service (MaaS)
          </h2>
          <p className="mb-4">
            Optimize your office network infrastructure with our management as a
            service offering.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Complete Management of Day-to-Day Office Network Infrastructure
            </li>
            <li>
              Advisory on Turnkey Solutions for Effective Office Automation
            </li>
            <li>Onsite and Offsite Support Services</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
