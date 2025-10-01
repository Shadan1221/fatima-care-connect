import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, MessageSquare, Phone, User } from "lucide-react";

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.department) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "",
      message: ""
    });
  };

  return (
    <section id="enquiry" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Book an Appointment
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in your details and we'll get back to you to confirm your appointment
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-xl border-accent/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Contact Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Department *
                </Label>
                <Select
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="surgery">General Surgery</SelectItem>
                    <SelectItem value="maternity">Maternity Care</SelectItem>
                    <SelectItem value="gynaecology">Gynaecology</SelectItem>
                    <SelectItem value="general">General Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Message / Query
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your concern or preferred appointment time"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Appointment Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
