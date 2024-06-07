import { ROUTER } from "@/constants/router.constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import Logo from "../logo/Logo";

export default function Header() {
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
                  <a href={ROUTER.ADMIN.HOME}>
                     <IconButton>
                        <KitesurfingIcon />
                     </IconButton>
                  </a>
               </Box>
            </Stack>
         </Container>
      </Box>
   );
}
