
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import pages
import Index from '@/pages/Index';
import ServicesListPage from '@/pages/ServicesListPage';
import ServicePage from '@/pages/ServicePage';
import PortfolioPage from '@/pages/PortfolioPage';
import Booking from '@/pages/Booking';
import NotFound from '@/pages/NotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';

function App() {
  return (
    <ReactQueryProvider>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesListPage />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ReactQueryProvider>
  );
}

export default App;
