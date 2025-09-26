
import { useEffect, useRef } from 'react';
import * as React from "react";
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef<NodeJS.Timeout>();

  const images = [
    "/lovable-uploads/produtos novos/839157-img_4792.png",
    "/lovable-uploads/produtos novos/839157-img_4793.png",
    "/lovable-uploads/produtos novos/839157-img_4794.png",
    "/lovable-uploads/produtos novos/839157-img_4795.png",
    "/lovable-uploads/produtos novos/839157-img_4796.png",
    "/lovable-uploads/produtos novos/839157-img_4797.png",
    "/lovable-uploads/produtos novos/839157-img_4799.png",
    "/lovable-uploads/produtos novos/839157-img_4800.png",
    "/lovable-uploads/produtos novos/839157-img_4801.png",
    "/lovable-uploads/produtos novos/839157-img_4803.png",
    "/lovable-uploads/produtos novos/839157-img_4804.png",
    "/lovable-uploads/produtos novos/839157-img_4805.png",
    "/lovable-uploads/produtos novos/839157-img_4806.png",
    "/lovable-uploads/produtos novos/839157-img_4808.png",
    "/lovable-uploads/produtos novos/839157-img_4809.png",
    "/lovable-uploads/produtos novos/839157-img_4810.png",
    "/lovable-uploads/produtos novos/839157-img_4811.png",
    "/lovable-uploads/produtos novos/839157-img_4812.png",
    "/lovable-uploads/produtos novos/839157-img_4814.png",
    "/lovable-uploads/produtos novos/839157-img_4815.png",
    "/lovable-uploads/produtos novos/839157-img_4816.png",
    "/lovable-uploads/produtos novos/839157-img_4818.png",
    "/lovable-uploads/produtos novos/839157-img_4819.png",
    "/lovable-uploads/produtos novos/839157-img_4820.png",
    "/lovable-uploads/produtos novos/839157-img_4821.png",
    "/lovable-uploads/produtos novos/839157-img_4822.png",
    "/lovable-uploads/produtos novos/839157-img_4823.png",
    "/lovable-uploads/produtos novos/839157-img_4824.png",
    "/lovable-uploads/produtos novos/839157-img_4825.png",
    "/lovable-uploads/produtos novos/839157-img_4826.png",
    "/lovable-uploads/produtos novos/839157-img_4828.png",
    "/lovable-uploads/produtos novos/839157-img_4831.png",
    "/lovable-uploads/produtos novos/839157-img_4832.png",
    "/lovable-uploads/produtos novos/839157-img_4833.png",
    "/lovable-uploads/produtos novos/839157-img_4834.png",
    "/lovable-uploads/produtos novos/839157-img_4835.png",
    "/lovable-uploads/produtos novos/839157-img_4836.png",
    "/lovable-uploads/produtos novos/839157-img_4837.png",
    "/lovable-uploads/produtos novos/839157-img_4838.png",
    "/lovable-uploads/produtos novos/839157-img_4839.png",
    "/lovable-uploads/produtos novos/839157-img_4840.png",
    "/lovable-uploads/produtos novos/839157-img_4841.png",
    "/lovable-uploads/produtos novos/839157-img_4842.png",
    "/lovable-uploads/produtos novos/839157-img_4843.png",
    "/lovable-uploads/produtos novos/839157-img_4844.png",
    "/lovable-uploads/produtos novos/839157-img_4845.png",
    "/lovable-uploads/produtos novos/839157-img_4846.png",
    "/lovable-uploads/produtos novos/839157-img_4847.png",
    "/lovable-uploads/produtos novos/839157-img_4848.png",
    "/lovable-uploads/produtos novos/839157-img_4849.png",
    "/lovable-uploads/produtos novos/839157-img_4850.png",
    "/lovable-uploads/produtos novos/839157-img_4851.png",
    "/lovable-uploads/produtos novos/839157-img_4852.png",
    "/lovable-uploads/produtos novos/839157-img_4853.png",
    "/lovable-uploads/produtos novos/839157-img_4854.png",
    "/lovable-uploads/produtos novos/839157-img_4855.png",
    "/lovable-uploads/produtos novos/839157-img_4856.png",
    "/lovable-uploads/produtos novos/839157-img_4857.png",
    "/lovable-uploads/produtos novos/839157-img_4858.png",
    "/lovable-uploads/produtos novos/839157-img_4859.png",
    "/lovable-uploads/produtos novos/839157-img_4860.png",
    "/lovable-uploads/produtos novos/839157-img_4861.png",
    "/lovable-uploads/produtos novos/839157-img_4862.png",
    "/lovable-uploads/produtos novos/839157-img_4863.png",
    "/lovable-uploads/produtos novos/839157-img_4864.png",
    "/lovable-uploads/produtos novos/839157-img_4865.png",
    "/lovable-uploads/produtos novos/839157-img_4866.png",
    "/lovable-uploads/produtos novos/839157-img_4867.png",
    "/lovable-uploads/produtos novos/839157-img_4868.png",
    "/lovable-uploads/produtos novos/839157-img_4869.png",
    "/lovable-uploads/produtos novos/839157-img_4870.png",
    "/lovable-uploads/produtos novos/839157-img_4871.png",
    "/lovable-uploads/produtos novos/839157-img_4872.png",
    "/lovable-uploads/produtos novos/839157-img_4873.png",
    "/lovable-uploads/produtos novos/839157-img_4874.png",
    "/lovable-uploads/produtos novos/839157-img_4875.png",
    "/lovable-uploads/produtos novos/839157-img_4876.png",
    "/lovable-uploads/produtos novos/839157-img_4877.png",
    "/lovable-uploads/produtos novos/839157-img_4878.png",
    "/lovable-uploads/produtos novos/839157-img_4879.png",
    "/lovable-uploads/produtos novos/839157-img_4880.png",
    "/lovable-uploads/produtos novos/839157-img_4881.png",
    "/lovable-uploads/produtos novos/839157-img_4882.png",
    "/lovable-uploads/produtos novos/839157-img_4884.png",
    "/lovable-uploads/produtos novos/839157-img_4886.png",
    "/lovable-uploads/produtos novos/839157-img_4887.png",
    "/lovable-uploads/produtos novos/839157-img_4888.png",
    "/lovable-uploads/produtos novos/839157-img_4889.png",
    "/lovable-uploads/produtos novos/839157-img_4890.png",
    "/lovable-uploads/produtos novos/839157-img_4891.png",
    "/lovable-uploads/produtos novos/img_4506.png",
    "/lovable-uploads/produtos novos/img_4798.png",
    "/lovable-uploads/produtos novos/img_4802.png",
    "/lovable-uploads/produtos novos/img_4804.png",
    "/lovable-uploads/produtos novos/img_4807.png",
    "/lovable-uploads/produtos novos/img_4813.png",
    "/lovable-uploads/produtos novos/img_4817.png",
    "/lovable-uploads/produtos novos/img_4827.png",
    "/lovable-uploads/produtos novos/img_4829.png",
    "/lovable-uploads/produtos novos/img_4830.png",
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
            <Link to="/produtos">
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
