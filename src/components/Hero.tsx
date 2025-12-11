import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background2.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5534988188112"; // Format: country code + number
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre as aulas de ballet no Studio Grand Jeté."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <img
            src={logo}
            alt="Grand Jeté Studio Logo"
            className="w-64 md:w-96 mx-auto mb-8 animate-float"
          />

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Grand Jeté
            <span className="block text-primary mt-2">por Júlia Pimentel</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            Ballet clássico para crianças, jovens e adultos — do primeiro plié
            ao palco.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Aula Experimental pelo WhatsApp
            </Button>

            <Button
              size="lg"
              variant="hero"
              className="px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale pelo WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
