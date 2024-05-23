import { TTextInPage } from "@/types/respon/text-in-page.type";
import { Stack, TextField, Typography } from "@mui/material";

type TProps = {
   dataTextInPage: TResonAction<TTextInPage[] | null>;
};
export default function TextInPage({ dataTextInPage }: TProps) {
   return (
      <>
         {dataTextInPage.data?.map((textInPage) => {
            return (
               <Stack
                  key={textInPage._id.toString()}
                  sx={{
                     gap: `20px`,
                     p: `20px`,
                     borderRadius: `20px`,
                     // border: `1 solid rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
                  }}
               >
                  <Typography sx={{ fontSize: `20px` }}>
                     <span style={{ fontWeight: `700` }}>Page: </span>
                     <span>{textInPage.page}</span>
                  </Typography>
                  <Typography sx={{ fontSize: `20px` }}>
                     <span style={{ fontWeight: `700` }}>Title: </span>
                     <span>{textInPage.title}</span>
                  </Typography>{" "}
                  <Typography sx={{ fontSize: `20px` }}>
                     <span style={{ fontWeight: `700` }}>Description: </span>
                     <span>{textInPage.description}</span>
                  </Typography>
               </Stack>
            );
         })}
      </>
   );
}
