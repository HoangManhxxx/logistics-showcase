import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/CTASection";
import { CheckCircle, Truck, Users, Award, Target, Eye, Shield } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import heroTruck from "@/assets/hero-truck.jpg";
const stats = [{
  icon: Truck,
  value: "100+",
  label: "Phương tiện vận tải"
}, {
  icon: Users,
  value: "1000+",
  label: "Khách hàng tin tưởng"
}, {
  icon: Award,
  value: "10+",
  label: "Năm kinh nghiệm"
}, {
  icon: Shield,
  value: "100%",
  label: "Bảo hiểm hàng hóa"
}];
const values = [{
  icon: Target,
  title: "Sứ mệnh",
  description: "Cung cấp dịch vụ vận tải chuyên nghiệp, an toàn và hiệu quả, góp phần phát triển ngành logistics Việt Nam."
}, {
  icon: Eye,
  title: "Tầm nhìn",
  description: "Trở thành đơn vị vận tải hàng đầu khu vực, được khách hàng tin tưởng lựa chọn."
}, {
  icon: Award,
  title: "Giá trị cốt lõi",
  description: "Uy tín - Chất lượng - Hiệu quả - Đồng hành cùng khách hàng."
}];
const milestones = [{
  year: "2014",
  event: "Thành lập công ty với 10 xe đầu kéo"
}, {
  year: "2017",
  event: "Mở rộng dịch vụ vận chuyển siêu trường siêu trọng"
}, {
  year: "2020",
  event: "Đạt 50 phương tiện, mở văn phòng tại Hải Phòng"
}, {
  year: "2024",
  event: "100+ phương tiện, 1000+ khách hàng toàn quốc"
}];
const GioiThieu = () => {
  return <>
      <Helmet>
        <title>Giới thiệu | Vận Tải Hoàng Phong - 10 năm kinh nghiệm vận tải</title>
        <meta name="description" content="Giới thiệu về công ty Vận Tải Hoàng Phong - Đơn vị vận tải uy tín với 10+ năm kinh nghiệm, 100+ phương tiện, phục vụ 1000+ khách hàng toàn quốc." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Banner */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0">
              <img src={heroTruck} alt="Vận tải Việt Nam" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay" />
            </div>
            <div className="container mx-auto relative text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Về Chúng Tôi
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                10+ năm kinh nghiệm trong ngành vận tải, phục vụ hàng ngàn khách hàng trên toàn quốc
              </p>
            </div>
          </section>

          {/* About Content */}
          <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">Câu chuyện của chúng tôi</span>
                  <h2 className="section-title mt-2">Đối Tác Vận Tải Tin Cậy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Công ty TNHH DỊch vụ và Vận Tải Hoàng Phong được thành lập từ năm 2014, xuất phát từ niềm đam mê và khát vọng xây dựng một đơn vị vận tải chuyên nghiệp, hiện đại tại Việt Nam.
                    </p>
                    <p>Với đội ngũ hơn 100 nhân viên giàu kinh nghiệm cùng hệ thống xe đa dạng từ 5 tấn đến xe siêu trường siêu trọng, chúng tôi cam kết đáp ứng mọi nhu cầu vận chuyển của khách hàng.</p>
                    <p>
                      Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu, với phương châm 
                      "Uy tín - Chất lượng - Hiệu quả" trong mọi hoạt động.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={warehouseImage} alt="Kho bãi" className="w-full h-[400px] object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => <div key={index} className="text-center text-primary-foreground">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-4xl font-heading font-bold mb-2">{stat.value}</div>
                    <div className="text-primary-foreground/80">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </section>

          {/* Vision, Mission, Values */}
          <section className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Tầm Nhìn & Sứ Mệnh</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((item, index) => <div key={index} className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>)}
              </div>
            </div>
          </section>

          {/* Milestones */}
          <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Cột Mốc Phát Triển</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                {milestones.map((item, index) => <div key={index} className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center font-heading font-bold text-accent-foreground">
                        {item.year}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                    </div>
                    <div className="pt-4">
                      <p className="text-lg">{item.event}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>;
};
export default GioiThieu;