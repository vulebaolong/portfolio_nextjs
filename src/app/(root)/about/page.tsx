import { getInfoGitHubAction } from "@/actions/about.action";
import { getTextInPageByPageAction } from "@/actions/title-in-page.action";
import About from "@/components/root/about/About";
import { ROUTER } from "@/constants/router.constant";

export default async function AboutPage() {
  const responInfoGitHubAction = await getInfoGitHubAction();
  const dataTextInPage = await getTextInPageByPageAction(ROUTER.ABOUT);
  return <About dataTextInPage={dataTextInPage} responInfoGitHubAction={responInfoGitHubAction} />;
}
