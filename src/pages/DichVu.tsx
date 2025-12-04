import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import containerYard from "@/assets/container-yard.jpg";
import heavyTransport from "@/assets/heavy-transport.jpg";
import flatbedTruck from "@/assets/flatbed-truck.jpg";
import heroTruck from "@/assets/hero-truck.jpg";

const services = [
  {
    id: 1,
    title: "Vận chuyển Container nội địa",
    description: "Dịch vụ vận chuyển container từ kho tới kho (Door to Door) tuyến Bắc-Trung-Nam và ngược lại bằng đường bộ kết hợp đường biển.",
    image: containerYard,
    features: [
      "Container 20ft, 40ft, 45ft",
      "Vận chuyển từ Cảng đến Cảng (CY-CY)",
      "Vận chuyển từ Kho đến Kho (Door to Door)",
      "Bảo hiểm hàng hóa 100%",
      "Theo dõi hành trình GPS 24/7",
    ],
  },
  {
    id: 2,
    title: "Hàng siêu trường siêu trọng",
    description: "Chuyên vận chuyển hàng hóa có kích thước, trọng lượng vượt quá quy định tiêu chuẩn với đội xe và thiết bị chuyên dụng.",
    image: heavyTransport,
    features: [
      "Xe rơ-moóc lùn, sàn 3-6 trục",
      "Vận chuyển máy móc, thiết bị công nghiệp",
      "Xin giấy phép quá khổ quá tải",
      "Đội ngũ kỹ thuật chuyên nghiệp",
      "Khảo sát tuyến đường miễn phí",
    ],
  },
  {
    id: 3,
    title: "Vận chuyển hàng công trình",
    description: "Vận chuyển vật liệu xây dựng, thiết bị máy móc phục vụ các công trình xây dựng trên toàn quốc.",
    image: flatbedTruck,
    features: [
      "Xe ben, xe tải thùng các loại",
      "Vận chuyển thép, xi măng, cát đá",
      "Xe chuyên dụng chở kết cấu thép",
      "Đúng tiến độ thi công",
      "Báo giá theo chuyến hoặc theo khối lượng",
    ],
  },
  {
    id: 4,
    title: "Xe tải vận chuyển",
    description: "Dịch vụ xe tải vận chuyển hàng hóa các loại với đa dạng trọng tải, phục vụ nhu cầu vận chuyển linh hoạt.",
    image: heroTruck,
    features: [
      "Xe tải từ 1 tấn đến 30 tấn",
      "Xe thùng kín, thùng bạt, thùng lửng",
      "Vận chuyển hàng lẻ, hàng ghép",
      "Giao hàng nhanh trong ngày",
      "Giá cước cạnh tranh",
    ],
  },
];

const DichVu = () => {
  return (
    <>
      <Helmet>
        <title>Dịch vụ vận tải | Container, Siêu trường siêu trọng, Kho bãi</title>
        <meta name="description" content="Dịch vụ vận tải đa dạng: vận chuyển container nội địa, hàng siêu trường siêu trọng, cho thuê kho bãi, dịch vụ cẩu nâng hạ. Hotline: 090 123 45 67" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Banner */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0">
              <img src={heroTruck} alt="Dịch vụ vận tải" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay" />
            </div>
            <div className="container mx-auto relative text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Dịch Vụ Của Chúng Tôi
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Giải pháp vận tải toàn diện cho mọi nhu cầu của doanh nghiệp
              </p>
            </div>
          </section>

          {/* Services List */}
          <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/lien-he">
                      <Button className="btn-primary">
                        Yêu cầu báo giá
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
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

export default DichVu;
