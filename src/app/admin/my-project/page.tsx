import { getProjectsAction } from "@/actions/project.action";
import MyProject from "@/components/admin/my-project/MyProject";

export default async function page() {
   const dataProjects = await getProjectsAction();
   return <MyProject dataProjects={dataProjects} />;
}
