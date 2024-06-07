"use client";

import {
   deleteCertificationAction,
   updateCertificationAction,
} from "@/actions/certification.action";
import { deleteEducationAction, updateEducationAction } from "@/actions/education.action";
import { deleteTextInPageAction, updateTextInPageAction } from "@/actions/title-in-page.action";
import { TCertification } from "@/types/respon/certification.type";
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
import CustomDatePicker from "../custom/CustomDatePicker";

type TProps = {
   openDrawerCertificationEdit: boolean;
   handleCloseDrawerCertificationEdit: () => void;
   dataCertificationEdit: TCertification | null;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerCertificationEdit({
   openDrawerCertificationEdit,
   handleCloseDrawerCertificationEdit,
   dataCertificationEdit,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

   const editCertificationForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         title: dataCertificationEdit?.title || ``,
         link: dataCertificationEdit?.link || ``,
         date: dataCertificationEdit?.date || ``,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Title is required`),
         link: Yup.string().trim().required(`Link is required`),
         date: Yup.string().trim().required(`Date is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);
         if (!dataCertificationEdit) return;

         setLoading(true);

         const payload: TCertification = {
            _id: dataCertificationEdit._id,
            link: valuesRaw.link,
            title: valuesRaw.title,
            date: valuesRaw.date,
         };

         console.log(payload);

         const result = await updateCertificationAction(payload);
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         handleCloseDrawerCertificationEdit();

         toast.success(result.message);
      },
   });

   const handleDeleteTextInPage = async () => {
      if (!dataCertificationEdit) return;
      setLoadingDelete(true);

      const reuslt = await deleteCertificationAction(dataCertificationEdit._id);
      setLoadingDelete(false);

      if (reuslt.status === false) return toast.error(reuslt.message);

      editCertificationForm.resetForm();
      handleCloseDrawerCertificationEdit();

      toast.success(reuslt.message);
   };

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerCertificationEdit}
         onClose={handleCloseDrawerCertificationEdit}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={editCertificationForm.handleSubmit}
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
                  <span>Edit Certification </span>
                  <span style={{ fontWeight: `400`, fontSize: `14px` }}>
                     - {dataCertificationEdit?._id.toString()}
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
                  value={editCertificationForm.values.title}
                  onChange={editCertificationForm.handleChange}
                  error={
                     editCertificationForm.touched.title &&
                     editCertificationForm.errors.title !== undefined
                  }
                  helperText={
                     editCertificationForm.touched.title && editCertificationForm.errors.title
                  }
                  variant="outlined"
               />

               {/* link */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="link"
                  label="Link"
                  name="link"
                  value={editCertificationForm.values.link}
                  onChange={editCertificationForm.handleChange}
                  error={
                     editCertificationForm.touched.link &&
                     editCertificationForm.errors.link !== undefined
                  }
                  helperText={
                     editCertificationForm.touched.link && editCertificationForm.errors.link
                  }
                  variant="outlined"
               />

               {/* date */}
               <CustomDatePicker
                  sx={{ width: `100%` }}
                  label="Date"
                  name="date"
                  value={editCertificationForm.values.date}
                  onChange={(value: string) => editCertificationForm.setFieldValue("date", value)}
                  error={
                     editCertificationForm.touched.date &&
                     editCertificationForm.errors.date !== undefined
                  }
                  helperText={
                     editCertificationForm.touched.date && editCertificationForm.errors.date
                  }
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
               <Button onClick={handleCloseDrawerCertificationEdit}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     editCertificationForm.handleSubmit();
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
