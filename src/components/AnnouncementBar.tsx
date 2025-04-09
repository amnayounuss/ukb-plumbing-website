
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

  return (
    <div 
      className={cn(
        "py-2 sticky top-0 z-[60] transition-transform duration-500 ease-out overflow-hidden",
        isVisible ? "translate-x-0" : "-translate-x-full",
        isLight ? "bg-white text-ukb-darkblue" : "bg-ukb-blue text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between">
          <div className="hidden md:flex items-center">
            <Phone size={16} className="mr-2" />
            <span className="font-medium">Emergency Plumber 24/7</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="font-bold">Emergency Plumber 24/7 - Call Now on </span>
                <a href="tel:07359605766" className={cn(
                  "font-bold underline transition-colors",
                  isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue"
                )}>
                  07359605766
                </a>
                <span className="mx-8">•</span>
                <span className="font-bold">Leaking Toilet? Burst Pipe? Gas Leak? - Call Now on </span>
                <a href="tel:07359605766" className={cn(
                  "font-bold underline transition-colors",
                  isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue"
                )}>
                  07359605766
                </a>
                <span className="mx-8">•</span>
                <span className="font-bold">Same-day plumbing services for urgent repairs - Call Now on </span>
                <a href="tel:07359605766" className={cn(
                  "font-bold underline transition-colors",
                  isLight ? "hover:text-ukb-blue" : "hover:text-ukb-lightblue"
                )}>
                  07359605766
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle button for light/dark mode */}
      <button 
        onClick={() => setIsLight(!isLight)} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full"
        aria-label="Toggle announcement bar theme"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isLight ? 
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> : 
            <circle cx="12" cy="12" r="4"></circle>
          }
          {isLight ? null : <path d="M12 2v2"></path>}
          {isLight ? null : <path d="M12 20v2"></path>}
          {isLight ? null : <path d="M4.93 4.93l1.41 1.41"></path>}
          {isLight ? null : <path d="M17.66 17.66l1.41 1.41"></path>}
          {isLight ? null : <path d="M2 12h2"></path>}
          {isLight ? null : <path d="M20 12h2"></path>}
          {isLight ? null : <path d="M6.34 17.66l-1.41 1.41"></path>}
          {isLight ? null : <path d="M19.07 4.93l-1.41 1.41"></path>}
        </svg>
      </button>

      {/* Add CSS for the marquee animation */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
          padding-left: 100%;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @media (max-width: 768px) {
          .marquee-content {
            animation: marquee 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
