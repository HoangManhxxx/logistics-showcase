import { useState } from "react";
import {Send, Phone, Mail, MapPin, Loader2, Facebook} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {ADDRESS, EMAIL, FACEBOOK_URL, PHONE_NUMBER, TIKTOK_URL} from "@/constants/InformationConsts.ts";
import {Tiktok} from "@/components/ui/icons.tsx";
import {Inquiry} from "@/models/Inquiry.ts";
import {postContactForm} from "@/services/appscript.ts";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Inquiry>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    detail: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const _ = await postContactForm(formData);
    } finally {
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
      });
      setFormData({ fullName: "", phone: "", email: "", service: "", detail: "" });
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Liên hệ</span>
            <h2 className="section-title mt-2">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn và báo giá miễn phí cho bạn.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Địa chỉ</h4>
                  <p className="text-muted-foreground">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hotline</h4>
                  <a href="tel:0974819846" className="text-accent font-semibold text-lg hover:text-primary transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Facebook</h4>
                  <a href={FACEBOOK_URL} className="text-muted-foreground hover:text-accent transition-colors">
                    Fanpage: Vận tải Hoàng Phong
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Tiktok className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tiktok</h4>
                  <a href={TIKTOK_URL} className="text-muted-foreground hover:text-accent transition-colors">
                    Kênh Tiktok: Vận tải Hoàng Phong
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-heading font-bold text-xl mb-6">Gửi yêu cầu</h3>
            <form method="POST" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                  <Input
                    required
                    placeholder="Nhập họ và tên"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Dịch vụ quan tâm</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="container-noi-dia">Vận chuyển Container nội địa</option>
                  <option value="sieu-truong-sieu-trong">Hàng siêu trường siêu trọng</option>
                  <option value="hang-cong-trinh">Vận chuyển hàng công trình</option>
                  <option value="xe-tai-van-chuyen">Xe tải vận chuyển</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nội dung yêu cầu</label>
                <Textarea
                  placeholder="Mô tả chi tiết nhu cầu vận chuyển của bạn..."
                  rows={4}
                  value={formData.detail}
                  onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="btn-accent w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Gửi yêu cầu
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
