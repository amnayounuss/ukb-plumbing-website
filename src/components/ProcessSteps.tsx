import React from 'react';
import { Phone, MessageCircle, Wrench } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "INQUIRY",
      description: "The process begins with you reaching out to us, either by filling out a request callback form on our website or giving us a call at the provided contact number."
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "FREE CONSULTATION",
      description: "During the phone consultation, our expert will guide you through a series of questions to gather essential information about your plumbing concerns."
    },
    {
      number: 3,
      icon: Wrench,
      title: "PLUMBING",
      description: "Once the plan is agreed upon, our experienced plumbers swing into action. The execution phase involves implementing the solutions with precision and expertise."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plumbing Made Easy: 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            Your First Step to Stress-Free Plumbing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <div className="w-20 h-20 bg-ukb-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  STEP {step.number}: {step.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;