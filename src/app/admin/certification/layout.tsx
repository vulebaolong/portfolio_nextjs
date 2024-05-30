import AdminLayout from "@/common/layouts/AdminLayout";

export default async function LayoutMyProject({ children }: { children: React.ReactNode }) {
   return <AdminLayout>{children}</AdminLayout>;
}
