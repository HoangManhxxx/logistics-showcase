import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {Eye, Loader2} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import {useEffect, useState} from "react";
import {getList} from "@/services/appscript.ts";
import {Project} from "@/models/Project.ts";

const categories = ["Tất cả", "Container nội địa", "Siêu trường siêu trọng", "Container"];

const DuAn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchList();
  }, [])

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const projectResponse = await getList("Projects", 5);
      setProjects(projectResponse.items);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
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
            {isLoading ?
                <div className="flex items-center justify-center w-full min-h-screen">
                  <Loader2 className="w-24 h-24 animate-spin" />
                </div> :
            <div className="container mx-auto">
              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {project.highlight}
                      </span>
                      <h3 className="font-heading font-bold text-lg mt-1 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="italic text-sm mt-1 group-hover:text-accent transition-colors">
                        {project.summary}
                      </p>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <a href={`du-an/${project.url}`}>
                        <Eye className="w-5 h-5 text-accent-foreground" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>}
          </section>
    </>
  );
};

export default DuAn;
