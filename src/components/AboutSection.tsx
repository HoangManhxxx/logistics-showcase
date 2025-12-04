import { Link } from "react-router-dom";
import { CheckCircle, Truck, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseImage from "@/assets/warehouse.jpg";

const stats = [
  { icon: Truck, value: "100+", label: "Phương tiện" },
  { icon: Users, value: "1000+", label: "Khách hàng" },
  { icon: Award, value: "10+", label: "Năm kinh nghiệm" },
  { icon: Clock, value: "24/7", label: "Hỗ trợ" },
];

const features = [
  "Đội ngũ lái xe chuyên nghiệp, nhiều năm kinh nghiệm",
  "Hệ thống xe hiện đại, đa dạng trọng tải",
  "Bảo hiểm hàng hóa 100% giá trị",
  "Giám sát hành trình GPS 24/7",
  "Cam kết giao hàng đúng thời gian",
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Về chúng tôi</span>
            <h2 className="section-title mt-2">
              Đối Tác Vận Tải <span className="text-gradient">Tin Cậy</span> Của Bạn
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong ngành vận tải, chúng tôi tự hào là đơn vị 
              hàng đầu cung cấp dịch vụ vận chuyển hàng hóa container, hàng siêu trường 
              siêu trọng trên toàn quốc.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/gioi-thieu">
              <Button size="lg" className="btn-primary">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={warehouseImage}
                alt="Kho bãi hiện đại"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-5 text-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent group-hover:text-primary-foreground" />
                  <div className="text-2xl font-heading font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
