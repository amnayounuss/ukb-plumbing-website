
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type BrandLogo = {
  name: string;
  imageUrl: string;
  altText: string;
};

const brands: BrandLogo[] = [
  {
    name: "Worcester",
    imageUrl: "/lovable-uploads/e05bee3d-ac18-44e1-a2e9-4444f7f8d0fa.png",
    altText: "Worcester Accredited Installer logo"
  },
  {
    name: "Glow Worm",
    imageUrl: "/lovable-uploads/8a8f8821-5632-4e6c-80d2-cb46e569845b.png",
    altText: "Glow Worm logo"
  },
  {
    name: "Gas Safe",
    imageUrl: "/lovable-uploads/324ae4ac-bcca-432d-969b-62863e5f87f9.png",
    altText: "Gas Safe Register logo"
  },
  {
    name: "Vaillant",
    imageUrl: "/lovable-uploads/6edbbc26-039a-4f5a-b645-4288b6eef522.png",
    altText: "Vaillant Accredited Installer logo"
  }
];

const BrandCarousel = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      // Restart autoplay on slide change
      autoplayPlugin.current.reset();
    });
  }, [api]);
  
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
          /* Mobile view - carousel with autoplay */
          <Carousel 
            className="w-full max-w-md mx-auto"
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "center",
              loop: true
            }}
          >
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
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default BrandCarousel;
