"use client";

import { logoutAction } from "@/actions/logout.action";
import { HEIGHT_HEADER, WIDTH_NAV } from "@/constants/app.constant";
import { LIST_NAV } from "@/constants/nav.constant";
import { ROUTER } from "@/constants/router.constant";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { toast } from "react-toastify";
import Logo from "../logo/Logo";
import ListItemNav from "./ListItemNav";

export default function NavAdmin() {
   const router = useRouter();
   const pathname = usePathname();

   const handleLogout = async () => {
      const result = await logoutAction();

      if (result.status) {
         router.push(ROUTER.ADMIN.AUTH.LOGIN);
      } else {
         toast.error(result.message);
      }
   };
   return (
      <Stack
         sx={{
            width: WIDTH_NAV,
            height: `100%`,
            borderStyle: `solid`,
            borderColor: `rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
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
               borderColor: `rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
               borderWidth: `0px 0px thin`,
            }}
         >
            <Logo />
         </Stack>
         {/* LIST NAV */}
         <List sx={{ overflowY: `auto` }}>
            <ListItemButton
               selected={pathname === ROUTER.ADMIN.DASHBOARD}
               onClick={() => {
                  router.push(ROUTER.ADMIN.DASHBOARD);
               }}
            >
               <ListItemIcon>
                  <GridViewRoundedIcon />
               </ListItemIcon>
               <ListItemText primary={`Dashboard`} />
            </ListItemButton>
            {LIST_NAV.map((item, index) => {
               return (
                  <Fragment key={index}>
                     <ListItemNav item={item} pl={2} />
                  </Fragment>
               );
            })}
         </List>
         {/* FOOTER NAV */}
         <List sx={{ mt: `auto`, flexShrink: `0` }}>
            <Divider />
            <ListItemButton onClick={handleLogout}>
               <ListItemIcon>
                  <LogoutRoundedIcon />
               </ListItemIcon>
               <ListItemText primary="Logout" />
            </ListItemButton>
         </List>
      </Stack>
   );
}
