"use client";

import CardBody from "@/common/card/CardBody";
import CardContainer from "@/common/card/CardContainer";
import CardHeader from "@/common/card/CardHeader";
import DrawerTextInPageCreate from "@/common/drawers/DrawerTextInPageCreate";
import DrawerTextInPageEdit from "@/common/drawers/DrawerTextInPageEdit";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

type TProps = {
   dataTextInPage: TResonAction<TTextInPage[] | null>;
};
export default function TextInPage({ dataTextInPage }: TProps) {
   const [dataTextInPageEdit, setDataTextInPageEdit] = useState<TTextInPage | null>(null);

   const [openDrawerTextInPageEdit, handleDrawerTextInPageEdit] = useDisclosure();

   const [openDrawerTextInPageCreate, handleDrawerTextInPageCreate] = useDisclosure();

   return (
      <>
         <CardContainer>
            <CardHeader>
               <Stack
                  sx={{
                     flexDirection: `row`,
                     alignItems: `center`,
                     justifyContent: `space-between`,
                     pb: `20px`,
                  }}
               >
                  <Typography variant="h1" sx={{ fontSize: `30px`, fontWeight: `600` }}>
                     Text in page
                  </Typography>
                  <Button onClick={handleDrawerTextInPageCreate.open} variant="contained">
                     Create text
                  </Button>
               </Stack>
            </CardHeader>

            <CardBody>
               <Stack sx={{ gap: `20px` }}>
                  {dataTextInPage.data?.map((textInPage) => {
                     return (
                        <Stack
                           key={textInPage._id.toString()}
                           sx={{
                              gap: `20px`,
                              p: `20px`,
                              borderRadius: `20px`,
                              border: `1px solid rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
                              cursor: `pointer`,
                           }}
                           onClick={() => {
                              handleDrawerTextInPageEdit.open();
                              setDataTextInPageEdit(textInPage);
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
               </Stack>
            </CardBody>
         </CardContainer>

         <DrawerTextInPageCreate
            handleCloseDrawerTextInPageCreate={handleDrawerTextInPageCreate.close}
            openDrawerTextInPageCreate={openDrawerTextInPageCreate}
         />
         {dataTextInPageEdit && (
            <DrawerTextInPageEdit
               dataTextInPageEdit={dataTextInPageEdit}
               handleCloseDrawerTextInPageEdit={handleDrawerTextInPageEdit.close}
               openDrawerTextInPageEdit={openDrawerTextInPageEdit}
            />
         )}
      </>
   );
}
