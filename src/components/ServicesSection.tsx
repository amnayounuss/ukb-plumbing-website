
import React, { useState } from 'react';
import { 
  Droplet, WrenchIcon, Radiation, FlameKindling, 
  PenLineIcon, Bath, ShowerHead, Clock,
  BadgeCheck
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Emergency Plumbing Repairs",
    description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
    icon: <WrenchIcon className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Blocked Drain Cleaning",
    description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
    icon: <PenLineIcon className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 3,
    title: "Water Leak Repairs",
    description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
    icon: <Droplet className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
  },
  {
    id: 4,
    title: "Radiator Repairs",
    description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
    icon: <Radiation className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Boiler Installation & Repair",
    description: "Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation.",
    icon: <FlameKindling className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 6,
    title: "Pipe Repairs & Replacement",
    description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
    icon: <PenLineIcon className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1594741158703-fbd3570b9257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 7,
    title: "Bathroom & Kitchen Plumbing",
    description: "Installation and repair of all bathroom and kitchen fixtures, including sinks, toilets, showers, and appliances.",
    icon: <ShowerHead className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 8,
    title: "24/7 Emergency Call-Out",
    description: "Round-the-clock availability for emergencies, ensuring you never have to wait for urgent plumbing assistance.",
    icon: <Clock className="w-12 h-12 text-ukb-blue" />,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Plumbing Services</h2>
          <p className="text-lg text-ukb-darkgray">
            From emergency repairs to planned installations, our skilled plumbers deliver prompt, reliable solutions for all your plumbing needs.
          </p>
        </div>
        
        {/* Before & After Showcase */}
        <div className="max-w-5xl mx-auto mb-20 overflow-hidden animate-fade-in">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">See The Difference We Make</h3>
            <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto">
              Our expert plumbers transform problematic plumbing situations into clean, functional systems. Check out our recent before and after work.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300">
            <img 
              src="/lovable-uploads/23149db3-347d-471b-8c6e-d1c1e97df011.png" 
              alt="Before and after plumbing work" 
              className="w-full h-auto" 
            />
            <div className="bg-white p-5 flex justify-between items-center">
              <div>
                <h4 className="text-xl font-semibold text-ukb-darkblue">Kitchen Sink Renovation</h4>
                <p className="text-ukb-darkgray">Complete overhaul of damaged plumbing system</p>
              </div>
              <div className="flex items-center text-ukb-blue gap-1">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-medium">Professional Quality</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden shadow-subtle card-hover"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ukb-blue/40 group-hover:bg-ukb-blue/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-ukb-darkblue">{service.title}</h3>
                <p className="text-ukb-darkgray">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
