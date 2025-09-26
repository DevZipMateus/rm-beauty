
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import Header from '@/components/Header';

const Produtos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511916967918?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20este%20produto.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-20">
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
              <div className="aspect-square overflow-hidden rounded-lg mb-4 cursor-pointer bg-muted/10">
                <img 
                  src={image} 
                  alt={`Produto ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(image)}
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

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-background border-border">
            <div className="relative">
              {selectedImage && (
                <div className="flex flex-col">
                  <div className="w-full max-h-[70vh] overflow-hidden flex items-center justify-center bg-muted/10">
                    <img 
                      src={selectedImage} 
                      alt="Produto expandido"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
        
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
