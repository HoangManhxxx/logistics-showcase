import { Building2, Factory, Landmark, Store, Warehouse, Ship } from "lucide-react";

const partners = [
  { name: "Samsung Electronics", icon: Building2 },
  { name: "Vinamilk", icon: Factory },
  { name: "Hòa Phát Group", icon: Landmark },
  { name: "Thaco Auto", icon: Store },
  { name: "Masan Group", icon: Warehouse },
  { name: "Viettel Post", icon: Ship },
];

const stats = [
  { value: "1000+", label: "Khách hàng" },
  { value: "50+", label: "Đối tác chiến lược" },
  { value: "15+", label: "Năm hợp tác" },
  { value: "98%", label: "Khách hàng hài lòng" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Đối tác & Khách hàng
          </span>
          <h2 className="section-title mt-2">Được Tin Tưởng Bởi</h2>
          <p className="section-subtitle">
            Hàng ngàn doanh nghiệp đã tin tưởng và đồng hành cùng chúng tôi
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <partner.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "Và hàng trăm doanh nghiệp khác đã tin tưởng sử dụng dịch vụ của Vận Tải Hoàng Phong"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
