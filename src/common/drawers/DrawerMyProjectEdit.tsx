"use client";

import { deleteProject } from "@/actions/project.action";
import { FB_FOLDER_LOGO, FB_FOLDER_PROJECT } from "@/constants/firebase.constant";
import { deleteWithFirebase } from "@/libs/firebase.lib";
import { TProject } from "@/types/respon/project.type";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import {
   Box,
   Button,
   CircularProgress,
   Drawer,
   IconButton,
   MenuItem,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const currencies = [
   {
      value: "Fe Development",
      label: "Fe Development",
   },
   {
      value: "Be Development",
      label: "Be Development",
   },
];

type TProps = {
   openDrawerMyProjectEdit: boolean;
   handleCloseDrawerMyProjectEdit: () => void;
   dataMyProjectEdit: TProject;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerMyProjectEdit({
   openDrawerMyProjectEdit,
   handleCloseDrawerMyProjectEdit,
   dataMyProjectEdit,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

   const contactForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         title: dataMyProjectEdit.title,
         description: dataMyProjectEdit.description,
         platform: dataMyProjectEdit.platform,
         type: dataMyProjectEdit.type,
         img_project_path: ``,
         img_logo_path: ``,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
         platform: Yup.string().trim().required(`Platform is required`),
         type: Yup.string().trim().required(`Type is required`),
         img_project_path: Yup.string().trim().required(`Image project is required`),
         img_logo_path: Yup.string().trim().required(`Image logo is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(valuesRaw);

         // setLoading(true);
         // const result = await createProjectAction(valuesRaw);
         // console.log(result);
         // setLoading(false);

         // if (!result.status) return toast.error(result.message);

         // contactForm.resetForm();

         // toast.success(result.message);
      },
   });

   const handleDeleteProject = async () => {
      setLoadingDelete(true);

      deleteWithFirebase(dataMyProjectEdit.img_project_name, FB_FOLDER_PROJECT);

      deleteWithFirebase(dataMyProjectEdit.img_logo_name, FB_FOLDER_LOGO);

      const reuslt = await deleteProject(dataMyProjectEdit._id);
      setLoadingDelete(false);

      if (reuslt.status === false) return toast.error(reuslt.message);

      contactForm.resetForm();
      handleCloseDrawerMyProjectEdit();
      
      toast.success(reuslt.message);
   };

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerMyProjectEdit}
         onClose={handleCloseDrawerMyProjectEdit}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={contactForm.handleSubmit}
         >
            {/* header */}
            <Stack
               sx={{
                  height: `${heightHeader}`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                  p: `20px 20px 10px`,
                  flexDirection: `row`,
               }}
            >
               <Typography sx={{ fontSize: `20px`, fontWeight: `700` }}>
                  <span>Edit Project </span>
                  <span style={{ fontWeight: `400`, fontSize: `14px` }}>
                     - {dataMyProjectEdit._id.toString()}
                  </span>
               </Typography>
               <IconButton
                  disabled={loadingDelete}
                  color="error"
                  size="large"
                  onClick={handleDeleteProject}
               >
                  {loadingDelete ? <CircularProgress size={20} /> : <DeleteRoundedIcon />}
               </IconButton>
            </Stack>

            {/* body */}
            <Stack
               sx={{
                  height: `calc(100vh - (${heightHeader} + ${heightFooter}))`,
                  p: `10px 20px`,
                  rowGap: `20px`,
                  overflowY: `auto`,
               }}
            >
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="title"
                  label="Title"
                  name="title"
                  value={contactForm.values.title}
                  onChange={contactForm.handleChange}
                  error={contactForm.touched.title && contactForm.errors.title !== undefined}
                  helperText={contactForm.touched.title && contactForm.errors.title}
                  variant="outlined"
               />
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="platform"
                  label="Platform"
                  name="platform"
                  value={contactForm.values.platform}
                  onChange={contactForm.handleChange}
                  error={contactForm.touched.platform && contactForm.errors.platform !== undefined}
                  helperText={contactForm.touched.platform && contactForm.errors.platform}
                  variant="outlined"
               />
               <TextField
                  sx={{ width: `100%` }}
                  select
                  label="Type"
                  name="type"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.type}
                  error={contactForm.touched.type && contactForm.errors.type !== undefined}
                  helperText={contactForm.touched.type && contactForm.errors.type}
               >
                  {currencies.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                        {option.label}
                     </MenuItem>
                  ))}
               </TextField>
               <TextField
                  sx={{ width: `100%` }}
                  multiline
                  rows={10}
                  autoComplete="description"
                  label="Description"
                  name="description"
                  value={contactForm.values.description}
                  onChange={contactForm.handleChange}
                  error={
                     contactForm.touched.description && contactForm.errors.description !== undefined
                  }
                  helperText={contactForm.touched.description && contactForm.errors.description}
                  variant="outlined"
               />

               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="img_project_path"
                  label="Image Project"
                  name="img_project_path"
                  value={contactForm.values.img_project_path}
                  onChange={contactForm.handleChange}
                  error={
                     contactForm.touched.img_project_path &&
                     contactForm.errors.img_project_path !== undefined
                  }
                  helperText={
                     contactForm.touched.img_project_path && contactForm.errors.img_project_path
                  }
                  variant="outlined"
               />
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="img_logo_path"
                  label="Image Logo"
                  name="img_logo_path"
                  value={contactForm.values.img_logo_path}
                  onChange={contactForm.handleChange}
                  error={
                     contactForm.touched.img_logo_path &&
                     contactForm.errors.img_logo_path !== undefined
                  }
                  helperText={contactForm.touched.img_logo_path && contactForm.errors.img_logo_path}
                  variant="outlined"
               />
            </Stack>

            {/* footer */}
            <Stack
               sx={{
                  height: `${heightFooter}`,
                  flexDirection: `row`,
                  p: `10px 20px 20px`,
                  gap: `20px`,
               }}
            >
               <Button onClick={handleCloseDrawerMyProjectEdit}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     contactForm.handleSubmit();
                  }}
                  loading={loading}
                  loadingPosition="end"
                  endIcon={<SendRoundedIcon sx={{ fontSize: `16px !important` }} />}
                  variant="contained"
                  size="large"
               >
                  Edit
               </LoadingButton>
            </Stack>
         </Box>
      </Drawer>
   );
}
