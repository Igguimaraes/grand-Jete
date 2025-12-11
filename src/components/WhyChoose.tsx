import { Award, Users, Thermometer, TrendingUp, Clock } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "Professora Altamente Qualificada",
      description: "Formação profissional e anos de experiência no ensino"
    },
    {
      icon: Users,
      title: "Aulas Personalizadas",
      description: "Atenção individual para cada aluno e seu desenvolvimento"
    },
    {
      icon: Thermometer,
      title: "Estúdio Climatizado e Equipado",
      description: "Ambiente confortável com toda infraestrutura necessária"
    },
    {
      icon: TrendingUp,
      title: "Evolução Real",
      description: "Resultados visíveis desde a primeira semana de aula"
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Turmas em diversos horários para sua comodidade"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o <span className="text-gradient">Grand Jeté</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
