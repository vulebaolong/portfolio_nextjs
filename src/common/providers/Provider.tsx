"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeRegistry from "./ThemeRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeRegistry options={{ key: "mui" }}>
        {children}
      </ThemeRegistry>
    </AppRouterCacheProvider>
  );
};

export default Providers;
