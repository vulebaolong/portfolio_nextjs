import HeaderAdmin from "@/common/header/HeaderAdmin";
import Logo from "@/common/logo/Logo";
import NavAdmin from "@/common/nav/NavAdmin";
import { HEIGHT_HEADER } from "@/constants/app.constant";
import { Box, Stack } from "@mui/material";

export default async function LayoutDashboard({ children }: { children: React.ReactNode }) {
   return (
      <Box
         sx={{
            width: `100vw`,
            height: `100vh`,
            position: `relative`,
            display: `grid`,
            gridTemplateColumns: `300px 1fr`,
            gridTemplateRows: `1fr`,
         }}
      >
         <Box
            sx={{
               borderStyle: `solid`,
               borderColor: `rgba(204, 229, 255, 0.3)`,
               borderWidth: `0px thin 0px 0px`,
            }}
         >
            <Stack
               sx={{
                  height: HEIGHT_HEADER,
                  width: `100%`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  borderStyle: `solid`,
                  borderColor: `rgba(204, 229, 255, 0.3)`,
                  borderWidth: `0px 0px thin`,
               }}
            >
               <Logo />
            </Stack>
            <NavAdmin />
         </Box>

         <Box
            sx={{
               pt: `calc(${HEIGHT_HEADER} + 10px)`,
               px: `10px`,
               pb: `10px`,
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
