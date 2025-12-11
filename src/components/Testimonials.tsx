import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "8 anos",
      text: "Minha filha ama as aulas! Ela se desenvolveu muito e ficou muito mais confiante. A professora Júlia é maravilhosa!",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      age: "32 anos",
      text: "Sempre sonhei em fazer ballet e finalmente realizei esse sonho no Grand Jeté. As aulas são incríveis e me sinto cada dia melhor!",
      rating: 5
    },
    {
      name: "Carla Rodrigues",
      age: "15 anos",
      text: "O estúdio é lindo e as aulas são muito bem estruturadas. Estou evoluindo muito na minha técnica!",
      rating: 5
    },
    {
      name: "Patricia Mendes",
      age: "Mãe de aluna",
      text: "Excelente profissional! Minha filha começou aos 4 anos e hoje, aos 7, já tem uma postura e disciplina admiráveis.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      age: "28 anos",
      text: "Ballet adulto é terapêutico! Me sinto renovada após cada aula. O ambiente é muito acolhedor.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      age: "Pai de aluna",
      text: "Recomendo muito! A evolução da minha filha foi impressionante. Ela ama as aulas e a professora.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem <span className="text-gradient">nossos alunos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de transformação através do ballet
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover-lift border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
