import { getInfoGitHubAction } from "@/actions/about/about.action";
import About from "@/components/root/about/About";

export default async function AboutPage() {
  const responInfoGitHubAction = await getInfoGitHubAction();
  return <About responInfoGitHubAction={responInfoGitHubAction} />;
}
