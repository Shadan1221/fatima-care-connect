import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Find Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at our conveniently located facility in Bareilly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-accent/20 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Address</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bareilly - Bisalpur Rd, Mustafa Munzil Ajaz Nagar,<br />
                      Bareilly, Uttar Pradesh 243006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Phone</p>
                    <a 
                      href="tel:+911234567890" 
                      className="text-primary hover:underline"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Email</p>
                    <a 
                      href="mailto:info@fatimahospitalbly.com" 
                      className="text-primary hover:underline"
                    >
                      info@fatimahospitalbly.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-1">Hours</p>
                    <p className="text-muted-foreground text-sm">
                      24/7 Emergency Services<br />
                      OPD: 9:00 AM - 8:00 PM (Daily)
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-accent/20 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-semibold text-secondary mb-3">Need Directions?</h3>
              <p className="text-muted-foreground mb-4">
                We're located on Bareilly-Bisalpur Road, easily accessible from all parts of the city.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=28.362562866734876,79.44985158121668"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <MapPin className="h-4 w-4" />
                Get Directions on Google Maps
              </a>
            </Card>
          </div>

          {/* Google Map */}
          <Card className="overflow-hidden border-accent/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.30173246152782!2d79.44976690587166!3d28.362526108077926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a006b6728b5bf9%3A0x312ae7318d5408e1!2sFatima%20Hospital!5e0!3m2!1sen!2sin!4v1759349365689!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fatima Hospital Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
