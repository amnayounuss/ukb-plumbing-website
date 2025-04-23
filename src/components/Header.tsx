
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-subtle py-2" : "bg-white py-3"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png"
            alt="Logo"
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "hidden lg:flex items-center gap-6",
            "text-ukb-darkblue"
          )}
        >
          <a href="/" className="font-medium hover:text-ukb-blue transition-colors text-sm">Home</a>
          <a href="/#services" className="font-medium hover:text-ukb-blue transition-colors text-sm">Services</a>
          <a href="/#about" className="font-medium hover:text-ukb-blue transition-colors text-sm">About Us</a>
          <a href="/#contact" className="font-medium hover:text-ukb-blue transition-colors text-sm">Contact</a>
          <a href="/privacy-policy" className="font-medium hover:text-ukb-blue transition-colors text-sm">Privacy Policy</a>
          <a href="/terms-conditions" className="font-medium hover:text-ukb-blue transition-colors text-sm">Terms & Conditions</a>
          <a
            href="tel:07359605766"
            className="flex items-center gap-2 font-medium bg-ukb-blue text-white py-2 px-4 rounded-md hover:bg-ukb-darkblue transition-colors ml-2 text-sm"
          >
            <Phone size={16} />
            <span>07359605766</span>
          </a>
        </nav>

        {/* Tablet Navigation - Simplified */}
        <nav
          className={cn(
            "hidden md:flex lg:hidden items-center gap-4",
            "text-ukb-darkblue"
          )}
        >
          <a href="/" className="font-medium hover:text-ukb-blue transition-colors text-sm">Home</a>
          <a href="/#services" className="font-medium hover:text-ukb-blue transition-colors text-sm">Services</a>
          <a href="/#about" className="font-medium hover:text-ukb-blue transition-colors text-sm">About</a>
          <a
            href="tel:07359605766"
            className="flex items-center gap-1 font-medium bg-ukb-blue text-white py-2 px-3 rounded-md hover:bg-ukb-darkblue transition-colors text-sm"
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
          <button
            className="text-ukb-darkblue p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ukb-darkblue p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile/Tablet Navigation Dropdown */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 flex flex-col transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4 text-center max-h-[calc(100vh-80px)] overflow-y-auto">
          <a href="/" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="/#services" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="/#about" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
          <a href="/#contact" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a href="/privacy-policy" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="font-medium text-lg text-ukb-darkblue py-3 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Terms & Conditions
          </a>
          <a
            href="tel:07359605766"
            className="flex items-center justify-center gap-2 font-medium bg-ukb-blue text-white py-3 px-6 rounded-md my-4"
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
