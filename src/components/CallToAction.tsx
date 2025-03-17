
import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ukb-blue/90 to-ukb-darkblue/90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Fast & Reliable Plumbing Services in Southampton
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in delay-100">
            Don't let plumbing problems disrupt your day. Our professional team is just a phone call away.
          </p>
          <a 
            href="tel:+447954719411" 
            className="inline-flex items-center gap-2 bg-white text-ukb-blue font-medium py-3 px-8 rounded-md shadow-button transition-all duration-300 hover:shadow-lg hover:bg-ukb-lightblue animate-fade-in delay-200"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: +44 7954 719411</span>
          </a>
        </div>
      </div>
      
      {/* Diagonal cut at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-24"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
