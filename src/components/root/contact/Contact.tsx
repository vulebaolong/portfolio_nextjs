"use client";

import { Box, Container, Typography, useColorScheme } from "@mui/material";
import FormContact from "./FormContact";
import { styleBoxPage } from "@/common/styles/style-blobal.mui";
import { useEffect } from "react";

export default function Contact() {
   const { mode, setMode } = useColorScheme();
   useEffect(() => {
      if (mode === `dark`) return;
      setMode(`dark`);
   }, []);

   return (
      <Box sx={styleBoxPage}>
         <Container>
            {/* text & form */}
            <Box
               sx={{
                  maxWidth: `700px`,
                  mx: `auto`,
               }}
            >
               {/* text */}
               <Typography
                  variant="h1"
                  sx={{
                     fontSize: `54px`,
                     fontWeight: `600`,
                     textAlign: `center`,
                     mb: `50px`,
                  }}
               >
                  Lets{" "}
                  <Box
                     sx={{
                        color: `#f44336`,
                     }}
                     component={`span`}
                  >
                     connect.
                  </Box>
               </Typography>

               <FormContact />
            </Box>
         </Container>
      </Box>
   );
}
