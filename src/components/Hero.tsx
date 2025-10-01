import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const scrollToEnquiry = () => {
    const element = document.querySelector("#enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fade-in">
            <Heart className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-medium">Trusted Healthcare Since Years</span>
          </div>
          
          {/* Centered Logo */}
          <div className="mb-6 animate-fade-in">
            <img src={logo} alt="Fatima Hospital Logo" className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto shadow-lg" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Fatima Hospital, Bareilly
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white/95 animate-fade-in">
            Surgery & Maternity Centre
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Compassionate Care, Trusted Expertise
          </p>
          
          <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto animate-fade-in">
            Your health and well-being are our top priorities. Experience world-class medical care 
            with a personal touch in the heart of Bareilly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToEnquiry}
              className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg gap-2 text-base px-8 py-6"
            >
              Make an Appointment
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              onClick={() => window.open("tel:+911234567890")}
              className="bg-secondary text-white hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg text-base px-8 py-6"
            >
              Call Us Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5000+", label: "Happy Patients" },
              { number: "24/7", label: "Emergency Care" },
              { number: "100%", label: "Patient Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-in:nth-child(2) { animation-delay: 0.2s; }
        .animate-fade-in:nth-child(3) { animation-delay: 0.3s; }
        .animate-fade-in:nth-child(4) { animation-delay: 0.4s; }
        .animate-fade-in:nth-child(5) { animation-delay: 0.5s; }
        .animate-fade-in:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero;
