import ParticlesColors from "@/common/particles/ParticlesColors";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GlowCard from "./GlowCard";

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

export default function Project() {
   return (
      <Box sx={{ pt: `5rem` }}>
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
               {projects.map((project) => (
                  <GlowCard key={project.id} identifier={`experience-${project.id}`}>
                     <Box
                        sx={{
                           borderRadius: `15px`,
                           overflow: `hidden`,
                        }}
                     >
                        <Box sx={{ position: `relative` }}>
                           <Image
                              src={project.imgProjectPath}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                              alt="img project"
                              priority={true}
                           />
                           <Image
                              style={{
                                 position: `absolute`,
                                 bottom: `10px`,
                                 left: `10px`,
                              }}
                              src={project.imgLogoPath}
                              width={40}
                              height={40}
                              sizes="20vw"
                              alt="img logo project"
                              priority={true}
                           />
                        </Box>
                        <Box sx={{ p: `20px` }}>
                           <Stack sx={{ flexDirection: `row`, alignItems: `center`, gap: `10px` }}>
                              <Chip
                                 label={project.type}
                                 sx={{ backgroundColor: `rgb(128 128 128)` }}
                              />

                              <Box
                                 sx={{
                                    width: `5px`,
                                    height: `5px`,
                                    borderRadius: `50%`,
                                    backgroundColor: `rgb(33 128 244)`,
                                 }}
                              />

                              <Typography
                                 sx={{
                                    color: `rgb(204 204 204)`,
                                    fontWeight: `400`,
                                    fontSize: `12px`,
                                 }}
                              >
                                 {project.platform}
                              </Typography>
                           </Stack>

                           <Typography
                              sx={{
                                 mt: `20px`,
                                 fontWeight: `700`,
                                 fontSize: `20px`,
                              }}
                           >
                              {project.title}
                           </Typography>
                           <Typography
                              sx={{
                                 mt: `10px`,
                                 color: `rgb(204 204 204)`,
                                 fontWeight: `400`,
                                 fontSize: `12px`,
                              }}
                           >
                              {project.description}
                           </Typography>
                        </Box>
                     </Box>
                  </GlowCard>
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
