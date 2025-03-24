
import React, { useState } from 'react';
import { 
  Droplet, WrenchIcon, Radiation, FlameKindling, 
  PenLineIcon, Bath, ShowerHead, Clock,
  BadgeCheck, ThumbsUp, Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 1,
    title: "Emergency Plumbing Repairs",
    description: "Fast response to all emergency plumbing issues, including burst pipes, leaks, and fixture failures.",
    icon: <WrenchIcon className="w-12 h-12 text-ukb-blue" />,
    image: "/lovable-uploads/emergency.png"
  },
  {
    id: 2,
    title: "Blocked Drain Cleaning",
    description: "Professional removal of blockages in sinks, toilets, showers, and main drainage systems.",
    icon: <PenLineIcon className="w-12 h-12 text-ukb-blue" />,
    image: "/lovable-uploads/drain.png"
  },
  {
    id: 3,
    title: "Water Leak Repairs",
    description: "Detection and repair of visible and hidden water leaks to prevent property damage and water waste.",
    icon: <Droplet className="w-12 h-12 text-ukb-blue" />,
    image: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg?t=st=1742245177~exp=1742248777~hmac=c3bc85399d2b401c7026c4fd425d875360c2326426d9c6b2d74a402f62bcf331&w=996"
  },
  {
    id: 4,
    title: "Radiator Repairs",
    description: "Expert repair, installation, and maintenance of all types of radiators and heating systems.",
    icon: <Radiation className="w-12 h-12 text-ukb-blue" />,
    image: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334227.jpg?t=st=1742245236~exp=1742248836~hmac=1bef076b643196b2f779e52cf55e6b1b4ea06113f8e8ba3103ad965cac6aa5d8&w=996"
  },
  {
    id: 5,
    title: "Boiler Installation & Repair",
    description: "Professional installation, repair, and servicing of all boiler types to ensure efficient and safe operation.",
    icon: <FlameKindling className="w-12 h-12 text-ukb-blue" />,
    image: "https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55834.jpg?t=st=1742245280~exp=1742248880~hmac=196e62ab5af064c38cde6b119405a6bd13c7f67e78591e74f696156d033644e6&w=996"
  },
  {
    id: 6,
    title: "Pipe Repairs & Replacement",
    description: "Expert repair and replacement of damaged, burst, or corroded pipes using high-quality materials.",
    icon: <PenLineIcon className="w-12 h-12 text-ukb-blue" />,
    image: "https://img.freepik.com/free-photo/plumber-assembling-pipe_1098-17772.jpg?t=st=1742245330~exp=1742248930~hmac=b8276909a92e0208159891b0e10240466e858e292c675cbdfe4aa9257f2a594a&w=996"
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
    image: "https://img.freepik.com/free-vector/24-hour-everyday-service-sticker-design_1017-38078.jpg?t=st=1742245388~exp=1742248988~hmac=5cea157720c7db9f9761c319de5f650f8a5df2f383b754b71daccbc492d94258&w=826"
  }
];

// Client work showcase images
const clientWorkImages = [
  {
    id: 1,
    before: "/lovable-uploads/a36a03bb-9fb3-44ab-aa46-8ad8ae329ca9.png",
    after: "/lovable-uploads/56b91e36-9f39-469f-8161-41b0663a3502.png",
    title: "Kitchen Sink Plumbing",
    description: "Replaced damaged pipes and installed new drainage system"
  },
  {
    id: 2,
    before: "/lovable-uploads/e504c29f-444d-4378-91f6-e6c25dcc50c1.png",
    after: "/lovable-uploads/59483be5-cae8-4a38-9480-3c06eac1ca64.png",
    title: "Under-Sink Renovation",
    description: "Fixed leaking pipes and installed modern connections"
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ukb-darkblue">Comprehensive Plumbing Services</h2>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ukb-darkblue">See The Difference We Make</h3>
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

        {/* Client Work Showcase */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Client Projects
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ukb-darkblue">Real Client Transformations</h3>
            <p className="text-lg text-ukb-darkgray max-w-3xl mx-auto">
              See the quality of our work through these before and after images from actual client projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {clientWorkImages.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="absolute top-0 left-0 z-10 flex">
                    <button 
                      onClick={() => setActiveTab('before')} 
                      className={`px-4 py-2 text-sm font-medium ${activeTab === 'before' ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'}`}
                    >
                      Before
                    </button>
                    <button 
                      onClick={() => setActiveTab('after')} 
                      className={`px-4 py-2 text-sm font-medium ${activeTab === 'after' ? 'bg-green-500 text-white' : 'bg-white/80 text-gray-700'}`}
                    >
                      After
                    </button>
                  </div>
                  <div className="relative h-[300px] overflow-hidden">
                    <img 
                      src={project.before} 
                      alt={`Before: ${project.title}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTab === 'before' ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img 
                      src={project.after} 
                      alt={`After: ${project.title}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTab === 'after' ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-ukb-darkblue">{project.title}</h4>
                      <p className="text-ukb-darkgray">{project.description}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span>Client Approved</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
