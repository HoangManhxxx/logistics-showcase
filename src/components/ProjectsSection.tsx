import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import containerYard from "@/assets/container-yard.jpg";
import heavyTransport from "@/assets/heavy-transport.jpg";
import flatbedTruck from "@/assets/flatbed-truck.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
import truckFleet from "@/assets/truck-fleet.jpg";

const projects = [
  {
    id: 1,
    title: "Vận chuyển thiết bị nhà máy điện",
    category: "Siêu trường siêu trọng",
    image: heavyTransport,
  },
  {
    id: 2,
    title: "Container tuyến Bắc - Nam",
    category: "Container nội địa",
    image: containerYard,
  },
  {
    id: 3,
    title: "Vận chuyển vật liệu xây dựng",
    category: "Hàng công trình",
    image: flatbedTruck,
  },
  {
    id: 4,
    title: "Vận chuyển hàng hóa xuất khẩu",
    category: "Container",
    image: heroTruck,
  },
  {
    id: 5,
    title: "Xe tải vận chuyển hàng lẻ",
    category: "Xe tải vận chuyển",
    image: truckFleet,
  },
  {
    id: 6,
    title: "Vận chuyển máy móc công nghiệp",
    category: "Siêu trường siêu trọng",
    image: heavyTransport,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Dự án thực tế</span>
          <h2 className="section-title mt-2">Hình Ảnh Hoạt Động</h2>
          <p className="section-subtitle">
            Một số hình ảnh các dự án vận chuyển mà chúng tôi đã thực hiện
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-lg mt-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <Eye className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/du-an">
            <Button size="lg" className="btn-primary">
              Xem tất cả dự án
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
