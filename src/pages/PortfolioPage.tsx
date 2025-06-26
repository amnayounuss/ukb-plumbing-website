
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PortfolioPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Our Projects Portfolio - UKB Plumbing";
  }, []);

  // Sample project data - you can replace these with your actual project images
  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/49e1cf90-c74d-4037-bcbd-dbe506cc2108.png",
      title: "Bathroom Installation",
      description: "Complete bathroom renovation with modern fixtures"
    },
    {
      id: 2,
      image: "/lovable-uploads/51c7ed96-6162-44c7-b299-6d6435fcc7ef.png",
      title: "Kitchen Plumbing",
      description: "Professional kitchen plumbing installation"
    },
    {
      id: 3,
      image: "/lovable-uploads/56b91e36-9f39-469f-8161-41b0663a3502.png",
      title: "Boiler Installation",
      description: "High-efficiency boiler system installation"
    },
    {
      id: 4,
      image: "/lovable-uploads/59483be5-cae8-4a38-9480-3c06eac1ca64.png",
      title: "Central Heating",
      description: "Complete central heating system upgrade"
    },
    {
      id: 5,
      image: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
      title: "Pipe Installation",
      description: "Professional pipe installation and repair work"
    },
    {
      id: 6,
      image: "/lovable-uploads/65dc6790-a822-4a44-aaa8-53821ccde0fd.png",
      title: "Emergency Repair",
      description: "24/7 emergency plumbing repair service"
    },
    {
      id: 7,
      image: "/lovable-uploads/6edbbc26-039a-4f5a-b645-4288b6eef522.png",
      title: "Commercial Work",
      description: "Large-scale commercial plumbing project"
    },
    {
      id: 8,
      image: "/lovable-uploads/8a8f8821-5632-4e6c-80d2-cb46e569845b.png",
      title: "Heating System",
      description: "Modern heating system installation"
    },
    {
      id: 9,
      image: "/lovable-uploads/a36a03bb-9fb3-44ab-aa46-8ad8ae329ca9.png",
      title: "Water System",
      description: "Water system maintenance and upgrade"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-ukb-lightblue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ukb-darkblue">
                Our Projects
              </h1>
              <div className="text-sm text-ukb-blue mb-4">
                Home → Projects
              </div>
              
              <div className="space-y-4 text-ukb-darkgray">
                <p>
                  At UKB Gas and Heating Ltd, we take pride in delivering top-quality 
                  plumbing and heating solutions across Southampton. Our projects range 
                  from residential boiler installations and central heating upgrades to 
                  large-scale commercial plumbing works.
                </p>
                <p>
                  With a team of Gas Safe registered engineers, we ensure every project 
                  meets the highest standards of safety, efficiency, and reliability.
                </p>
                <p>
                  From emergency plumbing repairs to full heating system installations, 
                  we handle every job with professionalism and attention to detail. We 
                  work closely with homeowners, landlords, and businesses to provide 
                  tailored solutions that suit their needs and budget.
                </p>
                <p>
                  Explore our completed projects to see how we've helped our clients with 
                  expert plumbing and heating services, ensuring comfort, safety, and 
                  long-term performance in every home and business we serve.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/be8fcfc5-921b-4e89-9bf5-4cb130f86b44.png" 
                alt="Plumber with tools" 
                className="max-w-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-ukb-blue font-medium mb-2">Our Awesome Project</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-4">
              Check This Our Showcase of<br />
              Completed Projects
            </h2>
          </div>

          {/* Project Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ukb-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-8 py-3 rounded-md">
              Load More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="py-16 bg-ukb-lightblue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <img 
                src="/lovable-uploads/d20dc75c-6c06-4abc-870b-0ba3161eeac8.png" 
                alt="Professional plumber" 
                className="w-full max-w-sm mx-auto lg:mx-0"
              />
            </div>
            
            <div className="lg:w-2/3 lg:pl-12">
              <p className="text-ukb-blue font-medium mb-2">We Ready 24 Hours!</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ukb-darkblue mb-6">
                Your Best Choice for<br />
                Plumbing & Heating<br />
                Solutions!
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-ukb-blue hover:bg-ukb-darkblue text-white px-6 py-3 rounded-md">
                  Get a Quote
                </Button>
                <div className="flex items-center gap-2">
                  <div className="bg-ukb-blue text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-ukb-darkgray">Emergency Call</p>
                    <p className="font-bold text-ukb-blue">07359605766</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
