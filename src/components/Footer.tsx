import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Doctors", href: "#doctors" },
    { name: "Specialities", href: "#specialities" },
  ];

  const services = [
    "General Surgery",
    "Maternity Care",
    "Gynaecology",
    "Emergency Care",
  ];

  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fatima Hospital" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">Fatima Hospital</h3>
                <p className="text-sm text-white/80">Surgery & Maternity Centre</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Providing compassionate and quality healthcare services to the community of Bareilly with expertise and dedication.
            </p>
            <a
              href="https://www.instagram.com/fatima_hospital_bly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@fatima_hospital_bly</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  Mustafa Munzil Ajaz Nagar, Bareilly, UP 243006
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/80 hover:text-primary transition-colors text-sm">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@fatimahospitalbly.com" className="text-white/80 hover:text-primary transition-colors text-sm">
                  info@fatimahospitalbly.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Fatima Hospital, Bareilly. All Rights Reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
