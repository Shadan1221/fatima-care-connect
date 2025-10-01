import { Card } from "@/components/ui/card";
import { Scissors, Baby, Heart, Activity, Sparkles, Clock } from "lucide-react";

const Specialities = () => {
  const specialities = [
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Expert surgical care with advanced techniques and minimal recovery time"
    },
    {
      icon: Baby,
      title: "Obstetrics & Gynaecology",
      description: "Comprehensive women's health services from adolescence through menopause"
    },
    {
      icon: Heart,
      title: "Maternity & Childcare",
      description: "Complete prenatal, delivery, and postnatal care for mother and baby"
    },
    {
      icon: Activity,
      title: "Reproductive Health",
      description: "Specialized care for fertility, family planning, and reproductive wellness"
    },
    {
      icon: Sparkles,
      title: "Women's Wellness Programs",
      description: "Preventive care, health screenings, and lifestyle guidance"
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical and surgical needs"
    }
  ];

  return (
    <section id="specialities" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Specialities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services delivered with expertise and compassion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specialities.map((speciality, index) => {
            const Icon = speciality.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-accent/20 group"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {speciality.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {speciality.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
