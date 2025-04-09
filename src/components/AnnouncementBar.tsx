
import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  return (
    <div className="bg-ukb-blue text-white py-2 sticky top-0 z-[60] animate-pulse">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between">
          <div className="hidden md:flex items-center">
            <Phone size={16} className="mr-2" />
            <span className="font-medium">Emergency Plumber 24/7</span>
          </div>
          
          <div className="flex items-center justify-center text-center md:text-right">
            <span className="font-bold">Emergency Plumber 24/7 - Call Now on </span>
            <a href="tel:07359605766" className="ml-1 font-bold underline hover:text-ukb-lightblue transition-colors">
              07359605766
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
