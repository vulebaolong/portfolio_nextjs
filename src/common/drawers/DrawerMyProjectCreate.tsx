"use client";

import { createProjectAction } from "@/actions/project.action";
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
import { uploadWithFirebase } from "@/libs/firebase.lib";
import { isExtImage, isFileSizeValid } from "@/helpers/function.helper";
import { TPayloadProject, TProject } from "@/types/respon/project.type";
import { FB_FOLDER_LOGO, FB_FOLDER_PROJECT } from "@/constants/firebase.constant";

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
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerMyProjectCreate({
   openDrawerMyProjectCreate,
   handleCloseDrawerMyProjectCreate,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [fileImgProject, setFileImgProject] = useState<File | null>(null);
   const [fileImgLogo, setFileImgLogo] = useState<File | null>(null);

   const contactForm = useFormik({
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
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         contactForm.resetForm();
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
            // onSubmit={contactForm.handleSubmit}
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
                  value={contactForm.values.title}
                  onChange={contactForm.handleChange}
                  error={contactForm.touched.title && contactForm.errors.title !== undefined}
                  helperText={contactForm.touched.title && contactForm.errors.title}
                  variant="outlined"
               />

               {/* platform */}
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

               {/* type */}
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

               {/* description */}
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

               <Divider />

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
                              contactForm.setFieldValue("imgProject", file.name);
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
                           contactForm.touched.imgProject &&
                           contactForm.errors.imgProject !== undefined
                        }
                     >
                        {contactForm.touched.imgProject && contactForm.errors.imgProject}
                     </FormHelperText>
                  )}
               </Box>

               <Divider />

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
                              contactForm.setFieldValue("imgLogo", file.name);
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
                           contactForm.touched.imgLogo && contactForm.errors.imgLogo !== undefined
                        }
                     >
                        {contactForm.touched.imgLogo && contactForm.errors.imgLogo}
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
                     contactForm.handleSubmit();
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
