import { getInfoGitHubAction } from "@/actions/about/about.action";
import About from "@/components/about/About";

export default async function AboutPage() {
  const responInfoGitHubAction = await getInfoGitHubAction();
  return <About responInfoGitHubAction={responInfoGitHubAction} />;
}
