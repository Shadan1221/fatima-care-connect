import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-first approach with personalized attention"
    },
    {
      icon: Shield,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and infrastructure"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified doctors and dedicated staff"
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description: "Years of quality healthcare service in Bareilly"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            About Fatima Hospital
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 md:p-10 shadow-lg border-accent/20">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fatima Hospital, located in the heart of Bareilly, is a trusted healthcare institution 
              specializing in <span className="font-semibold text-secondary">Surgery and Maternity Care</span>. 
              With modern facilities, compassionate staff, and expert doctors, we are committed to providing 
              quality medical care with a patient-first approach.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to deliver exceptional healthcare services that combine medical excellence 
              with genuine compassion, ensuring every patient receives personalized attention and the 
              highest standard of care.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-accent/20"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
