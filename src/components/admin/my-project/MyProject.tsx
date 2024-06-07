"use client";

import CardBody from "@/common/card/CardBody";
import CardContainer from "@/common/card/CardContainer";
import CardHeader from "@/common/card/CardHeader";
import DrawerMyProjectCreate from "@/common/drawers/DrawerMyProjectCreate";
import DrawerMyProjectEdit from "@/common/drawers/DrawerMyProjectEdit";
import ProjectItem from "@/components/root/project/ProjectItem";
import { useDisclosure } from "@/hooks/useDisclosure";
import { TProject, TTypeProject } from "@/types/respon/project.type";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const basePath = `/images/project/`;

type TProps = {
   dataProjects: TResonAction<TProject[] | null>;
   dataTypeProjects: TResonAction<TTypeProject[] | null>;
};

export default function MyProject({ dataProjects, dataTypeProjects }: TProps) {
   const [openDrawerMyProjectCreate, handleDrawerMyProjectCreate] = useDisclosure();

   const [openDrawerMyProjectEdit, handleDrawerMyProjectEdit] = useDisclosure();

   const [dataMyProjectEdit, setDataMyProjectEdit] = useState<TProject | null>(null);

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
                     Project
                  </Typography>
                  <Button onClick={handleDrawerMyProjectCreate.open} variant="contained">
                     Create project
                  </Button>
               </Stack>
            </CardHeader>

            <CardBody>
               <Box
                  sx={{
                     display: `grid`,
                     justifyItems: `center`,
                     gridTemplateColumns: {
                        xs: `1fr`,
                        lg: `1fr 1fr`,
                     },
                     gap: `50px`,
                  }}
               >
                  {dataProjects.status &&
                     dataProjects.data?.map((project, index) => (
                        <Box
                           key={project._id.toString()}
                           onClick={() => {
                              handleDrawerMyProjectEdit.open();
                              setDataMyProjectEdit(project);
                           }}
                        >
                           <ProjectItem project={project} index={index} />
                        </Box>
                     ))}
               </Box>
            </CardBody>
         </CardContainer>

         <DrawerMyProjectCreate
            handleCloseDrawerMyProjectCreate={handleDrawerMyProjectCreate.close}
            openDrawerMyProjectCreate={openDrawerMyProjectCreate}
            dataTypeProjects={dataTypeProjects}
         />
         {dataMyProjectEdit && (
            <DrawerMyProjectEdit
               handleCloseDrawerMyProjectEdit={handleDrawerMyProjectEdit.close}
               openDrawerMyProjectEdit={openDrawerMyProjectEdit}
               dataMyProjectEdit={dataMyProjectEdit}
               dataTypeProjects={dataTypeProjects}
            />
         )}
      </>
   );
}
