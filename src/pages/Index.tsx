import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Testimonials } from "@/components/Testimonials";
import { Hackathons } from "@/components/Hackathons";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Testimonials />
      <Hackathons />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
