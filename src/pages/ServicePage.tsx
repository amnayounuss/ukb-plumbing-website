
'use client';

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import { servicesList } from '@/data/servicesData';

const ServicePage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  
  // Find the service based on the URL slug parameter
  const service = servicesList.find(s => s.slug === serviceName);

  // Redirect to 404 if service not found
  useEffect(() => {
    if (!service && serviceName) {
      navigate('/not-found');
    }
  }, [service, serviceName, navigate]);

  // Update document title with service name
  useEffect(() => {
    if (service) {
      document.title = `${service.title} - UKB Plumbing Services`;
    }
  }, [service]);

  // Show loading while checking if service exists
  if (!service && serviceName) {
    return null; // Will redirect via the useEffect
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {service ? (
        <>
          <ServicesHero 
            title={service.title}
            description={service.description}
            image={service.image}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-ukb-darkblue">
                About {service.title}
              </h2>
              <p className="text-base sm:text-lg text-ukb-darkgray mb-6 sm:mb-8 leading-relaxed">
                Our expert team provides high-quality {service.title.toLowerCase()} services to ensure your plumbing system works efficiently. 
                We use modern tools and techniques to deliver exceptional results every time.
              </p>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-ukb-darkblue">
                Why Choose UKB for {service.title}
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 mb-6 sm:mb-8 text-ukb-darkgray space-y-1 sm:space-y-2">
                <li className="text-sm sm:text-base">Available 24/7 for emergency callouts</li>
                <li className="text-sm sm:text-base">Fully qualified and certified plumbers</li>
                <li className="text-sm sm:text-base">Transparent pricing with no hidden fees</li>
                <li className="text-sm sm:text-base">Satisfaction guaranteed</li>
                <li className="text-sm sm:text-base">Latest tools and technology</li>
              </ul>
            </div>
          </div>
          <CallToAction />
          <ContactSection />
        </>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-ukb-darkblue">
            Service Not Found
          </h1>
          <p className="text-base sm:text-lg text-ukb-darkgray mb-6 sm:mb-8 max-w-2xl mx-auto">
            The service you're looking for doesn't exist. Please check our available services.
          </p>
          <a 
            href="/services" 
            className="inline-block bg-ukb-blue text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-ukb-darkblue transition-colors text-sm sm:text-base"
          >
            View All Services
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ServicePage;
