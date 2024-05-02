"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeRegistry from "./ThemeRegistry";
import PageAnimatePresence from "@/common/HOC/PageAnimatePresence";
import ToastProvider from "./ToastProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ToastProvider />
      <ThemeRegistry options={{ key: "mui" }}>
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </ThemeRegistry>
    </AppRouterCacheProvider>
  );
};

export default Providers;
