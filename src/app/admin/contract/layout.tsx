import AdminLayout from "@/common/layouts/AdminLayout";

export default async function LayoutContract({ children }: { children: React.ReactNode }) {
   return <AdminLayout>{children}</AdminLayout>;
}
