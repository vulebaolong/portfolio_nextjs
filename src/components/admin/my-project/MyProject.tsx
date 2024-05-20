"use client";

import DrawerMyProjectCreate from "@/common/drawers/DrawerMyProjectCreate";
import DrawerMyProjectEdit from "@/common/drawers/DrawerMyProjectEdit";
import ProjectItem from "@/components/root/project/ProjectItem";
import { TProject, TTypeProject } from "@/types/respon/project.type";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

const basePath = `/images/project/`;

type TProps = {
   dataProjects: TResonAction<TProject[] | null>;
   dataTypeProjects: TResonAction<TTypeProject[] | null>;
};

export default function MyProject({ dataProjects, dataTypeProjects }: TProps) {
   const [openDrawerMyProjectCreate, setOpenDrawerMyProjectCreate] = useState(false);
   const handleCloseDrawerMyProjectCreate = () => setOpenDrawerMyProjectCreate(false);
   const handleOpenDrawerMyProjectCreate = () => setOpenDrawerMyProjectCreate(true);

   const [openDrawerMyProjectEdit, setOpenDrawerMyProjectEdit] = useState(false);
   const handleCloseDrawerMyProjectEdit = () => setOpenDrawerMyProjectEdit(false);
   const handleOpenDrawerMyProjectEdit = () => setOpenDrawerMyProjectEdit(true);

   const [dataMyProjectEdit, setDataMyProjectEdit] = useState<TProject | null>(null);

   return (
      <>
         <IconButton
            onClick={handleOpenDrawerMyProjectCreate}
            size="large"
            sx={{ position: `fixed`, zIndex: `10`, bottom: `20px`, right: `20px` }}
            color="info"
         >
            <AddCircleOutlineRoundedIcon />
         </IconButton>
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
                        handleOpenDrawerMyProjectEdit();
                        setDataMyProjectEdit(project);
                     }}
                  >
                     <ProjectItem project={project} index={index} />
                  </Box>
               ))}
         </Box>
         <DrawerMyProjectCreate
            handleCloseDrawerMyProjectCreate={handleCloseDrawerMyProjectCreate}
            openDrawerMyProjectCreate={openDrawerMyProjectCreate}
            dataTypeProjects={dataTypeProjects}
         />
         {dataMyProjectEdit && (
            <DrawerMyProjectEdit
               handleCloseDrawerMyProjectEdit={handleCloseDrawerMyProjectEdit}
               openDrawerMyProjectEdit={openDrawerMyProjectEdit}
               dataMyProjectEdit={dataMyProjectEdit}
               dataTypeProjects={dataTypeProjects}
            />
         )}
      </>
   );
}
