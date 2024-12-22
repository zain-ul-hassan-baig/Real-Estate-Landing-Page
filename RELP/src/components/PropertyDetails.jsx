import React from "react";

const PropertyDetails = () => {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Property Details
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
          This beautiful 3-bedroom house is located in a prime area with easy access to all amenities.
        </p>
        {/* Property Features */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Item 1 */}
          <li className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg sm:text-xl">3 Bedrooms</h3>
            <p className="text-xs sm:text-sm">Spacious and well-lit rooms</p>
          </li>
          {/* Item 2 */}
          <li className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg sm:text-xl">2 Bathrooms</h3>
            <p className="text-xs sm:text-sm">Modern and elegant bathrooms</p>
          </li>
          {/* Item 3 */}
          <li className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg sm:text-xl">Garden Area</h3>
            <p className="text-xs sm:text-sm">Beautifully landscaped garden</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PropertyDetails;
