import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PlansSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947641998?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20RmBeauty.', '_blank');
  };

  return (
    <section id="plans" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-primary">Personalizados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para conhecer nossos planos especiais e condições exclusivas para revendedores.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="service-card border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Planos Sob Medida</h3>
              <p className="text-muted-foreground mb-6">
                Desenvolvemos planos personalizados baseados no volume de compras e necessidades específicas do seu negócio.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  "Condições especiais para grandes volumes",
                  "Prazo de pagamento flexível", 
                  "Atendimento personalizado",
                  "Produtos exclusivos",
                  "Suporte técnico especializado"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button"
                size="lg"
              >
                Solicitar Proposta Personalizada
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;