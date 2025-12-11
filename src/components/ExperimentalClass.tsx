import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const ExperimentalClass = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <Sparkles className="h-16 w-16 text-white animate-pulse" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Agende sua Aula Experimental
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Venha conhecer o <strong>Studio Grand Jeté</strong> e descobrir o encanto do ballet. 
            A primeira aula é especial e sem compromisso!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              O que está incluso na aula experimental?
            </h3>
            <ul className="text-white/90 text-lg space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Apresentação do estúdio e metodologia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Aula completa de ballet adaptada ao seu nível</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Conversa com a professora sobre objetivos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">✓</span>
                <span>Orientações sobre uniforme e próximos passos</span>
              </li>
            </ul>
          </div>

          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Agende pelo WhatsApp
          </Button>

          <p className="text-white/70 mt-6 text-sm">
            Resposta rápida • Sem compromisso • Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperimentalClass;
