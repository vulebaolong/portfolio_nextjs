"use client";

import { createProjectAction } from "@/actions/project.action";
import { FB_FOLDER_LOGO, FB_FOLDER_PROJECT } from "@/constants/firebase.constant";
import { isFileSizeValid } from "@/helpers/function.helper";
import { deleteWithFirebase, uploadWithFirebase } from "@/libs/firebase.lib";
import { TPayloadProject, TTypeProject } from "@/types/respon/project.type";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import {
   Box,
   Button,
   Divider,
   Drawer,
   FormHelperText,
   MenuItem,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import PreviewImage from "./PreviewImage";

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
   openDrawerMyProjectCreate: boolean;
   handleCloseDrawerMyProjectCreate: () => void;
   dataTypeProjects: TResonAction<TTypeProject[] | null>;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerMyProjectCreate({
   openDrawerMyProjectCreate,
   handleCloseDrawerMyProjectCreate,
   dataTypeProjects,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [fileImgProject, setFileImgProject] = useState<File | null>(null);
   const [fileImgLogo, setFileImgLogo] = useState<File | null>(null);

   const createProjectForm = useFormik({
      initialValues: {
         title: ``,
         description: ``,
         platform: ``,
         type: ``,
         imgProject: ``,
         imgLogo: ``,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
         platform: Yup.string().trim().required(`Platform is required`),
         type: Yup.string().trim().required(`Type is required`),
         // imgProject: Yup.string().trim().required(`Image project is required`),
         // imgLogo: Yup.string().trim().required(`Image logo is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(valuesRaw);

         if (!fileImgProject) return toast.error("Not found file img project");
         if (!fileImgLogo) return toast.error("Not found file img logo");

         if (!isFileSizeValid(fileImgProject)) return toast.warning("File size failed > 1mb");
         if (!isFileSizeValid(fileImgLogo)) return toast.warning("File size failed > 1mb");

         setLoading(true);

         const imgProjectName = await uploadWithFirebase(fileImgProject, FB_FOLDER_PROJECT);
         if (!imgProjectName) return setLoading(false);

         const imgLogoName = await uploadWithFirebase(fileImgLogo, FB_FOLDER_LOGO);
         if (!imgLogoName) return setLoading(false);

         const payload: TPayloadProject = {
            description: valuesRaw.description,
            img_logo_name: imgLogoName,
            img_project_name: imgProjectName,
            platform: valuesRaw.platform,
            title: valuesRaw.title,
            type: valuesRaw.type,
         };

         const result = await createProjectAction(payload);
         setLoading(false);

         if (!result.status) {
            deleteWithFirebase(imgProjectName, FB_FOLDER_PROJECT);
            deleteWithFirebase(imgLogoName, FB_FOLDER_LOGO);
            toast.error(result.message);
            return;
         }

         createProjectForm.resetForm();
         setFileImgProject(null);
         setFileImgLogo(null);
         handleCloseDrawerMyProjectCreate();

         toast.success(result.message);
      },
   });

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerMyProjectCreate}
         onClose={handleCloseDrawerMyProjectCreate}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            // onSubmit={createProjectForm.handleSubmit}
         >
            {/* header */}
            <Stack
               sx={{
                  height: `${heightHeader}`,
                  alignItems: `start`,
                  justifyContent: `center`,
                  p: `20px 20px 10px`,
               }}
            >
               <Typography sx={{ fontSize: `20px`, fontWeight: `700` }}>Create Project</Typography>
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
               {/* title */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="title"
                  label="Title"
                  name="title"
                  value={createProjectForm.values.title}
                  onChange={createProjectForm.handleChange}
                  error={
                     createProjectForm.touched.title && createProjectForm.errors.title !== undefined
                  }
                  helperText={createProjectForm.touched.title && createProjectForm.errors.title}
                  variant="outlined"
               />

               {/* platform */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="platform"
                  label="Platform"
                  name="platform"
                  value={createProjectForm.values.platform}
                  onChange={createProjectForm.handleChange}
                  error={
                     createProjectForm.touched.platform &&
                     createProjectForm.errors.platform !== undefined
                  }
                  helperText={
                     createProjectForm.touched.platform && createProjectForm.errors.platform
                  }
                  variant="outlined"
               />

               {/* type */}
               <TextField
                  sx={{ width: `100%` }}
                  select
                  label="Type"
                  name="type"
                  onChange={createProjectForm.handleChange}
                  value={createProjectForm.values.type}
                  error={
                     createProjectForm.touched.type && createProjectForm.errors.type !== undefined
                  }
                  helperText={createProjectForm.touched.type && createProjectForm.errors.type}
               >
                  {dataTypeProjects?.data?.map((option) => (
                     <MenuItem key={option._id.toString()} value={option._id.toString()}>
                        {option.type}
                     </MenuItem>
                  ))}
               </TextField>

               {/* description */}
               <TextField
                  sx={{ width: `100%` }}
                  multiline
                  rows={10}
                  autoComplete="description"
                  label="Description"
                  name="description"
                  value={createProjectForm.values.description}
                  onChange={createProjectForm.handleChange}
                  error={
                     createProjectForm.touched.description &&
                     createProjectForm.errors.description !== undefined
                  }
                  helperText={
                     createProjectForm.touched.description && createProjectForm.errors.description
                  }
                  variant="outlined"
               />

               <Divider />

               {/* img project */}
               <Box>
                  <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                     Image Project
                     <Box
                        sx={{
                           clip: "rect(0 0 0 0)",
                           clipPath: "inset(50%)",
                           height: 1,
                           overflow: "hidden",
                           position: "absolute",
                           bottom: 0,
                           left: 0,
                           whiteSpace: "nowrap",
                           width: 1,
                        }}
                        component={`input`}
                        type="file"
                        accept="image/*"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           if (e.target.files && e.target.files.length > 0) {
                              const file = e.target.files[0];
                              setFileImgProject(file);
                              createProjectForm.setFieldValue("imgProject", file.name);
                           }
                        }}
                     />
                  </Button>
                  {fileImgProject && <PreviewImage file={fileImgProject} />}
                  {fileImgProject ? (
                     <FormHelperText sx={{ px: `14px` }}>{fileImgProject.name}</FormHelperText>
                  ) : (
                     <FormHelperText
                        sx={{ px: `14px` }}
                        error={
                           createProjectForm.touched.imgProject &&
                           createProjectForm.errors.imgProject !== undefined
                        }
                     >
                        {createProjectForm.touched.imgProject &&
                           createProjectForm.errors.imgProject}
                     </FormHelperText>
                  )}
               </Box>

               <Divider />

               {/* img logo */}
               <Box>
                  <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                     Image Logo
                     <Box
                        sx={{
                           clip: "rect(0 0 0 0)",
                           clipPath: "inset(50%)",
                           height: 1,
                           overflow: "hidden",
                           position: "absolute",
                           bottom: 0,
                           left: 0,
                           whiteSpace: "nowrap",
                           width: 1,
                        }}
                        component={`input`}
                        type="file"
                        accept="image/*"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           if (e.target.files && e.target.files.length > 0) {
                              const file = e.target.files[0];
                              setFileImgLogo(file);
                              createProjectForm.setFieldValue("imgLogo", file.name);
                           }
                        }}
                     />
                  </Button>
                  {fileImgLogo && <PreviewImage file={fileImgLogo} />}
                  {fileImgLogo ? (
                     <FormHelperText sx={{ px: `14px` }}>{fileImgLogo.name}</FormHelperText>
                  ) : (
                     <FormHelperText
                        sx={{ px: `14px` }}
                        error={
                           createProjectForm.touched.imgLogo &&
                           createProjectForm.errors.imgLogo !== undefined
                        }
                     >
                        {createProjectForm.touched.imgLogo && createProjectForm.errors.imgLogo}
                     </FormHelperText>
                  )}
               </Box>
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
               <Button onClick={handleCloseDrawerMyProjectCreate}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     createProjectForm.handleSubmit();
                  }}
                  // type="submit"
                  loading={loading}
                  loadingPosition="end"
                  endIcon={<SendRoundedIcon sx={{ fontSize: `16px !important` }} />}
                  variant="contained"
                  size="large"
               >
                  Create
               </LoadingButton>
            </Stack>
         </Box>
      </Drawer>
   );
}
