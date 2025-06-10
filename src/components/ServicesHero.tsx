
import React from 'react';
import { cn } from '@/lib/utils';

interface ServicesHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServicesHero = ({ title, description, image }: ServicesHeroProps) => {
  return (
    <div className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-ukb-lightblue">
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ukb-blue/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-ukb-darkblue leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-ukb-darkgray max-w-3xl mb-6 sm:mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="/booking" 
              className={cn(
                "text-center bg-ukb-blue text-white py-3 px-6 rounded-md text-sm sm:text-base",
                "hover:bg-ukb-darkblue transition-colors duration-300"
              )}
            >
              Book This Service
            </a>
            <a 
              href="tel:07359605766" 
              className={cn(
                "text-center bg-white text-ukb-blue py-3 px-6 rounded-md border border-ukb-blue text-sm sm:text-base",
                "hover:bg-ukb-lightblue transition-colors duration-300"
              )}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
