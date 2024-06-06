"use client";

import ParticlesTriangles from "@/common/particles/ParticlesTriangles";
import { styleBoxPage } from "@/common/styles/style-blobal.mui";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import { Box, Container, useColorScheme } from "@mui/material";
import { useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { TEducation } from "@/types/respon/education.type";

const basePath = `/images/about/`;

type TProps = {
   responInfoGitHubAction: TResonAction<TInfoGitHub>;
   dataTextInPage: TResonAction<TTextInPage | null>;
   dataEducations: TResonAction<TEducation[] | null>
};

export default function About({ responInfoGitHubAction, dataTextInPage, dataEducations }: TProps) {
   const { data } = responInfoGitHubAction;
   const { mode, setMode } = useColorScheme();
   useEffect(() => {
      if (mode === `dark`) return;
      setMode(`dark`);
   }, [mode, setMode]);

   return (
      <Box sx={styleBoxPage}>
         <Container>
            <Box
               sx={{
                  display: `grid`,
                  gridTemplateColumns: {
                     xs: `1fr`,
                     lg: `44% 56%`,
                  },
                  gap: `5rem`,
               }}
            >
               <Box
                  sx={{
                     gridColumn: `1`,
                     pr: `20px`,
                     minWidth: `0`,
                     minHeight: `0`,
                  }}
               >
                  <Left data={data} dataTextInPage={dataTextInPage} />
               </Box>

               <Box
                  sx={{
                     gridColumn: {
                        xs: `1`,
                        lg: `2`,
                     },
                  }}
               >
                  <Right dataEducations={dataEducations}/>
               </Box>
            </Box>
         </Container>

         {/* BACKGROUND / PARTICLES*/}
         <Box
            sx={{
               "position": "fixed",
               "width": "100vw",
               "height": "100vh",
               "top": "0",
               "left": "0",
               "zIndex": "-1",
               "& #ParticlesTriangles": {
                  width: "100%",
                  height: "100%",
                  transform: "translateZ(0)",
               },
            }}
         >
            <ParticlesTriangles />
         </Box>
      </Box>
   );
}
