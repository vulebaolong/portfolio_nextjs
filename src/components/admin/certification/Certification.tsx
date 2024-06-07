"use client";

import CardBody from "@/common/card/CardBody";
import CardContainer from "@/common/card/CardContainer";
import CardHeader from "@/common/card/CardHeader";
import DrawerCertificationCreate from "@/common/drawers/DrawerCertificationCreate";
import DrawerCertificationEdit from "@/common/drawers/DrawerCertificationEdit";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TCertification } from "@/types/respon/certification.type";
import { Button, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

type TProps = {
   dataCertification: TResonAction<TCertification[] | null>;
};

export default function Certification({ dataCertification }: TProps) {
   const [dataCertificationEdit, setDataCertificationEdit] = useState<TCertification | null>(null);

   const [openDrawerCertificationCreate, handleDrawerCertificationCreate] = useDisclosure();

   const [openDrawerCertificationEdit, handleDrawerCertificationEdit] = useDisclosure();

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
                     Certification
                  </Typography>
                  <Button onClick={handleDrawerCertificationCreate.open} variant="contained">
                     Create Certification
                  </Button>
               </Stack>
            </CardHeader>
            <CardBody>
               {dataCertification?.data?.map((Certification) => {
                  return (
                     <Stack
                        key={Certification._id.toString()}
                        sx={{
                           gap: `20px`,
                           p: `20px`,
                           borderRadius: `20px`,
                           border: `1px solid rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23)`,
                           cursor: `pointer`,
                        }}
                        onClick={() => {
                           handleDrawerCertificationEdit.open();
                           setDataCertificationEdit(Certification);
                        }}
                     >
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Title: </span>
                           <span>{Certification.title}</span>
                        </Typography>
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Link: </span>
                           <span>{Certification.link}</span>
                        </Typography>
                        <Typography sx={{ fontSize: `20px` }}>
                           <span style={{ fontWeight: `700` }}>Date: </span>
                           <span>{dayjs(Certification.date).format("DD/MM/YYYY")}</span>
                        </Typography>
                     </Stack>
                  );
               })}
            </CardBody>
         </CardContainer>
         <DrawerCertificationCreate
            handleCloseDrawerCertificationCreate={handleDrawerCertificationCreate.close}
            openDrawerCertificationCreate={openDrawerCertificationCreate}
         />
         <DrawerCertificationEdit
            dataCertificationEdit={dataCertificationEdit}
            handleCloseDrawerCertificationEdit={handleDrawerCertificationEdit.close}
            openDrawerCertificationEdit={openDrawerCertificationEdit}
         />
      </>
   );
}
