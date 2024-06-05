"use client";

import { createEducationAction } from "@/actions/education.action";
import { createTextInPageAction } from "@/actions/title-in-page.action";
import { TEducationCreate } from "@/types/respon/education.type";
import { TTextInPageCreate } from "@/types/respon/text-in-page.type";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Drawer, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

type TProps = {
   openDrawerEducationCreate: boolean;
   handleCloseDrawerEducationCreate: () => void;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerEducationCreate({
   openDrawerEducationCreate,
   handleCloseDrawerEducationCreate,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);

   const createTextInPageForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         title: ``,
         description: ``,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         setLoading(true);

         const payload: TEducationCreate = {
            description: valuesRaw.description,
            title: valuesRaw.title,
         };

         const result = await createEducationAction(payload);
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         handleCloseDrawerEducationCreate();
         createTextInPageForm.resetForm();

         toast.success(result.message);
      },
   });

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerEducationCreate}
         onClose={handleCloseDrawerEducationCreate}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={createTextInPageForm.handleSubmit}
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
               <Typography sx={{ fontSize: `20px`, fontWeight: `700` }}>
                  Create Education
               </Typography>
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
                  value={createTextInPageForm.values.title}
                  onChange={createTextInPageForm.handleChange}
                  error={
                     createTextInPageForm.touched.title &&
                     createTextInPageForm.errors.title !== undefined
                  }
                  helperText={
                     createTextInPageForm.touched.title && createTextInPageForm.errors.title
                  }
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
                  value={createTextInPageForm.values.description}
                  onChange={createTextInPageForm.handleChange}
                  error={
                     createTextInPageForm.touched.description &&
                     createTextInPageForm.errors.description !== undefined
                  }
                  helperText={
                     createTextInPageForm.touched.description &&
                     createTextInPageForm.errors.description
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
               <Button onClick={handleCloseDrawerEducationCreate}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     createTextInPageForm.handleSubmit();
                  }}
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
