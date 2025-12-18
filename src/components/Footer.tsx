import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

import {ADDRESS, EMAIL, FACEBOOK_URL, PHONE_NUMBER, TIKTOK_URL, WORKING_HOURS} from "@/constants/InformationConsts.ts";
import {Tiktok, } from "@/components/ui/icons.tsx";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vận Tải Hoàng Phong" className="h-14 w-auto bg-primary-foreground rounded-lg p-1" />
              <div>
                <h3 className="font-heading font-bold text-lg">VẬN TẢI HOÀNG PHONG</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              Công ty chuyên cung cấp dịch vụ vận tải hàng hóa, container nội địa, 
              vận chuyển hàng siêu trường siêu trọng trên toàn quốc.
            </p>
            <div className="flex gap-3">
              <a href={FACEBOOK_URL} className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={TIKTOK_URL} className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Tiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {[
                { name: "Trang chủ", path: "/" },
                { name: "Giới thiệu", path: "/gioi-thieu" },
                { name: "Dịch vụ", path: "/dich-vu" },
                { name: "Dự án", path: "/du-an" },
                { name: "Liên hệ", path: "/lien-he" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Dịch vụ chính</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Vận chuyển Container nội địa</li>
              <li>Hàng siêu trường siêu trọng</li>
              <li>Vận chuyển hàng công trình</li>
              <li>Vận chuyển xe tải con</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  {ADDRESS}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="tel:0974819846" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href={`mailto:${EMAIL}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  {WORKING_HOURS}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="border-t border-primary-foreground/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6!2d106.6756!3d20.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a9c3a8c7f1d%3A0x5b0f3c8d9e1f2a3b!2zxJDDtG5nIEtow6osIEdpYSBWacOqbiwgTmfDtCBRdXnhu4FuLCBI4bqjaSBQaMOybmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702300000000!5m2!1svi!2s"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - 33/275 Đông Khê, Gia Viên, Hải Phòng"
        />
        <div className="text-center py-2 bg-primary">
          <a 
            href="https://www.google.com/maps/place/%C4%90%C3%B4ng+Kh%C3%AA,+Gia+Vi%C3%AAn,+Ng%C3%B4+Quy%E1%BB%81n,+H%E1%BA%A3i+Ph%C3%B2ng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
          >
            33/275 Đông Khê, phường Gia Viên, Hải Phòng
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto text-center text-sm text-primary-foreground/70">
          <p>© 2024 Vận Tải Hoàng Phong. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
