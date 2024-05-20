import { getProjectsAction, getTypeProjectsAction } from "@/actions/project.action";
import Project from "@/components/root/project/Project";

export default async function ProjectPage() {
   const dataProjects = await getProjectsAction();
   return <Project dataProjects={dataProjects}/>;
}
