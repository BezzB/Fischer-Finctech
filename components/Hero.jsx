import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link' directly

const Hero = () => {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center h-screen overflow-hidden" style={{ height: '55vh' }}>
      <Image
        src="/telesec1.png" // Replace with your actual hero image
        alt="Telecommunication Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center" // Adjust this line as needed
      />
      <div className="hero-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-2 py-2 text-center">
        {/* Add your logo or text here */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"> We are a Leading Telecommunication Solutions Provider</h2>
        
            <Link href="/getaquote">
              <a className="bg-orange-500 text-white px-4 py-2 rounded">
                Get a Quote
              </a>
            </Link>
          
              
      </div>
    </section>
  );
};

export default Hero;
