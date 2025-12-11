import { Card, CardContent } from "@/components/ui/card";
import { Users, Baby, Sparkles, Heart } from "lucide-react";
import balletClassico from "@/assets/ballet-classico.jpg";
import balletInfantil from "@/assets/ballet-infantil.jpg";
import balletJuvenil from "@/assets/ballet-juvenil.jpg";
import balletAdulto from "@/assets/ballet-adulto.jpg";

const Modalities = () => {
  const modalities = [
    {
      title: "Ballet Clássico",
      description: "Para todas as idades",
      details: "Foco em técnica, postura e musicalidade",
      image: balletClassico,
      icon: Sparkles,
      color: "bg-primary/10"
    },
    {
      title: "Ballet Infantil",
      description: "Crianças a partir dos 3 anos",
      details: "Aulas lúdicas com base técnica",
      image: balletInfantil,
      icon: Baby,
      color: "bg-accent/10"
    },
    {
      title: "Ballet Juvenil",
      description: "Aperfeiçoamento técnico e força",
      details: "Preparação para nível intermediário e avançado",
      image: balletJuvenil,
      icon: Users,
      color: "bg-secondary/10"
    },
    {
      title: "Ballet Adulto",
      description: "Turmas iniciantes e avançadas",
      details: "Aula terapêutica, técnica e flexibilidade",
      image: balletAdulto,
      icon: Heart,
      color: "bg-primary/10"
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas <span className="text-gradient">Modalidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra a modalidade perfeita para você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modalities.map((modality, index) => {
            const Icon = modality.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={modality.image} 
                    alt={modality.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className={`absolute top-4 right-4 ${modality.color} p-3 rounded-full backdrop-blur-sm`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {modality.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {modality.description}
                  </p>
                  <p className="text-muted-foreground">
                    {modality.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modalities;
