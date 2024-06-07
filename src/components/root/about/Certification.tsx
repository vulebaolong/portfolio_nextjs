import { TCertification } from "@/types/respon/certification.type";
import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { BsLink45Deg } from "react-icons/bs";

type TProps = {
   dataCertification: TResonAction<TCertification[] | null>;
};

export default function Certification({ dataCertification }: TProps) {
   return (
      <Stack gap={`10px`}>
         {dataCertification.data?.map((certification) => {
            return (
               <Box key={certification._id.toString()}>
                  <Typography
                     sx={{
                        color: "hsla(0,0%,100%,.6)",
                        fontSize: `16px`,
                        lineHeight: `2`,
                     }}
                  >
                     {certification.title}
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
                     Date: {dayjs(certification.date).format("DD/MM/YYYY")} -
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
                        href={certification.link}
                     >
                        Link
                     </Box>
                  </Stack>
               </Box>
            );
         })}
      </Stack>
   );
}
