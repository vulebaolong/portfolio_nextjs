"use client";

import ProjectItem from "@/components/root/project/ProjectItem";
import { ROUTER } from "@/constants/router.constant";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MyProjectCreate from "./MyProjectCreate";
import DrawerMyProjectCreate from "@/common/drawers/DrawerMyProjectCreate";
import DrawerMyProjectEdit from "@/common/drawers/DrawerMyProjectEdit";
import { TProject } from "@/types/respon/project.type";

const basePath = `/images/project/`;

type TProps = {
   dataProjects: TResonAction<TProject[] | null>;
};

export default function MyProject({ dataProjects }: TProps) {
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
         />
         {dataMyProjectEdit && (
            <DrawerMyProjectEdit
               handleCloseDrawerMyProjectEdit={handleCloseDrawerMyProjectEdit}
               openDrawerMyProjectEdit={openDrawerMyProjectEdit}
               dataMyProjectEdit={dataMyProjectEdit}
            />
         )}
      </>
   );
}
