import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import ServiceSliderPage from "./ServiceSliderPage";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current, nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="hero-section relative h-screen overflow-hidden">
      {SliderData.map((slide, index) => (
        <div
          key={index}
          className={`hero-content absolute inset-0 flex flex-col items-center justify-center px-4 py-8 text-center text-white transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8">
            <div className="text-xl lg:text-2xl font-semibold">
              Fischer Telesec
            </div>
            <div className="text-lg lg:text-xl font-bold">
            Connecting the World with Cutting-Edge Technology
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link href="/services">
                <a className="btn btn-primary py-5">Explore Services</a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-outline py-5">Get a Quote</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <FaArrowCircleLeft
        onClick={prevSlide}
        className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
        size={50}
      />
      <FaArrowCircleRight
        onClick={nextSlide}
        className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
        size={50}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-8 lg:hidden flex items-center justify-center">
        <div className="container mx-auto max-w-md" >
          <h2 className="text-2xl mb-2">Services Highlights</h2>
          <div>
            <ServiceSliderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
