import MainLayout from "@/common/layouts/MainLayout";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
