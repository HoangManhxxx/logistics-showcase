import NotFound from "@/pages/NotFound.tsx";
import {Project} from "@/models/Project.ts";
import * as React from "react";
import {getList, getSingle} from "@/services/appscript.ts";
import {useParams} from "react-router-dom";
import {Loader2} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const ProjectSingle = () => {
    const [project, setProject] = React.useState<Project>();
    const [isLoading, setIsLoading] = React.useState(false);
    const {url} = useParams<{ url: string }>();

    React.useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const projectResponse = await getSingle("Projects", url);
            setProject(projectResponse.item);
        } finally {
            setIsLoading(false);
        }
    }
    return <>
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
        {isLoading ?
            <div className="flex items-center justify-center w-full min-h-screen">
                <Loader2 className="w-24 h-24 animate-spin"/>
            </div> :
            <>
                {project?.body_html && project?.body_html !== "" ?
                    <div dangerouslySetInnerHTML={{__html: project?.body_html}}/>
                    : <NotFound/>}
            </>}
    </>
}

export default ProjectSingle;