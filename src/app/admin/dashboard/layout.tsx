import AdminLayout from "@/common/layouts/AdminLayout";

export default async function LayoutDashboard({ children }: { children: React.ReactNode }) {
   return <AdminLayout>{children}</AdminLayout>;
}
