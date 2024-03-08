import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import your preferred slider library

const PartnersPage = () => {
  // Sample partner data
  const partnerImages = [
    "/images1.png",
    "/images2.png",
    "/images3.webp",
    "/images4.jpeg",
    "/keen.jpeg",
    "/Securex.png",
    "/chai.jpeg",
    "/fibrant.jpeg",
    "/green.jpg",
    // Add more partner images as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Partners</h1>
      
      {/* Grid layout for smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 justify-center">
  {partnerImages.map((image, index) => (
    <div key={index} className="flex justify-center">
      <Image
        src={image}
        alt={`Partner ${index}`}
        width={300} // Adjust the width as needed
        height={110} // Adjust the height as needed
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default PartnersPage;
