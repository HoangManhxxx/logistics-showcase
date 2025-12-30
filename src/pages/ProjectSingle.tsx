import NotFound from "@/pages/NotFound.tsx";
import {Project} from "@/models/Project.ts";
import * as React from "react";
import {getList, getSingle} from "@/services/appscript.ts";
import {useParams} from "react-router-dom";
import {Loader2} from "lucide-react";

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