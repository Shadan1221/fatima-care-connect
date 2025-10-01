import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Stethoscope } from "lucide-react";

const Doctors = () => {
  const scrollToEnquiry = () => {
    const element = document.querySelector("#enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Doctor
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and compassionate medical professional dedicated to your health
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-accent/20 hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              {/* Doctor Image - Placeholder gradient */}
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary p-12 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                  <Stethoscope className="h-20 w-20 text-white" />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:w-2/3 p-8 md:p-10">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                    Dr. Darakshan Abbas
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-1">
                    Obstetrician & Gynaecologist
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Medical Director, Fatima Hospital
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">MBBS, DGO (Gold Medalist)</p>
                      <p className="text-sm text-muted-foreground">
                        Academic Excellence in Women's Healthcare
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Specialized Expertise</p>
                      <p className="text-sm text-muted-foreground">
                        Obstetrics, Gynaecology, Maternity Care & Reproductive Health
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With years of experience in women's healthcare, Dr. Abbas specializes in providing 
                  comprehensive care throughout all stages of women's health, from routine check-ups 
                  to complex surgical procedures, with a focus on patient comfort and positive outcomes.
                </p>

                <Button 
                  onClick={scrollToEnquiry}
                  className="w-full md:w-auto"
                >
                  Book Appointment with Dr. Abbas
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
