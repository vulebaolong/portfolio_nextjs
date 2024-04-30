import ParticlesColors from "@/common/particles/ParticlesColors";
import { Box, Container, Typography } from "@mui/material";
import ProjectSlider from "./ProjectSlider";

export default function Project() {
   return (
      <Box sx={{ pt: `5rem` }}>
         <Container>
            <Box
               sx={{
                  display: `grid`,
                  gridTemplateColumns: {
                     xs: `1fr`,
                     lg: `0.35fr 0.65fr`,
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

               <Box sx={{ gridColumn: `2` }}>
                  <Box sx={{ width: `100%`, aspectRatio: `1280/720` }}>
                     <ProjectSlider />
                  </Box>
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
            <ParticlesColors />
         </Box>
      </Box>
   );
}
