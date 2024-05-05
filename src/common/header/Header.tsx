import { Box, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function Header() {
   return (
      <Box
         sx={{
            position: `fixed`,
            zIndex: `1`,
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
               </Box>
            </Stack>
         </Container>
      </Box>
   );
}
