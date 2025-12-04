import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import containerYard from "@/assets/container-yard.jpg";
import heavyTransport from "@/assets/heavy-transport.jpg";
import flatbedTruck from "@/assets/flatbed-truck.jpg";
import truckFleet from "@/assets/truck-fleet.jpg";

const services = [
  {
    id: 1,
    title: "Vận chuyển Container nội địa",
    description: "Dịch vụ vận chuyển container từ kho tới kho (Door to Door) tuyến Bắc-Trung-Nam và ngược lại.",
    image: containerYard,
    link: "/dich-vu/container-noi-dia",
  },
  {
    id: 2,
    title: "Hàng siêu trường siêu trọng",
    description: "Vận chuyển hàng hóa kích thước lớn, trọng lượng nặng với đội xe chuyên dụng.",
    image: heavyTransport,
    link: "/dich-vu/sieu-truong-sieu-trong",
  },
  {
    id: 3,
    title: "Vận chuyển hàng công trình",
    description: "Chuyên vận chuyển vật liệu xây dựng, thiết bị máy móc công trình.",
    image: flatbedTruck,
    link: "/dich-vu/hang-cong-trinh",
  },
  {
    id: 4,
    title: "Xe tải vận chuyển",
    description: "Dịch vụ xe tải vận chuyển hàng hóa các loại với đa dạng trọng tải từ 1 tấn đến 30 tấn.",
    image: truckFleet,
    link: "/dich-vu/xe-tai-van-chuyen",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Dịch vụ của chúng tôi</span>
          <h2 className="section-title mt-2">Dịch Vụ Chính</h2>
          <p className="section-subtitle">
            Cung cấp giải pháp vận tải toàn diện với đội xe hiện đại và đội ngũ nhân viên chuyên nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-service group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  Xem thêm
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/dich-vu">
            <Button size="lg" className="btn-primary">
              Xem tất cả dịch vụ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
