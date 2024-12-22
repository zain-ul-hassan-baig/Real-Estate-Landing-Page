import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PropertyDetails from "./components/PropertyDetails";
import MapSection from "./components/MapSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="mt-16">
        <section id="home">
          <HeroSection />
        </section>

        <section id="detail">
          <PropertyDetails />
        </section>

        <section id="location">
          <MapSection />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
