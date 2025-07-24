
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink, Heart } from 'lucide-react';

const InstagramSection = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/rmbeauty', '_blank');
  };

  return (
    <section id="instagram" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full text-primary font-medium mb-6">
              <Instagram className="w-4 h-4 mr-2" />
              Siga-nos no Instagram
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Acompanhe Nossos <span className="text-primary">Produtos</span> e <span className="text-accent">Novidades</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fique por dentro dos lançamentos, dicas de beleza e promoções exclusivas. 
              Nossa galeria no Instagram está repleta de inspirações para o seu negócio!
            </p>
          </div>

          <div className="animate-slide-up [animation-delay:300ms] mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Produtos em Destaque</h3>
                <p className="text-muted-foreground text-sm">
                  Veja nossos produtos mais vendidos e novidades em primeira mão
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Dicas de Beleza</h3>
                <p className="text-muted-foreground text-sm">
                  Conteúdos exclusivos sobre tendências e cuidados com a beleza
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Promoções</h3>
                <p className="text-muted-foreground text-sm">
                  Ofertas especiais e condições exclusivas para nossos seguidores
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg group px-8 py-3"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Seguir @rmbeauty
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="animate-slide-up [animation-delay:500ms]">
            <p className="text-muted-foreground text-sm">
              Junte-se a milhares de seguidores que já confiam na RmBeauty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
