"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ThemeRegistry from "./ThemeRegistry";
import PageAnimatePresence from "@/common/providers/PageAnimatePresence";
import ToastProvider from "./ToastProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en-gb';

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <AppRouterCacheProvider>
         <ThemeRegistry options={{ key: "mui" }}>
            <ToastProvider />
            <PageAnimatePresence>
               <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                  {children}
               </LocalizationProvider>
            </PageAnimatePresence>
         </ThemeRegistry>
      </AppRouterCacheProvider>
   );
};

export default Providers;
