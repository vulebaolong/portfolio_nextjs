"use client";

import { HEIGHT_HEADER, WIDTH_NAV } from "@/constants/app.constant";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import ButtonToggleTheme from "../button/ButtonToggleTheme";
import { useState } from "react";
import useResponsive from "../hooks/useResponsive";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import Logo from "../logo/Logo";
import NavAdmin from "../nav/NavAdmin";

export default function HeaderAdmin() {
   const [open, setOpen] = useState(false);
   const isMobile = useResponsive("down", "lg");

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };
   return (
      <>
         <Box
            sx={{
               display: `flex`,
               alignItems: `center`,
               justifyContent: `space-between`,
               padding: `8px 16px`,
               height: HEIGHT_HEADER,
               position: `fixed`,
               zIndex: `2`,
               top: `0`,
               right: `0`,
               width: {
                  xs: `100vw`,
                  lg: `calc(100vw - ${WIDTH_NAV})`,
               },
               borderStyle: `solid`,
               borderColor: `rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
               borderWidth: `0px 0px thin 0px`,
               backdropFilter: `blur(10px)`,
            }}
            component={`header`}
         >
            {/* LEFT */}
            {isMobile ? (
               <IconButton
                  sx={{
                     display: `inline-flex`,
                     alignItems: `center`,
                     justifyContent: `center`,
                     boxSizing: `border-box`,
                  }}
                  onClick={toggleDrawer(true)}
               >
                  <DragHandleRoundedIcon />
               </IconButton>
            ) : (
               <Box />
            )}

            {isMobile ? <Logo /> : <Box />}

            <Stack sx={{ flexDirection: `row`, alignItems: `center`, gap: `10px` }}>
               <ButtonToggleTheme />
               {/* {mail && (
                  <Avatar {...stringAvatar(mail || `Aamin`)} sx={{ width: 36, height: 36 }} />
               )} */}
            </Stack>
         </Box>
         <Drawer open={open} onClose={toggleDrawer(false)} sx={{ backdropFilter: `blur(5px)` }}>
            <NavAdmin />
         </Drawer>
      </>
   );
}
