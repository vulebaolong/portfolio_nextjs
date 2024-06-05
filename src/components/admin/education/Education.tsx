"use client";

import CardBody from "@/common/card/CardBody";
import CardContainer from "@/common/card/CardContainer";
import CardHeader from "@/common/card/CardHeader";
import DrawerEducationCreate from "@/common/drawers/DrawerEducationCreate";
import DrawerEducationEdit from "@/common/drawers/DrawerEducationEdit";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TEducation } from "@/types/respon/education.type";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

type TProps = {
   dataEducations: TResonAction<TEducation[] | null>;
};

export default function Education({ dataEducations }: TProps) {
   const [dataEducationEdit, setDataEducationEdit] = useState<TEducation | null>(null);

   const [
      openDrawerEducationCreate,
      handleCloseDrawerEducationCreate,
      handleOpenDrawerEducationCreate,
   ] = useDisclosure();

   const [openDrawerEducationEdit, handleCloseDrawerEducationEdit, handleOpenDrawerEducationEdit] =
      useDisclosure();

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
                     Education
                  </Typography>
                  <Button onClick={handleOpenDrawerEducationCreate} variant="contained">
                     Create Education
                  </Button>
               </Stack>
            </CardHeader>
            <CardBody>
               {dataEducations.data?.map((education) => {
                  return (
                     <Stack
                        key={education._id.toString()}
                        sx={{
                           gap: `20px`,
                           p: `20px`,
                           borderRadius: `20px`,
                           border: `1px solid rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
                           cursor: `pointer`,
                        }}
                        onClick={() => {
                           handleOpenDrawerEducationEdit();
                           setDataEducationEdit(education);
                        }}
                     >
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Title: </span>
                           <span>{education.title}</span>
                        </Typography>
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Description: </span>
                           <span>{education.description}</span>
                        </Typography>
                     </Stack>
                  );
               })}
            </CardBody>
         </CardContainer>
         <DrawerEducationCreate
            handleCloseDrawerEducationCreate={handleCloseDrawerEducationCreate}
            openDrawerEducationCreate={openDrawerEducationCreate}
         />
         {/* {dataEducationEdit && (
            <DrawerEducationEdit
               dataEducationEdit={dataEducationEdit}
               handleCloseDrawerEducationEdit={handleCloseDrawerEducationEdit}
               openDrawerEducationEdit={openDrawerEducationEdit}
            />
         )} */}
      </>
   );
}
