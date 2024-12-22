import React from "react";

const MapSection = () => {
  return (
    <section className="py-10 sm:py-16 bg-gray-200">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Location
        </h2>
        {/* Map Container */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
          <iframe
            title="Property Location"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4331940340194!2d144.9537363153166!3d-37.81627907975118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d44e8ee8cdb%3A0x5045675218ce640!2sQueen%20Victoria%20Market!5e0!3m2!1sen!2sus!4v1635186905000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
