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
      <Helmet>
        <title>Vận Tải Việt Nam | Dịch vụ vận chuyển container, hàng siêu trường siêu trọng</title>
        <meta name="description" content="Công ty vận tải hàng đầu Việt Nam chuyên vận chuyển container nội địa, hàng siêu trường siêu trọng, cho thuê kho bãi. Hotline: 090 123 45 67" />
        <meta name="keywords" content="vận tải, vận chuyển container, hàng siêu trường siêu trọng, kho bãi, cẩu nâng hạ" />
        <link rel="canonical" href="https://vantaivietnam.vn" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ProjectsSection />
          <CTASection />
          <ContactForm />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
