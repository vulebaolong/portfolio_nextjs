"use client";

import { logoutAction } from "@/actions/logout.action";
import { HEIGHT_HEADER } from "@/constants/app.constant";
import { LIST_NAV } from "@/constants/nav.constant";
import { ROUTER } from "@/constants/router.constant";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import ListItemNav from "./ListItemNav";
import { toast } from "react-toastify";

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
      <Stack sx={{ height: `calc(100vh - ${HEIGHT_HEADER})` }}>
         {/* LIST NAV */}
         <List sx={{ overflowY: `auto` }}>
            <ListItemButton
               selected={pathname.slice(1) === ROUTER.ADMIN.DASHBOARD}
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
