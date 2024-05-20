"use client";

import { deleteProjectAction, updateProjectAction } from "@/actions/project.action";
import { FB_BASE, FB_FOLDER_LOGO, FB_FOLDER_PROJECT } from "@/constants/firebase.constant";
import { deleteWithFirebase, uploadWithFirebase } from "@/libs/firebase.lib";
import {
   TPayloadEditProject,
   TPayloadProject,
   TProject,
   TTypeProject,
} from "@/types/respon/project.type";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import {
   Box,
   Button,
   CircularProgress,
   Divider,
   Drawer,
   FormHelperText,
   IconButton,
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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";

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
   dataTypeProjects: TResonAction<TTypeProject[] | null>;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerMyProjectEdit({
   openDrawerMyProjectEdit,
   handleCloseDrawerMyProjectEdit,
   dataMyProjectEdit,
   dataTypeProjects,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

   const [fileImgProject, setFileImgProject] = useState<File | null>(null);
   const [fileImgLogo, setFileImgLogo] = useState<File | null>(null);

   const editProjectForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         title: dataMyProjectEdit.title,
         description: dataMyProjectEdit.description,
         platform: dataMyProjectEdit.platform,
         type: dataMyProjectEdit.type,
         imgProject: dataMyProjectEdit.img_project_name,
         imgLogo: dataMyProjectEdit.img_logo_name,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
         platform: Yup.string().trim().required(`Platform is required`),
         type: Yup.string().trim().required(`Type is required`),
         imgProject: Yup.string().trim().required(`Image project is required`),
         imgLogo: Yup.string().trim().required(`Image logo is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         setLoading(true);

         if (fileImgProject) {
            const imgProjectName = await uploadWithFirebase(fileImgProject, FB_FOLDER_PROJECT);
            if (imgProjectName) {
               deleteWithFirebase(dataMyProjectEdit.img_project_name, FB_FOLDER_PROJECT);
               valuesRaw.imgProject = imgProjectName;
            } else {
               return setLoading(false);
            }
         }

         if (fileImgLogo) {
            const imgLogoName = await uploadWithFirebase(fileImgLogo, FB_FOLDER_LOGO);
            if (imgLogoName) {
               deleteWithFirebase(dataMyProjectEdit.img_logo_name, FB_FOLDER_LOGO);
               valuesRaw.imgLogo = imgLogoName;
            } else {
               return setLoading(false);
            }
         }

         const payload: TPayloadEditProject = {
            _id: dataMyProjectEdit._id,
            description: valuesRaw.description,
            img_logo_name: valuesRaw.imgLogo,
            img_project_name: valuesRaw.imgProject,
            platform: valuesRaw.platform,
            title: valuesRaw.title,
            type: valuesRaw.type,
         };

         const result = await updateProjectAction(payload);
         console.log(result);
         setLoading(false);

         if (!result.status) {
            deleteWithFirebase(valuesRaw.imgProject, FB_FOLDER_PROJECT);
            deleteWithFirebase(valuesRaw.imgLogo, FB_FOLDER_LOGO);
            toast.error(result.message);
            return;
         }

         setFileImgProject(null);
         setFileImgLogo(null);
         handleCloseDrawerMyProjectEdit();

         toast.success(result.message);
      },
   });

   const handleDeleteProject = async () => {
      setLoadingDelete(true);

      deleteWithFirebase(dataMyProjectEdit.img_project_name, FB_FOLDER_PROJECT);

      deleteWithFirebase(dataMyProjectEdit.img_logo_name, FB_FOLDER_LOGO);

      const reuslt = await deleteProjectAction(dataMyProjectEdit._id);
      setLoadingDelete(false);

      if (reuslt.status === false) return toast.error(reuslt.message);

      editProjectForm.resetForm();
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
            onSubmit={editProjectForm.handleSubmit}
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
               {/* title */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="title"
                  label="Title"
                  name="title"
                  value={editProjectForm.values.title}
                  onChange={editProjectForm.handleChange}
                  error={
                     editProjectForm.touched.title && editProjectForm.errors.title !== undefined
                  }
                  helperText={editProjectForm.touched.title && editProjectForm.errors.title}
                  variant="outlined"
               />

               {/* platform */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="platform"
                  label="Platform"
                  name="platform"
                  value={editProjectForm.values.platform}
                  onChange={editProjectForm.handleChange}
                  error={
                     editProjectForm.touched.platform &&
                     editProjectForm.errors.platform !== undefined
                  }
                  helperText={editProjectForm.touched.platform && editProjectForm.errors.platform}
                  variant="outlined"
               />

               {/* type */}
               <TextField
                  sx={{ width: `100%` }}
                  select
                  label="Type"
                  name="type"
                  onChange={editProjectForm.handleChange}
                  value={editProjectForm.values.type}
                  error={editProjectForm.touched.type && editProjectForm.errors.type !== undefined}
                  helperText={editProjectForm.touched.type && editProjectForm.errors.type}
               >
                  {dataTypeProjects?.data?.map((option) => (
                     <MenuItem key={option._id.toString()} value={option.type}>
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
                  value={editProjectForm.values.description}
                  onChange={editProjectForm.handleChange}
                  error={
                     editProjectForm.touched.description &&
                     editProjectForm.errors.description !== undefined
                  }
                  helperText={
                     editProjectForm.touched.description && editProjectForm.errors.description
                  }
                  variant="outlined"
               />

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
                              editProjectForm.setFieldValue("imgProject", file.name);
                           }
                        }}
                     />
                  </Button>
                  {fileImgProject ? (
                     <PreviewImage file={fileImgProject} />
                  ) : (
                     <Box
                        sx={{
                           mt: `10px`,
                           width: "100px",
                           height: "100px",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                        overflow={"hidden"}
                     >
                        <Image
                           src={`${FB_BASE}${FB_FOLDER_PROJECT}%2F${dataMyProjectEdit.img_project_name}?alt=media`}
                           alt="preview"
                           width={0}
                           height={0}
                           sizes="30vw"
                           style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: `10px`,
                           }}
                        />
                     </Box>
                  )}
                  {fileImgProject ? (
                     <FormHelperText sx={{ px: `14px` }}>{fileImgProject.name}</FormHelperText>
                  ) : (
                     <FormHelperText sx={{ px: `14px` }}>
                        {dataMyProjectEdit.img_project_name}
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
                              editProjectForm.setFieldValue("imgLogo", file.name);
                           }
                        }}
                     />
                  </Button>
                  {fileImgLogo ? (
                     <PreviewImage file={fileImgLogo} />
                  ) : (
                     <Box
                        sx={{
                           mt: `10px`,
                           width: "100px",
                           height: "100px",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                        overflow={"hidden"}
                     >
                        <Image
                           src={`${FB_BASE}${FB_FOLDER_LOGO}%2F${dataMyProjectEdit.img_logo_name}?alt=media`}
                           alt="preview"
                           width={0}
                           height={0}
                           sizes="30vw"
                           style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: `10px`,
                           }}
                        />
                     </Box>
                  )}
                  {fileImgLogo ? (
                     <FormHelperText sx={{ px: `14px` }}>{fileImgLogo.name}</FormHelperText>
                  ) : (
                     <FormHelperText sx={{ px: `14px` }}>
                        {dataMyProjectEdit.img_logo_name}
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
               <Button onClick={handleCloseDrawerMyProjectEdit}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     editProjectForm.handleSubmit();
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
