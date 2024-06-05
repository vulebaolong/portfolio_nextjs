"use client";

import DrawerTextInPageCreate from "@/common/drawers/DrawerTextInPageCreate";
import DrawerTextInPageEdit from "@/common/drawers/DrawerTextInPageEdit";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

type TProps = {
   dataTextInPage: TResonAction<TTextInPage[] | null>;
};
export default function TextInPage({ dataTextInPage }: TProps) {
   const [dataTextInPageEdit, setDataTextInPageEdit] = useState<TTextInPage | null>(null);

   const [
      openDrawerTextInPageEdit,
      handleCloseDrawerTextInPageEdit,
      handleOpenDrawerTextInPageEdit,
   ] = useDisclosure();

   const [
      openDrawerTextInPageCreate,
      handleCloseDrawerTextInPageCreate,
      handleOpenDrawerTextInPageCreate,
   ] = useDisclosure();

   return (
      <>
         <Box sx={{ position: `fixed`, zIndex: `10`, bottom: `20px`, right: `20px` }}>
            <IconButton onClick={handleOpenDrawerTextInPageCreate} size="large" color="info">
               <AddCircleOutlineRoundedIcon />
            </IconButton>
         </Box>
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
                        handleOpenDrawerTextInPageEdit();
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
         <DrawerTextInPageCreate
            handleCloseDrawerTextInPageCreate={handleCloseDrawerTextInPageCreate}
            openDrawerTextInPageCreate={openDrawerTextInPageCreate}
         />
         {dataTextInPageEdit && (
            <DrawerTextInPageEdit
               dataTextInPageEdit={dataTextInPageEdit}
               handleCloseDrawerTextInPageEdit={handleCloseDrawerTextInPageEdit}
               openDrawerTextInPageEdit={openDrawerTextInPageEdit}
            />
         )}
      </>
   );
}
