import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>© 2024 Tech Conference. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-blue-400">Facebook</a>
        <a href="#" className="text-blue-300">Twitter</a>
        <a href="#" className="text-red-400">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
