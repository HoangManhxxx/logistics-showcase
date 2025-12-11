import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, MessageCircle } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const LienHe = () => {
  return (
    <>
      <Helmet>
        <title>Liên hệ | Vận Tải Hoàng Phong - Hotline: 0974 819 846</title>
        <meta name="description" content="Liên hệ Vận Tải Hoàng Phong để được tư vấn và báo giá dịch vụ vận chuyển container, hàng siêu trường siêu trọng. Hotline: 0974 819 846" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Banner */}
          <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0">
              <img src={heroTruck} alt="Liên hệ vận tải" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay" />
            </div>
            <div className="container mx-auto relative text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Liên Hệ Với Chúng Tôi
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Hãy liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12 bg-card">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
                <div className="bg-card rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Hotline</h3>
                  <a href="tel:0974819846" className="text-accent font-semibold text-lg hover:text-primary">
                    0974 819 846
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Email</h3>
                  <a href="mailto:hoangphong.vthp@gmail.com" className="text-muted-foreground hover:text-accent">
                    hoangphong.vthp@gmail.com
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Địa chỉ</h3>
                  <p className="text-muted-foreground text-sm">
                    Lô 12, 33/275 Đông Khê, phường Gia Viên, TP.Hải Phòng
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Giờ làm việc</h3>
                  <p className="text-muted-foreground text-sm">
                    T2-T6: 8AM-5PM<br />T7: 8AM-12PM
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <ContactForm />

          {/* Map */}
          <section className="bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6!2d106.6756!3d20.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a9c3a8c7f1d%3A0x5b0f3c8d9e1f2a3b!2zxJDDtG5nIEtow6osIEdpYSBWacOqbiwgTmfDtCBRdXnhu4FuLCBI4bqjaSBQaMOybmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702300000000!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí công ty - 33/275 Đông Khê, Gia Viên, Hải Phòng"
            />
          </section>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default LienHe;
