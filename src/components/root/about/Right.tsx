import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
   BiLogoBootstrap,
   BiLogoCss3,
   BiLogoDocker,
   BiLogoFigma,
   BiLogoGithub,
   BiLogoHtml5,
   BiLogoMongodb,
   BiLogoNodejs,
   BiLogoPython,
   BiLogoRedux,
   BiLogoTailwindCss,
   BiLogoTypescript,
   BiLogoVuejs,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import {
   SiAdobephotoshop,
   SiAdobepremierepro,
   SiExpress,
   SiMysql,
   SiNestjs,
   SiPostman,
} from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

import { FaDocker } from "react-icons/fa";
import { TEducation } from "@/types/respon/education.type";
import Education from "./Education";
import { TCertification } from "@/types/respon/certification.type";
import Certification from "./Certification";

const items = [
   {
      title: `Skills`,
      info: (
         <Stack gap={`30px`}>
            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                  }}
               >
                  Front-End Development
               </Typography>
               <Stack
                  sx={{
                     "flexWrap": `wrap`,
                     "mt": `10px`,
                     "flexDirection": `row`,
                     "alignItems": `center`,
                     "gap": `5px`,
                     "& > svg": {
                        fontSize: `50px`,
                     },
                  }}
               >
                  <BiLogoTypescript />
                  <RiReactjsFill />
                  <BiLogoVuejs />
                  <BiLogoRedux />
                  <RiJavascriptFill />
                  <BiLogoTailwindCss />
                  <BiLogoBootstrap />
                  <BiLogoPython />
                  <BiLogoHtml5 />
                  <BiLogoCss3 />
               </Stack>
            </Box>

            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                  }}
               >
                  Back-End Development
               </Typography>
               <Stack
                  sx={{
                     "flexWrap": `wrap`,
                     "mt": `10px`,
                     "flexDirection": `row`,
                     "alignItems": `center`,
                     "gap": `10px`,
                     "& > svg": {
                        fontSize: `50px`,
                     },
                  }}
               >
                  <BiLogoNodejs />
                  <BiLogoMongodb />
                  <SiNestjs />
                  <SiExpress />
                  <SiMysql />
                  <FaDocker />
               </Stack>
            </Box>

            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                  }}
               >
                  Tool
               </Typography>
               <Stack
                  sx={{
                     "flexWrap": `wrap`,
                     "mt": `10px`,
                     "flexDirection": `row`,
                     "alignItems": `center`,
                     "gap": `12px`,
                     "& > svg": {
                        fontSize: `40px`,
                     },
                  }}
               >
                  <SiPostman />
                  <BiLogoFigma />
                  <BiLogoGithub />
                  <BsGit />
                  <SiAdobephotoshop />
                  <SiAdobepremierepro />
               </Stack>
            </Box>
         </Stack>
      ),
   },
   {
      title: `Education`,
      info: (
         <Stack gap={`20px`}>
            <Typography
               sx={{
                  color: "hsla(0,0%,100%,.6)",
                  fontSize: `16px`,
                  lineHeight: `2`,
               }}
            >
               UIT - University of Information Technology
               <br />
               Bachelor Of Information Technology
            </Typography>

            <Typography
               sx={{
                  color: "hsla(0,0%,100%,.6)",
                  fontSize: `16px`,
                  lineHeight: `2`,
               }}
            >
               HONG BANG International University
               <br />
               Bachelor Of Pharmacist - GPA: 2.83
            </Typography>
         </Stack>
      ),
   },
   {
      title: `Certifications`,
      info: (
         <Stack gap={`10px`}>
            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                  }}
               >
                  Build Responsive Real-World Websites with HTML and CSS.
               </Typography>
               <Stack
                  sx={{
                     flexDirection: "row",
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                     alignItems: `center`,
                  }}
               >
                  Date: 17/11/2022 -
                  <BsLink45Deg fontSize={`20px`} />
                  <Box
                     sx={{
                        textDecoration: `underline`,
                        color: "hsla(0,0%,100%,.6)",
                        display: `flex`,
                        alignItems: `center`,
                     }}
                     component={`a`}
                     target="_blank"
                     href="https://www.udemy.com/certificate/UC-48949a43-a312-46e5-bfa9-412197951b45/"
                  >
                     Link
                  </Box>
               </Stack>
            </Box>

            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                  }}
               >
                  The Complete JavaScript Course 2023: From Zero to Expert.
               </Typography>
               <Stack
                  sx={{
                     flexDirection: "row",
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                     alignItems: `center`,
                  }}
               >
                  Date: 04/02/2023 -
                  <BsLink45Deg fontSize={`20px`} />
                  <Box
                     sx={{
                        textDecoration: `underline`,
                        color: "hsla(0,0%,100%,.6)",
                        display: `flex`,
                        alignItems: `center`,
                     }}
                     component={`a`}
                     target="_blank"
                     href="https://www.udemy.com/certificate/UC-e3493e49-be8a-4233-be46-6e7b6130e892/"
                  >
                     Link
                  </Box>
               </Stack>
            </Box>

            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                  }}
               >
                  Node.js, Express, MongoDB & More: The Complete Bootcamp 2023.
               </Typography>
               <Stack
                  sx={{
                     flexDirection: "row",
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                     alignItems: `center`,
                  }}
               >
                  Date: 20/05/2023 -
                  <BsLink45Deg fontSize={`20px`} />
                  <Box
                     sx={{
                        textDecoration: `underline`,
                        color: "hsla(0,0%,100%,.6)",
                        display: `flex`,
                        alignItems: `center`,
                     }}
                     component={`a`}
                     target="_blank"
                     href="https://www.udemy.com/certificate/UC-d1a1187f-a92e-41ca-85bd-2644aac70191/"
                  >
                     Link
                  </Box>
               </Stack>
            </Box>

            <Box>
               <Typography
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                  }}
               >
                  Professional Front end Developer - Cybersoft Academy.
               </Typography>
               <Stack
                  sx={{
                     flexDirection: "row",
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                     alignItems: `center`,
                  }}
               >
                  Date: 18/09/2023 -
                  <BsLink45Deg fontSize={`20px`} />
                  <Box
                     sx={{
                        textDecoration: `underline`,
                        color: "hsla(0,0%,100%,.6)",
                        display: `flex`,
                        alignItems: `center`,
                     }}
                     component={`a`}
                     target="_blank"
                     href="https://drive.google.com/file/d/1MuBoo5Mk6jsV_zuVxvxmAgbnDIS5MmdK/view?usp=drive_link"
                  >
                     Link
                  </Box>
               </Stack>
            </Box>
         </Stack>
      ),
   },
];

type TProps = {
   dataEducations: TResonAction<TEducation[] | null>;
   dataCertification: TResonAction<TCertification[] | null>;
};
export default function Right({ dataEducations, dataCertification }: TProps) {
   const [status, setStatus] = useState(0);

   return (
      <>
         <Stack
            sx={{
               width: `100%`,
               flexDirection: `row`,
               alignItems: `baseline`,
               gap: `50px`,
               flexWrap: `wrap`,
            }}
         >
            {items.map((item, index) => {
               return (
                  <Typography
                     key={index}
                     sx={{
                        fontSize: `22px`,
                        fontWeight: `500`,
                        cursor: `pointer`,
                        color: status === index ? `#f44336` : `unset`,
                     }}
                     onClick={() => {
                        setStatus(index);
                     }}
                  >
                     {item.title}
                  </Typography>
               );
            })}
         </Stack>

         <Box
            sx={{
               mt: `30px`,
            }}
         >
            {status === 0 && items[`${status}`].info}

            {status === 1 && <Education dataEducations={dataEducations} />}

            {status === 2 && <Certification dataCertification={dataCertification} />}
         </Box>
      </>
   );
}
