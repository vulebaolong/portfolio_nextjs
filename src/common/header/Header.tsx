"use client";

import { Box, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/constants/router.constant";

export default function Header() {
   const router = useRouter();
   return (
      <Box
         sx={{
            position: `fixed`,
            zIndex: `4`,
            width: `100%`,
            WebkitBackdropFilter: "blur(5px)",
            backdropFilter: "blur(5px)",
         }}
      >
         <Container>
            <Stack
               sx={{
                  flexDirection: "row",
                  height: "90px",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <Logo />
               <Box>
                  <Link
                     target="_blank"
                     rel="noopener noreferrer"
                     href={"https://github.com/vulebaolong"}
                  >
                     <IconButton>
                        <GitHubIcon />
                     </IconButton>
                  </Link>
                  <Link
                     target="_blank"
                     rel="noopener noreferrer"
                     href={"https://github.com/vulebaolong"}
                  >
                     <IconButton>
                        <FacebookIcon />
                     </IconButton>
                  </Link>
                  <Link
                     target="_blank"
                     rel="noopener noreferrer"
                     href={"https://github.com/vulebaolong"}
                  >
                     <IconButton>
                        <LinkedInIcon />
                     </IconButton>
                  </Link>
                  <IconButton
                     onClick={() => {
                        router.push(ROUTER.ADMIN.HOME);
                        setTimeout(() => { 
                           window.location.reload()
                         }, 500)
                     }}
                  >
                     <KitesurfingIcon />
                  </IconButton>
               </Box>
            </Stack>
         </Container>
      </Box>
   );
}
