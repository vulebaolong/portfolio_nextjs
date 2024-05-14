"use client";

import { HEIGHT_HEADER } from "@/constants/app.constant";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import HeaderAdmin from "../header/HeaderAdmin";
import useResponsive from "../hooks/useResponsive";
import NavAdmin from "../nav/NavAdmin";

type TProps = {
   children: ReactNode;
};

export default function AdminLayout({ children }: TProps) {
   const isMobile = useResponsive("down", "lg");

   return (
      <Box
         sx={{
            width: `100vw`,
            height: `100vh`,
            position: `relative`,
            display: `grid`,
            gridTemplateColumns: {
               xs: `1fr`,
               lg: `auto 1fr`,
            },
            gridTemplateRows: `1fr`,
         }}
      >
         {!isMobile && <NavAdmin />}

         <Box
            sx={{
               pt: `calc(${HEIGHT_HEADER} + 20px)`,
               px: `20px`,
               pb: `20px`,
               width: `100%`,
               height: `100%`,
               overflowY: `auto`,
            }}
         >
            {children}
         </Box>

         <HeaderAdmin />
      </Box>
   );
}
