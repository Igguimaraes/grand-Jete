import Hero from "@/components/Hero";
import About from "@/components/About";
import Modalities from "@/components/Modalities";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import ExperimentalClass from "@/components/ExperimentalClass";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Modalities />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Schedule />
      <ExperimentalClass />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
