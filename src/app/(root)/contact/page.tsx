import { getTextInPageByPageAction } from "@/actions/title-in-page.action";
import Contact from "@/components/root/contact/Contact";
import { ROUTER } from "@/constants/router.constant";

export default async function page() {
   const dataTextInPage = await getTextInPageByPageAction(ROUTER.CONTACT);
   return <Contact dataTextInPage={dataTextInPage} />;
}
