
import React from 'react';
import { Phone } from 'lucide-react';

const ServiceBanner = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-10/12 xl:w-8/12">
            <div className="bg-white rounded-2xl shadow-elevated overflow-hidden animate-fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/dd4e2b99-ddbc-4da0-ab63-2734291ac3f3.png" 
                  alt="UKB Plumbing Services" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
