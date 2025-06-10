
'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ContactSection from '@/components/ContactSection';
import CallToAction from '@/components/CallToAction';
import { servicesList } from '@/data/servicesData';

const ServicePage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceName = params?.serviceName as string;
  
  // Find the service based on the URL slug parameter
  const service = servicesList.find(s => s.slug === serviceName);

  // Redirect to 404 if service not found
  useEffect(() => {
    if (!service && serviceName) {
      router.push('/not-found');
    }
  }, [service, serviceName, router]);

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
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-ukb-darkblue">About {service.title}</h2>
              <p className="text-lg text-ukb-darkgray mb-8">
                Our expert team provides high-quality {service.title.toLowerCase()} services to ensure your plumbing system works efficiently. 
                We use modern tools and techniques to deliver exceptional results every time.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-ukb-darkblue">Why Choose UKB for {service.title}</h3>
              <ul className="list-disc pl-6 mb-8 text-ukb-darkgray space-y-2">
                <li>Available 24/7 for emergency callouts</li>
                <li>Fully qualified and certified plumbers</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Satisfaction guaranteed</li>
                <li>Latest tools and technology</li>
              </ul>
            </div>
          </div>
          <CallToAction />
          <ContactSection />
        </>
      ) : (
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-6 text-ukb-darkblue">Service Not Found</h1>
          <p className="text-lg text-ukb-darkgray mb-8">The service you're looking for doesn't exist. Please check our available services.</p>
          <a href="/services" className="bg-ukb-blue text-white py-3 px-6 rounded-md hover:bg-ukb-darkblue transition-colors">
            View All Services
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ServicePage;
