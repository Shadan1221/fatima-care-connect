import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Specialities from "@/components/Specialities";
import Enquiry from "@/components/Enquiry";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Specialities />
        <Enquiry />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
