import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ProjectsSection />
          <ContactForm />
    </>
  );
};

export default Index;
