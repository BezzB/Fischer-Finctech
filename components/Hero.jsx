import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link' directly

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Image
        src="/telesec1.png" // Replace with your actual hero image
        alt="Telecommunication Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center" // Adjust this line as needed
      />
      <div className="hero-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4 py-8 text-center">
        {/* Add your logo or text here */}
        <h1 className="text-4xl font-bold mb-4 text-white"> We are a Leading Telecommunication Solutions Provider</h1>
        <h2 className="text-2xl font-bold mb-4 text-white">Connecting the World with Cutting-Edge Technology</h2>
        <p className="text-base text-gray-300 mb-8">
          Your trusted partner for innovative telecommunication solutions and seamless connectivity.
        </p>
        {/* Replace with your desired buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link href="/services">
            <a className="btn btn-primary py-5">Explore Services</a>
          </Link>
          <Link href="/contact">
            <a className="btn btn-outline py-5">Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
