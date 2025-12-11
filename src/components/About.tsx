import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-julia.jpg";

const About = () => {
  const highlights = [
    "Aulas para todas as idades",
    "Ambiente seguro e acolhedor",
    "Técnicas clássicas com metodologia contemporânea",
    "Desenvolvimento corporal, artístico e emocional",
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Júlia Pimentel - Professora de Ballet"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o <span className="text-gradient">Estúdio</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">Studio Grand Jeté</strong>{" "}
              foi fundado pela professora{" "}
              <strong className="text-foreground">Júlia Pimentel</strong>,
              bailarina profissional com formação clássica e anos de experiência
              no ensino do ballet.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa metodologia une a{" "}
              <strong className="text-foreground">
                tradição do ballet clássico
              </strong>{" "}
              com abordagens pedagógicas contemporâneas, proporcionando um
              ambiente onde cada aluno pode desenvolver não apenas sua técnica,
              mas também sua expressão artística e confiança pessoal.
            </p>

            <div className="space-y-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
