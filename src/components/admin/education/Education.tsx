"use client";

import CardBody from "@/common/card/CardBody";
import CardContainer from "@/common/card/CardContainer";
import CardHeader from "@/common/card/CardHeader";
import DrawerEducationCreate from "@/common/drawers/DrawerEducationCreate";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Button, Stack, Typography } from "@mui/material";

export default function Education() {
   const [
      openDrawerEducationCreate,
      handleCloseDrawerEducationCreate,
      handleOpenDrawerEducationCreate,
   ] = useDisclosure();

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
               {Array.from({ length: 5 }, () => ``).map((_, i) => {
                  return (
                     <Stack
                        key={i}
                        sx={{
                           gap: `20px`,
                           p: `20px`,
                           borderRadius: `20px`,
                           border: `1px solid rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
                           cursor: `pointer`,
                        }}
                        // onClick={() => {
                        //    handleOpenDrawerTextInPageEdit();
                        //    setDataTextInPageEdit(textInPage);
                        // }}
                     >
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Page: </span>
                           <span>title</span>
                        </Typography>
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Title: </span>
                           <span>description</span>
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
      </>
   );
}
