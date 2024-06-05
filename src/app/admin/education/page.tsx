import { getEducationAction } from "@/actions/education.action";
import Education from "@/components/admin/education/Education";

export default async function page() {
   const dataEducations = await getEducationAction()
   console.log(dataEducations);
   return <Education dataEducations={dataEducations}/>;
}
