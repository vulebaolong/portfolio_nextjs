"use client";

import { Box, Container, Typography, useColorScheme } from "@mui/material";
import FormContact from "./FormContact";
import { styleBoxPage } from "@/common/styles/style-blobal.mui";
import { useEffect } from "react";
import { TTextInPage } from "@/types/respon/text-in-page.type";

type TProps = {
   dataTextInPage: TResonAction<TTextInPage | null>;
};

export default function Contact({ dataTextInPage }: TProps) {
   const { mode, setMode } = useColorScheme();
   useEffect(() => {
      if (mode === `dark`) return;
      setMode(`dark`);
   }, [mode, setMode]);

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
                  {dataTextInPage.data?.title.split(`/`)[0]}{" "}
                  <Box
                     sx={{
                        color: `#f44336`,
                     }}
                     component={`span`}
                  >
                     {dataTextInPage.data?.title.split(`/`)[1]}
                  </Box>
               </Typography>

               <FormContact dataTextInPage={dataTextInPage}/>
            </Box>
         </Container>
      </Box>
   );
}
