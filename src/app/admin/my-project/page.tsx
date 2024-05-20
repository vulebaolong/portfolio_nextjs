import { getProjectsAction, getTypeProjectsAction } from "@/actions/project.action";
import MyProject from "@/components/admin/my-project/MyProject";

export default async function page() {
   const dataProjects = await getProjectsAction();
   const dataTypeProjects = await getTypeProjectsAction();

   return <MyProject dataProjects={dataProjects} dataTypeProjects={dataTypeProjects} />;
}
