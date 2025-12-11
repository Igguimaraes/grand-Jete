import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import balletClassico from "@/assets/ballet-classico.jpg";
import balletInfantil from "@/assets/ballet-infantil.jpg";
import balletJuvenil from "@/assets/ballet-juvenil.jpg";
import balletAdulto from "@/assets/ballet-adulto.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import aboutImage from "@/assets/about-julia.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroBackground, alt: "Studio Grand Jeté - Interior" },
    { src: aboutImage, alt: "Professora Júlia Pimentel" },
    { src: balletClassico, alt: "Ballet Clássico" },
    { src: balletInfantil, alt: "Ballet Infantil" },
    { src: balletJuvenil, alt: "Ballet Juvenil" },
    { src: balletAdulto, alt: "Ballet Adulto" }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa <span className="text-gradient">Galeria</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça nosso estúdio e veja a magia do ballet acontecer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Placeholder Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-secondary/10 rounded-2xl p-12 text-center border-2 border-dashed border-primary/30">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Vídeos do Estúdio
            </h3>
            <p className="text-muted-foreground mb-4">
              Espaço reservado para vídeos curtos das aulas e apresentações
            </p>
            <p className="text-sm text-muted-foreground italic">
              (Os vídeos serão adicionados em breve)
            </p>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Galeria"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
