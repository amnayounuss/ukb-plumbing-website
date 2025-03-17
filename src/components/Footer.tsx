
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ukb-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/7dc16efa-a747-4593-ae00-6e7e38c4d44e.png" 
                alt="UKB Plumbing Logo" 
                className="h-16 mb-4"
              />
            </div>
            <p className="mb-6 text-white/80">
              Professional plumbing services in Southampton and surrounding areas. Available 24/7 for all your plumbing needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Emergency Plumbing</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Blocked Drains</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Water Leak Repairs</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Radiator Repairs</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Boiler Services</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-ukb-blue" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+447954719411" className="text-white/80 hover:text-white transition-colors">
                    +44 7954 719411
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-ukb-blue" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@ukbplumbing.co.uk" className="text-white/80 hover:text-white transition-colors">
                    info@ukbplumbing.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-ukb-blue" />
                <div>
                  <p className="font-medium">Address</p>
                  <address className="text-white/80 not-italic">
                    123 High Street<br />
                    Southampton, SO14 2DY
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Video section */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="UKB Plumbing Services" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-center md:text-left">
            &copy; {currentYear} UKB Plumbing. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
