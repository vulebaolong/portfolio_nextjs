import { Box, Chip, Stack, Typography } from "@mui/material";
import GlowCard from "./GlowCard";
import Image from "next/image";
const basePath = `/images/project/`;
type TProps = {
   project: TProject;
   index: number;
};
export default function ProjectItem({ project, index }: TProps) {
   return (
      <GlowCard identifier={`experience-${index + 1}`}>
         <Box
            sx={{
               borderRadius: `15px`,
               overflow: `hidden`,
            }}
         >
            <Box sx={{ position: `relative` }}>
               <Image
                  src={`${basePath}${project.img_project_path}`}
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
                  src={`${basePath}${project.img_logo_path}`}
                  width={40}
                  height={40}
                  sizes="20vw"
                  alt="img logo project"
                  priority={true}
               />
            </Box>
            <Box sx={{ p: `20px` }}>
               <Stack sx={{ flexDirection: `row`, alignItems: `center`, gap: `10px` }}>
                  <Chip label={project.type} sx={{ backgroundColor: `rgb(128 128 128)` }} />

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
   );
}
