"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeRegistry from "./ThemeRegistry";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeRegistry options={{ key: "mui" }}>
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </ThemeRegistry>
    </AppRouterCacheProvider>
  );
};

export default Providers;
