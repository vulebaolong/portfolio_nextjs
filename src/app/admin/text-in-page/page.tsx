import { getTextInPageAction } from "@/actions/title-in-page.action";
import TextInPage from "@/components/admin/text-in-page/TextInPage";

export default async function page() {
   const dataTextInPage = await getTextInPageAction()
   return <TextInPage dataTextInPage={dataTextInPage}/>;
}
