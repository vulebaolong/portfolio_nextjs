"use client";

import { deleteEducationAction, updateEducationAction } from "@/actions/education.action";
import { deleteTextInPageAction, updateTextInPageAction } from "@/actions/title-in-page.action";
import { TEducation } from "@/types/respon/education.type";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import {
   Box,
   Button,
   CircularProgress,
   Drawer,
   IconButton,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

type TProps = {
   openDrawerEducationEdit: boolean;
   handleCloseDrawerEducationEdit: () => void;
   dataEducationEdit: TEducation;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerEducationEdit({
   openDrawerEducationEdit,
   handleCloseDrawerEducationEdit,
   dataEducationEdit,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

   const editEducationForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         title: dataEducationEdit.title,
         description: dataEducationEdit.description,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         setLoading(true);

         const payload: TEducation = {
            _id: dataEducationEdit._id,
            description: valuesRaw.description,
            title: valuesRaw.title,
         };

         console.log(payload);

         const result = await updateEducationAction(payload);
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         handleCloseDrawerEducationEdit();

         toast.success(result.message);
      },
   });

   const handleDeleteTextInPage = async () => {
      setLoadingDelete(true);

      const reuslt = await deleteEducationAction(dataEducationEdit._id);
      setLoadingDelete(false);

      if (reuslt.status === false) return toast.error(reuslt.message);

      editEducationForm.resetForm();
      handleCloseDrawerEducationEdit();

      toast.success(reuslt.message);
   };

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerEducationEdit}
         onClose={handleCloseDrawerEducationEdit}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={editEducationForm.handleSubmit}
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
                  <span>Edit Education </span>
                  <span style={{ fontWeight: `400`, fontSize: `14px` }}>
                     - {dataEducationEdit._id.toString()}
                  </span>
               </Typography>
               <IconButton
                  disabled={loadingDelete}
                  color="error"
                  size="large"
                  onClick={handleDeleteTextInPage}
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
                  value={editEducationForm.values.title}
                  onChange={editEducationForm.handleChange}
                  error={
                     editEducationForm.touched.title &&
                     editEducationForm.errors.title !== undefined
                  }
                  helperText={editEducationForm.touched.title && editEducationForm.errors.title}
                  variant="outlined"
               />

               {/* description */}
               <TextField
                  sx={{ width: `100%` }}
                  multiline
                  rows={10}
                  autoComplete="description"
                  label="Description"
                  name="description"
                  value={editEducationForm.values.description}
                  onChange={editEducationForm.handleChange}
                  error={
                     editEducationForm.touched.description &&
                     editEducationForm.errors.description !== undefined
                  }
                  helperText={
                     editEducationForm.touched.description && editEducationForm.errors.description
                  }
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
               <Button onClick={handleCloseDrawerEducationEdit}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     editEducationForm.handleSubmit();
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
