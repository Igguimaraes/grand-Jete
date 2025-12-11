import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Onde <span className="text-gradient">Estamos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Visite nosso estúdio e conheça pessoalmente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 hover-lift border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                     R. Maj. Lima, 332 - Centro <br />
                    Sacramento - MG<br />
                    CEP 38190-000
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong></strong> 
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 20h<br />
                    Sábado: Fechado<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Contato</h3>
                  <p className="text-muted-foreground">
                    <strong>WhatsApp:</strong> +55 34 9905-0995<br />
                    <strong>Telefone:</strong> --- ----- ---
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@grandjete.com.br
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-accent/10 p-6 rounded-2xl border-2 border-accent/20">
              <h3 className="font-semibold text-lg text-foreground mb-2">Acessibilidade</h3>
              <p className="text-muted-foreground">
                Nosso estúdio conta com acesso fácil estacionamento.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="bg-muted/50 rounded-2xl overflow-hidden border-2 border-border shadow-lg aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1765426488313!5m2!1spt-BR!2sbr!6m8!1m7!1s77CN-AvzCKPkkQjZ4OXTnQ!2m2!1d-19.86729991375243!2d-47.44277972336049!3f276.01973362367056!4f-0.32716750488832247!5f1.442874747216544" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Studio Grand Jeté"
              ></iframe>


              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
