import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Project} from "@/models/Project.ts";
import {getList} from "@/services/appscript.ts";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchList();
  }, [])

  const fetchList = async () => {
    try {
      const projectResponse = await getList("Projects", 5);
      setProjects(projectResponse.items);
    }finally {}
  }
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Dự án thực tế</span>
          <h2 className="section-title mt-2">Hình Ảnh Hoạt Động</h2>
          <p className="section-subtitle">
            Một số hình ảnh các dự án vận chuyển mà chúng tôi đã thực hiện
          </p>
        </div>

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
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <Eye className="w-5 h-5 text-accent-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/du-an">
            <Button size="lg" className="btn-primary">
              Xem tất cả dự án
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
