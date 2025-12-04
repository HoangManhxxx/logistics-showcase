import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  const features = [
    "Vận chuyển toàn quốc 24/7",
    "Đội xe hiện đại 100+ phương tiện",
    "Bảo hiểm hàng hóa 100%",
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Xe vận tải container"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6 animate-fade-in">
            🚚 Đối tác vận tải tin cậy của bạn
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Dịch Vụ Vận Tải
            <span className="block text-gradient">Chuyên Nghiệp</span>
            Trên Toàn Quốc
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Chuyên vận chuyển container nội địa, hàng siêu trường siêu trọng, 
            thiết bị máy móc từ Nam ra Bắc và ngược lại với giá cạnh tranh nhất.
          </p>

          {/* Features */}
          <ul className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="tel:0901234567">
              <Button size="lg" className="btn-accent text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Gọi báo giá ngay
              </Button>
            </a>
            <Link to="/dich-vu">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Xem dịch vụ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
