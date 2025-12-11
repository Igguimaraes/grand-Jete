import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Schedule = () => {
  const schedules = [
    {
      category: "Ballet Infantil",
      times: ["Terça e Quinta - 15h às 16h", "Sábado - 9h às 10h"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      category: "Ballet Juvenil",
      times: ["Segunda e Quarta - 16h às 17h30", "Sábado - 10h30 às 12h"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      category: "Ballet Adulto",
      times: ["Segunda e Quarta - 19h às 20h30", "Terça e Quinta - 8h às 9h30"],
      color: "bg-secondary/10 text-secondary-foreground border-secondary/20"
    },
    {
      category: "Ballet Clássico (Todos)",
      times: ["Aulas particulares sob agendamento"],
      color: "bg-primary/10 text-primary border-primary/20"
    }
  ];

  return (
    <section id="horarios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Horários</span> das Aulas
          </h2>
          <p className="text-xl text-muted-foreground">
            Encontre o horário perfeito para você
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {schedules.map((schedule, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl border-2 ${schedule.color} animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-serif text-2xl font-bold mb-4">
                {schedule.category}
              </h3>
              <div className="space-y-2">
                {schedule.times.map((time, timeIndex) => (
                  <p key={timeIndex} className="text-base font-medium">
                    {time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Ver Horários Completos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
