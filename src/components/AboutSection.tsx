import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users, Award } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Heart,
      title: "Paixão pela Beleza",
      description: "Nossa missão é oferecer produtos que inspirem confiança e satisfação, pois acreditamos que a beleza transcende a estética."
    },
    {
      icon: Star,
      title: "Qualidade Superior",
      description: "Selecionamos cuidadosamente cada produto, garantindo apenas itens de alta qualidade para nossos parceiros."
    },
    {
      icon: Users,
      title: "Atendimento Excepcional",
      description: "Com a experiência da Mary no setor atacadista, oferecemos um atendimento personalizado e compreensão profunda das necessidades dos clientes."
    },
    {
      icon: Award,
      title: "Parcerias Duradouras",
      description: "Nosso objetivo é construir relações sólidas e frutíferas, sendo parte da jornada de sucesso dos nossos parceiros."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Uma Nova Era no <span className="text-primary">Comércio de Beleza</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg animate-on-scroll">
            Na Distribuidora RM Beauty & Acessórios, estamos animados em dar início a uma nova era no comércio de produtos de beleza e cuidados pessoais. Embora estejamos começando nossa trajetória, nossa fundadora, Mary, traz consigo uma rica experiência no setor atacadista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-card service-card animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <img 
                  src="/lovable-uploads/c1fe7bed-02ff-4ffc-aca3-e3500f3daae4.png" 
                  alt="RmBeauty - Nossa História" 
                  className="w-full h-48 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é clara: oferecer uma seleção de produtos de beleza de alta qualidade que inspirem confiança e satisfação. Afinal, a beleza transcende a estética, e estamos aqui para atendê-los da melhor forma possível!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nosso Compromisso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Convidamos você a explorar nossos produtos e descobrir tudo o que a RM Beauty tem a oferecer. Estamos empolgados para fazer parte da sua jornada no mundo da beleza e esperamos construir relações duradouras e frutíferas.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "Será um prazer tê-lo como nosso parceiro!"
              </p>
              <p className="text-muted-foreground text-sm mt-2">- Equipe RmBeauty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;