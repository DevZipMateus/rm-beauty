import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Palette, Droplets, ShoppingBag, Zap } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: Droplets,
      title: "Produtos de Higiene Pessoal",
      description: "Linha completa de produtos para cuidados diários, incluindo sabonetes, shampoos, condicionadores e produtos de limpeza corporal de alta qualidade.",
      features: ["Sabonetes artesanais", "Shampoos e condicionadores", "Produtos íntimos", "Desodorantes"]
    },
    {
      icon: Sparkles,
      title: "Cuidados Pessoais",
      description: "Produtos especializados para cuidados com a pele, cabelo e bem-estar geral, focados na qualidade e eficácia.",
      features: ["Cremes hidratantes", "Produtos anti-idade", "Cuidados capilares", "Tratamentos especiais"]
    },
    {
      icon: Palette,
      title: "Maquiagem",
      description: "Cosméticos de alta qualidade para realçar a beleza natural, com cores vibrantes e longa duração.",
      features: ["Bases e corretivos", "Batons e glosses", "Sombras e delineadores", "Produtos para sobrancelhas"]
    },
    {
      icon: Zap,
      title: "Perfumaria",
      description: "Fragrâncias exclusivas e marcas renomadas para todas as ocasiões, desde perfumes suaves até aromas marcantes.",
      features: ["Perfumes importados", "Fragrâncias nacionais", "Águas de colônia", "Desodorantes perfumados"]
    },
    {
      icon: ShoppingBag,
      title: "Acessórios em Aço Inox",
      description: "Linha premium de acessórios em aço inoxidável, duráveis e elegantes para complementar seu estilo.",
      features: ["Bijuterias premium", "Acessórios para cabelo", "Produtos de manicure", "Itens decorativos"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Produtos de <span className="text-primary">Beleza Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma seleção completa de produtos de beleza e cuidados pessoais para atender todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 bg-background service-card animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Por que escolher a RmBeauty?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Qualidade Garantida</h4>
                <p className="text-muted-foreground text-sm">Produtos selecionados com rigorosos critérios de qualidade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Entrega Rápida</h4>
                <p className="text-muted-foreground text-sm">Logística eficiente para atender todo o Brasil</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Variedade</h4>
                <p className="text-muted-foreground text-sm">Amplo catálogo para todas as necessidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;