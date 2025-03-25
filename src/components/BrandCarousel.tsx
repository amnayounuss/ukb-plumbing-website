
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type BrandLogo = {
  name: string;
  imageUrl: string;
};

const brands: BrandLogo[] = [
  {
    name: "Vaillant",
    imageUrl: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
  },
  {
    name: "Worcester",
    imageUrl: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
  },
  {
    name: "Glow Worm",
    imageUrl: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
  },
  {
    name: "Baxi",
    imageUrl: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
  },
  {
    name: "Ideal",
    imageUrl: "/lovable-uploads/5a6594d5-6019-4ca6-aefe-8ac237e7b78d.png",
  },
];

const BrandCarousel = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ukb-blue mb-3">Trusted Brands We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to be certified installers and service providers for these industry-leading plumbing and heating brands.
          </p>
        </div>
        
        {/* Desktop view - show all brands in a row */}
        {!isMobile ? (
          <div className="hidden md:flex justify-center items-center gap-12 flex-wrap">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-subtle transition-all hover:shadow-elevated"
              >
                <img 
                  src={brand.imageUrl} 
                  alt={`${brand.name} logo`} 
                  className="h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">{brand.name} Accredited Installer</p>
              </div>
            ))}
          </div>
        ) : (
          /* Mobile view - carousel */
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {brands.map((brand, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-subtle">
                    <img 
                      src={brand.imageUrl} 
                      alt={`${brand.name} logo`} 
                      className="h-16 object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">{brand.name} Accredited Installer</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 left-0" />
              <CarouselNext className="relative static transform-none translate-y-0 right-0" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default BrandCarousel;
