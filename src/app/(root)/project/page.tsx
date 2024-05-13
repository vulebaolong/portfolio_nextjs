import { getProjectsAction } from "@/actions/project/project.action";
import Project from "@/pages/root/project/Project";

export default async function ProjectPage() {
   const dataProjects = await getProjectsAction();
   return <Project dataProjects={dataProjects} />;
}
