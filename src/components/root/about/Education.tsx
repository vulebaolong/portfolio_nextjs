import { TEducation } from "@/types/respon/education.type";
import { Stack, Typography } from "@mui/material";

type TProps = {
   dataEducations: TResonAction<TEducation[] | null>;
};

export default function Education({ dataEducations }: TProps) {
   return (
      <Stack gap={`20px`}>
         {dataEducations.data?.map((education) => {
            console.log(education);
            return (
               <Typography
                  key={education._id.toString()}
                  sx={{
                     color: "hsla(0,0%,100%,.6)",
                     fontSize: `16px`,
                     lineHeight: `2`,
                  }}
               >
                  {education.title}
                  <br />
                  {education.description}
               </Typography>
            );
         })}
      </Stack>
   );
}
