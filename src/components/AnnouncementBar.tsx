import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Define a state to toggle between light and dark mode for the announcement bar
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    // Set visible after component mounts for the animation to work
    setIsVisible(true);
  }, []);
  return <div className={cn("py-2 sticky top-0 z-[60] transition-transform duration-500 ease-out overflow-hidden", isVisible ? "translate-x-0" : "-translate-x-full", isLight ? "bg-white text-ukb-darkblue" : "bg-ukb-blue text-white")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between">
          <div className="hidden md:flex items-center">
            
            
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="font-bold">Emergency Plumber 24/7 - Call Now on </span>
                <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
                  07359605766
                </a>
                <span className="mx-8">•</span>
                <span className="font-bold">Leaking Toilet? Burst Pipe? Gas Leak? - Call Now on </span>
                <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
                  07359605766
                </a>
                <span className="mx-8">•</span>
                <span className="font-bold">Same-day plumbing services for urgent repairs - Call Now on </span>
                <a href="tel:07359605766" className={cn("font-bold underline transition-colors", isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue")}>
                  07359605766
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button for light/dark mode */}
      <button onClick={() => setIsLight(!isLight)} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full" aria-label="Toggle announcement bar theme">
        
      </button>
    </div>;
};
export default AnnouncementBar;