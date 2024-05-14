"use client";

import { HEIGHT_HEADER, WIDTH_NAV } from "@/constants/app.constant";
import { Box } from "@mui/material";

export default function HeaderAdmin() {
   return (
      <Box
         sx={{
            height: HEIGHT_HEADER,
            position: `fixed`,
            top: `0`,
            right: `0`,
            width: `calc(100vw - ${WIDTH_NAV})`,
            borderStyle: `solid`,
            borderColor: `rgba(204, 229, 255, 0.3)`,
            borderWidth: `0px 0px thin 0px`,
         }}
      >
         HeaderAdmin
      </Box>
   );
}
