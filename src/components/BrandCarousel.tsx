
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
  altText: string;
};

const brands: BrandLogo[] = [
  {
    name: "Gas Safe",
    imageUrl: "/lovable-uploads/51c7ed96-6162-44c7-b299-6d6435fcc7ef.png",
    altText: "Gas Safe Register logo with Reg No.650452"
  },
  {
    name: "Vaillant",
    imageUrl: "/lovable-uploads/65dc6790-a822-4a44-aaa8-53821ccde0fd.png",
    altText: "Vaillant Accredited Installer logo"
  },
  {
    name: "Worcester",
    imageUrl: "/lovable-uploads/b7323488-e8fc-4752-b967-53f6ce4747b0.png",
    altText: "Worcester Accredited Installer logo"
  },
  {
    name: "Glow Worm",
    imageUrl: "/lovable-uploads/d20dc75c-6c06-4abc-870b-0ba3161eeac8.png",
    altText: "Glow Worm logo"
  }
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
                  alt={brand.altText} 
                  className="h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">{brand.name}</p>
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
                      alt={brand.altText} 
                      className="h-16 object-contain mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">{brand.name}</p>
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
