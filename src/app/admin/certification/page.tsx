import { getCertificationAction } from "@/actions/certification.action";
import Certification from "@/components/admin/certification/Certification";

export default async function page() {
   const dataCertification = await getCertificationAction();
   return <Certification dataCertification={dataCertification} />;
}
