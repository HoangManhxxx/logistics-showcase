import { Link } from "react-router-dom";
import { Phone, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Bạn cần báo giá vận chuyển?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất 
            cho nhu cầu vận chuyển của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0974819846">
              <Button size="lg" className="btn-accent text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Gọi ngay: 0974 819 846
              </Button>
            </a>
            <Link to="/lien-he">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">
                <FileText className="w-5 h-5 mr-2" />
                Gửi yêu cầu
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Báo giá miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Phản hồi trong thời gian sớm nhất</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
