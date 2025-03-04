import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const Hero = () => {
  const clients = [
    '/safaricomlogo.png',
    '/kenya-power.png',
    '/Securex.png',
    '/logoliquid.png',
    '/ictlogo.png'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-95">
        <div className="absolute inset-0 bg-[url('/pattern-2.png')] opacity-10 mix-blend-soft-light" />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror'
          }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Transforming Business Through
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Empower your enterprise with cutting-edge telecommunications solutions and strategic IT infrastructure
        </motion.p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flexCenter gap-4 mb-16"
        >
          <Button
            type="button"
            title="Get a Free Consultation"
            variant="btn_dark_green"
            className="hover:scale-105 transition-transform"
          />
          <Button
            type="button"
            title="Explore Solutions"
            variant="btn_white_text"
            className="hover:scale-105 transition-transform"
          />
        </motion.div>
      </motion.div>

      {/* Animated Client Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-0 right-0 px-4"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-xl py-6">
          <Slider {...settings} className="client-carousel">
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-16 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={client}
                    alt="Client"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Animated Scrolling Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;
