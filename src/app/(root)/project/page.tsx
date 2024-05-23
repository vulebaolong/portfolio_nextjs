import { getProjectsAction, getTypeProjectsAction } from "@/actions/project.action";
import { getTextInPageByPageAction } from "@/actions/title-in-page.action";
import Project from "@/components/root/project/Project";
import { ROUTER } from "@/constants/router.constant";

export default async function ProjectPage() {
   const dataProjects = await getProjectsAction();
   const dataTextInPage = await getTextInPageByPageAction(ROUTER.PROJECT);
   return <Project dataTextInPage={dataTextInPage} dataProjects={dataProjects} />;
}
