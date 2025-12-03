import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import { Eye } from "lucide-react";
import containerYard from "@/assets/container-yard.jpg";
import heavyTransport from "@/assets/heavy-transport.jpg";
import warehouse from "@/assets/warehouse.jpg";
import flatbedTruck from "@/assets/flatbed-truck.jpg";
import craneService from "@/assets/crane-service.jpg";
import heroTruck from "@/assets/hero-truck.jpg";

const projects = [
  {
    id: 1,
    title: "Vận chuyển turbine nhà máy điện gió",
    category: "Siêu trường siêu trọng",
    location: "Ninh Thuận - Bình Thuận",
    description: "Vận chuyển và lắp đặt 20 turbine gió từ cảng Cát Lái đến nhà máy điện gió.",
    image: heavyTransport,
  },
  {
    id: 2,
    title: "Container tuyến HCM - Hà Nội",
    category: "Container nội địa",
    location: "TP.HCM - Hà Nội",
    description: "Hợp đồng vận chuyển 500 container/tháng cho tập đoàn thương mại điện tử.",
    image: containerYard,
  },
  {
    id: 3,
    title: "Kho logistics KCN Long Hậu",
    category: "Cho thuê kho bãi",
    location: "Long An",
    description: "Cho thuê 5.000m² kho hàng cho doanh nghiệp FDI Nhật Bản.",
    image: warehouse,
  },
  {
    id: 4,
    title: "Vận chuyển VLXD dự án Metro",
    category: "Hàng công trình",
    location: "TP.HCM",
    description: "Cung cấp dịch vụ vận chuyển thép, bê tông đúc sẵn cho dự án Metro Line 1.",
    image: flatbedTruck,
  },
  {
    id: 5,
    title: "Cẩu lắp đặt cầu trục 50T",
    category: "Dịch vụ cẩu",
    location: "Bình Dương",
    description: "Cẩu và lắp đặt cầu trục 50 tấn tại nhà máy sản xuất thép.",
    image: craneService,
  },
  {
    id: 6,
    title: "Vận chuyển máy móc nhà máy",
    category: "Container",
    location: "Đồng Nai",
    description: "Di dời toàn bộ máy móc thiết bị cho nhà máy sản xuất linh kiện điện tử.",
    image: heroTruck,
  },
  {
    id: 7,
    title: "Vận chuyển thiết bị y tế",
    category: "Container nội địa",
    location: "Hà Nội",
    description: "Vận chuyển máy MRI và CT Scanner cho bệnh viện quốc tế.",
    image: containerYard,
  },
  {
    id: 8,
    title: "Cẩu lắp đặt cột thép viễn thông",
    category: "Dịch vụ cẩu",
    location: "Toàn quốc",
    description: "Hợp đồng cẩu lắp 200 cột viễn thông 5G trên toàn quốc.",
    image: craneService,
  },
  {
    id: 9,
    title: "Kho hàng lạnh nông sản",
    category: "Cho thuê kho bãi",
    location: "Đà Lạt",
    description: "Cho thuê kho lạnh 2.000m² bảo quản rau củ quả xuất khẩu.",
    image: warehouse,
  },
];

const categories = ["Tất cả", "Container nội địa", "Siêu trường siêu trọng", "Cho thuê kho bãi", "Hàng công trình", "Dịch vụ cẩu"];

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
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground first:bg-primary first:text-primary-foreground"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                          <Eye className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
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
