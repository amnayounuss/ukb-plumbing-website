
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-ukb-gray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-lg text-ukb-darkgray">
            Have a plumbing issue or question? We're here to help. Reach out to our team for prompt assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-subtle p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-ukb-darkblue">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-ukb-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ukb-darkblue mb-1">Phone</h4>
                    <a href="tel:+447954719411" className="text-ukb-darkgray hover:text-ukb-blue transition-colors">
                      07359605766
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-ukb-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ukb-darkblue mb-1">Email</h4>
                    <a href="mailto:info@ukbplumbing.co.uk" className="text-ukb-darkgray hover:text-ukb-blue transition-colors">
                      info@ukbplumbing.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-ukb-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ukb-darkblue mb-1">Address</h4>
                    <address className="text-ukb-darkgray not-italic">
                      123 High Street<br />
                      Southampton, SO14 2DY<br />
                      United Kingdom
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-ukb-blue rounded-lg p-6 text-white">
                <h4 className="font-semibold text-xl mb-3">Emergency Service</h4>
                <p className="mb-4">We offer 24/7 emergency plumbing services. Don't hesitate to call us any time.</p>
                <a 
                  href="tel:+447954719411" 
                  className="inline-flex items-center gap-2 bg-white text-ukb-blue font-medium py-2 px-4 rounded-md transition-colors hover:bg-ukb-lightblue"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-subtle p-8">
              <h3 className="text-2xl font-semibold mb-6 text-ukb-darkblue">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 animate-fade-in">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-ukb-darkblue font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ukb-blue focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-ukb-darkblue font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ukb-blue focus:border-transparent transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-ukb-darkblue font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ukb-blue focus:border-transparent transition-all"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-ukb-darkblue font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ukb-blue focus:border-transparent transition-all"
                    placeholder="Tell us about your plumbing issue"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
