import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
    { name: "Dịch vụ", path: "/dich-vu" },
    { name: "Dự án", path: "/du-an" },
    { name: "Tin tức", path: "/tin-tuc" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="tel:0901234567" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Hotline: 090 123 45 67</span>
            </a>
            <a href="mailto:info@vantai.vn" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@vantai.vn</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>T2-T6: 8AM-5PM | T7: 8AM-12PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card">
        <div className="container mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">VT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-primary leading-tight">VẬN TẢI VIỆT NAM</h1>
              <p className="text-xs text-muted-foreground">Uy tín - Chất lượng - Hiệu quả</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 font-medium transition-colors rounded-md ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:0901234567">
              <Button className="btn-accent font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Gọi ngay
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="container mx-auto py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:0901234567" className="block mt-4">
                <Button className="btn-accent w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay: 090 123 45 67
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
