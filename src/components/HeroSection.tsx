
import React from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ukb-darkblue/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4 animate-fade-in">
            Professional Plumbing Services in Southampton
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow animate-fade-in delay-100">
            Fast, Reliable <span className="text-ukb-lightblue">Plumbing Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in delay-200">
            Expert plumbers available 24/7 for emergency repairs and all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <a 
              href="tel:+447954719411" 
              className="btn-primary flex items-center justify-center gap-2 animate-bounce-subtle"
            >
              <Phone size={20} />
              <span>Call Now: +44 7954 719411</span>
            </a>
            <a 
              href="#services" 
              className="btn-secondary flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
