import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Produtos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    "/lovable-uploads/Captura de tela de 2025-07-07 11-38-40.png",
    "/lovable-uploads/Captura de tela de 2025-07-07 11-38-53.png",
    "/lovable-uploads/Captura de tela de 2025-07-07 11-39-05.png",
    "/lovable-uploads/Captura de tela de 2025-07-07 11-39-21.png",
    "/lovable-uploads/Captura de tela de 2025-07-07 11-39-30.png",
    "/lovable-uploads/Captura de tela de 2025-07-07 11-39-40.png",
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5517981234748?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20este%20produto.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos de beleza
          </p>
          <div className="mt-8">
            <Button 
              asChild
              variant="outline"
              className="bg-background hover:bg-secondary/50"
            >
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-card rounded-lg shadow-sm border border-border p-4 hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={image} 
                  alt={`Produto ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Produto {index + 1}</h3>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            className="bg-background hover:bg-secondary/50"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
