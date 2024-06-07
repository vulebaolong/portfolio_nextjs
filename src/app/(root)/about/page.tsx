import { getInfoGitHubAction } from "@/actions/about.action";
import { getCertificationAction } from "@/actions/certification.action";
import { getEducationAction } from "@/actions/education.action";
import { getTextInPageByPageAction } from "@/actions/title-in-page.action";
import About from "@/components/root/about/About";
import { ROUTER } from "@/constants/router.constant";

export default async function AboutPage() {
   const responInfoGitHubAction = await getInfoGitHubAction();
   const dataTextInPage = await getTextInPageByPageAction(ROUTER.ABOUT);
   const dataEducations = await getEducationAction();
   const dataCertification = await getCertificationAction();

   return (
      <About
         dataEducations={dataEducations}
         dataTextInPage={dataTextInPage}
         responInfoGitHubAction={responInfoGitHubAction}
         dataCertification={dataCertification}
      />
   );
}
