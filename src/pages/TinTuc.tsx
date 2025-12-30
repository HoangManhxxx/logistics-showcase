import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {Calendar, User, ArrowRight} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import containerYard from "@/assets/container-yard.jpg";
import warehouse from "@/assets/warehouse.jpg";
import heavyTransport from "@/assets/heavy-transport.jpg";
import {news} from "@/constants/NewsConst";


const TinTuc = () => {
    return (
        <>
            {/* Hero Banner */}
            <section className="relative py-20 lg:py-32">
                <div className="absolute inset-0">
                    <img src={heroTruck} alt="Tin tức vận tải" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-overlay"/>
                </div>
                <div className="container mx-auto relative text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                        Tin Tức & Kiến Thức
                    </h1>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Cập nhật tin tức ngành vận tải và kiến thức hữu ích cho doanh nghiệp
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 lg:py-24 bg-card">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <article
                                key={item.id}
                                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                        <span
                            className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4"/>
                            {item.date}
                        </span>
                                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4"/>
                                            {item.author}
                        </span>
                                    </div>
                                    <h2 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        to={`/tin-tuc/${item.id}`}
                                        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                                    >
                                        Đọc tiếp
                                        <ArrowRight
                                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TinTuc;
