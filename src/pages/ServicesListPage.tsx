
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesList } from '@/data/servicesData';

const ServicesListPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Our Services - UKB Plumbing";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-ukb-lightblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-ukb-darkblue">
            Our Plumbing Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-ukb-darkgray max-w-3xl leading-relaxed">
            We offer comprehensive plumbing services for residential and commercial properties in Southampton and surrounding areas. 
            Our skilled team is available 24/7 to handle all your plumbing needs.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map(service => (
            <Link 
              to={`/services/${service.slug}`} 
              key={service.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-ukb-blue/40 group-hover:bg-ukb-blue/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-ukb-darkblue group-hover:text-ukb-blue transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-ukb-darkgray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesListPage;
