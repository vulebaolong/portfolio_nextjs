"use client";

import ParticlesColors from "@/common/particles/ParticlesColors";
import { styleBoxPage } from "@/common/styles/style-blobal.mui";
import { TProject, TTypeProject } from "@/types/respon/project.type";
import { Box, Container, Typography, useColorScheme } from "@mui/material";
import { useEffect } from "react";
import ProjectItem from "./ProjectItem";

const basePath = `/images/project/`;

const projects = [
   {
      id: 1,
      title: "Netflix",
      description: `Netflix Ticket Booking is a ReactJS project developed during the final course at Cybersoft Academy. The project aims to create a ticket booking system for movie theaters, inspired by the Netflix homepage interface`,
      type: `Fe Development`,
      platform: `Web, iOS, Android`,
      imgProjectPath: `${basePath}thumb1.jpg`,
      imgLogoPath: `${basePath}logo_Netflix.png`,
   },
   {
      id: 2,
      title: "L9 Learning",
      description: `The L9 Learning website provides courses designed to be suitable for beginners, with many free, quality courses and easy-to-understand content.`,
      type: `Fe Development`,
      platform: `Web, iOS, Android`,
      imgProjectPath: `${basePath}thumb2.jpg`,
      imgLogoPath: `${basePath}logo_L9Learning.png`,
   },
   {
      id: 3,
      title: "Netflix - server",
      description: `Netflix - server is a backend project developed using Node.js and Express. It serves as the server-side component for the Netflix Ticket Booking system, handling data processing and management.`,
      type: `Be Development`,
      platform: `Nodejs, Express`,
      imgProjectPath: `${basePath}thumb3.jpg`,
      imgLogoPath: `${basePath}logo_Netflix.png`,
   },
   {
      id: 4,
      title: `L9 Learning - server`,
      description: `L9 Learning - server is a backend project built with Node.js and Express. It functions as the backend system for the L9 Learning website, managing data and providing necessary services.`,
      type: `Be Development`,
      platform: `Nodejs, Express`,
      imgProjectPath: `${basePath}thumb4.jpg`,
      imgLogoPath: `${basePath}logo_L9Learning.png`,
   },
];

type TProps = {
   dataProjects: TResonAction<TProject[] | null>;
};
export default function Project({ dataProjects }: TProps) {
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
                  gridColumn: `1`,
                  pr: `20px`,
                  minWidth: `0`,
                  minHeight: `0`,
               }}
            >
               <Typography
                  variant="h1"
                  sx={{
                     fontSize: `54px`,
                     fontWeight: `600`,
                  }}
               >
                  My{" "}
                  <Box
                     sx={{
                        color: `#f44336`,
                     }}
                     component={`span`}
                  >
                     projects.
                  </Box>
               </Typography>

               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `1.8`,
                     mt: `16px`,
                  }}
               >
                  I have selected and mentioned here some of my projects to share with you
               </Typography>
            </Box>

            <Box
               sx={{
                  display: `grid`,
                  justifyItems: `center`,
                  gridTemplateColumns: {
                     xs: `1fr`,
                     lg: `1fr 1fr`,
                  },
                  gap: `50px`,
                  mt: `50px`,
               }}
            >
               {dataProjects.status &&
                  dataProjects.data?.map((project, index) => (
                     <ProjectItem project={project} index={index} key={project._id.toString()} />
                  ))}
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
            <ParticlesColors />
         </Box>
      </Box>
   );
}
