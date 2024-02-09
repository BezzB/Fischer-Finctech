import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ServicesData } from "./ServicesData";

const ServiceSliderPage = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const currentService = ServicesData[currentServiceIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Advance to the next service
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === ServicesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto lg:hidden">
      <div className="service-slide active">
        <div className="flex items-center justify-start">
          <div>
            <Image
              src="/check.png"
              alt="logo"
              height={50}
              width={70}
              className="logo-image"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{currentService.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSliderPage;
