
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-subtle py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png" 
            alt="UKB Plumbing Logo" 
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium text-ukb-darkblue hover:text-ukb-blue transition-colors">Home</a>
          <a href="#about" className="font-medium text-ukb-darkblue hover:text-ukb-blue transition-colors">About Us</a>
          <a href="#services" className="font-medium text-ukb-darkblue hover:text-ukb-blue transition-colors">Services</a>
          <a href="#contact" className="font-medium text-ukb-darkblue hover:text-ukb-blue transition-colors">Contact</a>
          <a 
            href="tel:+447954719411" 
            className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-colors"
          >
            <Phone size={16} />
            <span>07359605766</span>
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-ukb-darkblue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-4 flex flex-col transition-transform duration-300 ease-in-out transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png" 
            alt="UKB Plumbing Logo" 
            className="h-16"
          />
        </div>
        <nav className="flex flex-col space-y-6 text-center">
          <a 
            href="#" 
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#services" 
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="font-medium text-xl text-ukb-darkblue py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="tel:+447954719411" 
            className="flex items-center justify-center gap-2 font-medium bg-ukb-blue text-white py-3 px-6 rounded-md mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={18} />
            <span>07359605766</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
