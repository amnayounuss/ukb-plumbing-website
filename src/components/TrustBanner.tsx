import React from 'react';
import { Shield, Clock, CheckCircle, Award } from 'lucide-react';

const TrustBanner = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Fully Certified",
      description: "Licensed professionals"
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Round the clock service"
    },
    {
      icon: CheckCircle,
      title: "Always On Time",
      description: "Punctual and reliable"
    },
    {
      icon: Award,
      title: "100% Guaranteed",
      description: "Quality assurance"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <point.icon className="h-8 w-8 text-ukb-yellow flex-shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-lg">{point.title}</h3>
                <p className="text-gray-300 text-sm hidden md:block">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;