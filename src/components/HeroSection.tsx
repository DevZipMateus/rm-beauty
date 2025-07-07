import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947641998?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20produtos%20da%20RmBeauty.', '_blank');
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 beauty-gradient opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-beauty-warm/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full text-primary font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                <Sparkles className="w-4 h-4 mr-2" />
                Distribuidora de Produtos de Beleza
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                Distribuindo <span className="text-primary">Beleza</span>, Fortalecendo o Seu <span className="text-accent">Negócio</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Produtos de higiene pessoal, perfumaria, maquiagem e acessórios de alta qualidade para impulsionar suas vendas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group cta-button"
                >
                  Conheça Nossos Produtos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Produtos de alta qualidade
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Atendimento especializado
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Entrega para todo Brasil
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                  <img 
                    src="/lovable-uploads/c1fe7bed-02ff-4ffc-aca3-e3500f3daae4.png" 
                    alt="RmBeauty - Produtos de Beleza" 
                    className="w-full h-64 object-contain mb-6"
                  />
                  <div className="text-center">
                    <h3 className="font-bold text-foreground mb-2 text-xl">Experiência e Qualidade</h3>
                    <p className="text-muted-foreground">
                      Com Mary à frente, oferecemos produtos selecionados e atendimento excepcional no setor de beleza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;