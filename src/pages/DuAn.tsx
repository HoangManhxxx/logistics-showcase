import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import { Eye } from "lucide-react";
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

const categories = ["Tất cả", "Container nội địa", "Siêu trường siêu trọng", "Container"];

const DuAn = () => {
  return (
    <>
      <Helmet>
        <title>Dự án thực tế | Hình ảnh hoạt động vận tải</title>
        <meta name="description" content="Hình ảnh các dự án vận tải đã thực hiện: vận chuyển container, hàng siêu trường siêu trọng, cho thuê kho bãi, dịch vụ cẩu." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Banner */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0">
              <img src={heroTruck} alt="Dự án vận tải" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay" />
            </div>
            <div className="container mx-auto relative text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Dự Án Thực Tế
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Một số dự án tiêu biểu mà chúng tôi đã thực hiện cho khách hàng
              </p>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto">
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
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default DuAn;
