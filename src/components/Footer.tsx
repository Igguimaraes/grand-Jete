import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Grand Jeté Logo" 
              className="w-48 mb-4 brightness-110"
            />
            <p className="text-white/70 leading-relaxed">
              Studio de ballet clássico dedicado à formação artística e técnica 
              de bailarinos de todas as idades. Do primeiro plié ao palco.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#modalidades" className="text-white/70 hover:text-primary transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white/70 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#horarios" className="text-white/70 hover:text-primary transition-colors">
                  Horários
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-white/70 hover:text-primary transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-white/70">(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-white/70">contato@grandjete.com.br</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Studio Grand Jeté por Júlia Pimentel. Todos os direitos reservados.
          </p>
          <a 
            href="#" 
            className="text-white/50 hover:text-primary text-sm transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
