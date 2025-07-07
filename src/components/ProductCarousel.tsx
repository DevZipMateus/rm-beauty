import { useEffect, useRef } from 'react';
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef<NodeJS.Timeout>();

  const images = [
    "/lovable-uploads/1751640567044_1_scene_babasoul.png",
    "/lovable-uploads/1751640567388_2_fabulous_003.png", 
    "/lovable-uploads/1751640568011_3_dsc_5264_1_.jpg",
    "/lovable-uploads/1751640568470_4_dsc_5295.jpg",
    "/lovable-uploads/1751640569061_5_dsc_5320.jpg",
    "/lovable-uploads/1751640569493_6_dsc_6662.jpg",
    "/lovable-uploads/1751640570608_7_dsc_6694.jpg",
    "/lovable-uploads/1751640571388_8_dsc_6704.jpg",
    "/lovable-uploads/1751640572152_9_dsc_6716.jpg",
    "/lovable-uploads/1751640572893_10_dsc_6726.jpg",
    "/lovable-uploads/1751640573534_11_dsc_6740_9.jpg",
    "/lovable-uploads/1751640573968_12_dsc_6764.jpg",
    "/lovable-uploads/1751640575213_13_dsc_6775.jpg",
    "/lovable-uploads/1751640576394_14_dsc_6782.jpg",
    "/lovable-uploads/1751640577553_15_dsc_6791.jpg",
    "/lovable-uploads/1751640578589_16_dsc_6823.jpg",
    "/lovable-uploads/1751640579385_17_dsc_6828.jpg",
    "/lovable-uploads/1751640580020_18_dsc_6830.jpg",
    "/lovable-uploads/1751640580713_19_dsc_6838.jpg",
    "/lovable-uploads/1751640581410_20_dsc_6854.jpg",
    "/lovable-uploads/1751640581907_21_dsc_6858.jpg",
    "/lovable-uploads/1751640582453_22_dsc_6893.jpg",
    "/lovable-uploads/1751640583025_23_dsc_5654.jpg",
    "/lovable-uploads/1751640583803_24_dsc_5975.jpg",
    "/lovable-uploads/1751640584561_25_dsc_6282.jpg",
    "/lovable-uploads/1751640585169_26_dsc_6649.jpg",
    "/lovable-uploads/1751640585921_27_dsc_6389.jpg",
    "/lovable-uploads/1751640586885_28_dsc_6414.jpg",
    "/lovable-uploads/1751640587541_29_dsc_6444.jpg",
    "/lovable-uploads/1751640588258_30_dsc_6463.jpg",
    "/lovable-uploads/1751640589069_31_dsc_6499.jpg",
    "/lovable-uploads/1751640589935_32_dsc_6523.jpg",
    "/lovable-uploads/1751640591285_33_dsc_6525.jpg",
    "/lovable-uploads/1751640592667_34_dsc_6549.jpg",
    "/lovable-uploads/1751640593267_35_dsc_6585.jpg",
    "/lovable-uploads/1751640594243_36_dsc_6622.jpg",
    "/lovable-uploads/1751640595154_37_dsc_6627.jpg",
  ];

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [api]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Confira alguns dos produtos de nossa linha de beleza
          </p>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="/produtos">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Produto ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;