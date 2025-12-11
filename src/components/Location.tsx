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
                    Rua Example, 123 - Centro<br />
                    Cidade - Estado<br />
                    CEP 00000-000
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Ponto de referência:</strong> Próximo ao Shopping Center
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
                    Segunda a Sexta: 8h às 21h<br />
                    Sábado: 8h às 13h<br />
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
                    <strong>WhatsApp:</strong> (00) 00000-0000<br />
                    <strong>Telefone:</strong> (00) 0000-0000
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
                Nosso estúdio conta com acesso para pessoas com mobilidade reduzida e 
                estacionamento conveniado próximo.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="bg-muted/50 rounded-2xl overflow-hidden border-2 border-border shadow-lg aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0660653734724!2d-46.65433308441565!3d-23.561414684682824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
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
