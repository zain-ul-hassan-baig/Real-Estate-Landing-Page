import React, { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const propertyImages = [
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % propertyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[30vh] sm:h-[90vh] md:h-screen">
      {/* Responsive Background Image */}
      <div className="absolute inset-0">
        <img
          src={propertyImages[currentSlide]}
          alt="Property"
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
        />
      </div>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Beautiful Property
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Discover your next home with us
        </p>
        {/* Buttons */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-white text-black p-2 sm:p-3 md:p-4 rounded-full shadow-lg"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black p-2 sm:p-3 md:p-4 rounded-full shadow-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
