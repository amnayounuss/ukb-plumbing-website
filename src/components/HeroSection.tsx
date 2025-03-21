import React from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-blue-200">
      {/* Inline Styles for Animation */}
      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slideInRight 1s ease-out forwards;
          }
        `}
      </style>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
        {/* Left Side: Text Content */}
        <div className="max-w-2xl text-blue-600">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-ukb-darkblue text-sm font-medium rounded-full mb-4 animate-fade-in">
            Professional Plumbing Services in Southampton
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow animate-fade-in delay-100">
            PLUMBING <span className="text-amber-400">TROUBLES?</span><br />
            <span className="text-white">NO PROBLEM!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-500 animate-fade-in delay-200">
            Need plumbing assistance? Look no further!<br />
            Our expert team is here to save the day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <a
              href="tel:+447954719411"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition animate-bounce-subtle"
            >
              <Phone size={20} />
              <span>Call Now: 07359605766</span>
            </a>
            <a
              href="#services"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Side: Relevant Hero Image with Motion */}
        <div className="hidden md:block  mt-16 ml-10 animate-slide-in-right">
          <img
            src="/lovable-uploads/hero.png"
            alt="Cartoon Plumber with Tools"
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;