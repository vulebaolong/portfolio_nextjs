"use client";

import { createCertificationAction } from "@/actions/certification.action";
import { TCertificationCreate } from "@/types/respon/certification.type";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Drawer, Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CustomDatePicker from "../custom/CustomDatePicker";

type TProps = {
   openDrawerCertificationCreate: boolean;
   handleCloseDrawerCertificationCreate: () => void;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerCertificationCreate({
   openDrawerCertificationCreate,
   handleCloseDrawerCertificationCreate,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);

   const createCertificationForm = useFormik({
      initialValues: {
         title: ``,
         link: ``,
         date: ``,
      },
      validationSchema: Yup.object().shape({
         title: Yup.string().trim().required(`Title is required`),
         link: Yup.string().trim().required(`Link is required`),
         date: Yup.string().trim().required(`Date is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         setLoading(true);

         const payload: TCertificationCreate = {
            link: valuesRaw.link,
            title: valuesRaw.title,
            date: dayjs(valuesRaw.date).toString(),
         };

         console.log(payload);

         const result = await createCertificationAction(payload);
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         handleCloseDrawerCertificationCreate();
         createCertificationForm.resetForm();

         toast.success(result.message);
      },
   });

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerCertificationCreate}
         onClose={handleCloseDrawerCertificationCreate}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={createCertificationForm.handleSubmit}
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
                  Create Certification
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
                  value={createCertificationForm.values.title}
                  onChange={createCertificationForm.handleChange}
                  error={
                     createCertificationForm.touched.title &&
                     createCertificationForm.errors.title !== undefined
                  }
                  helperText={
                     createCertificationForm.touched.title && createCertificationForm.errors.title
                  }
                  variant="outlined"
               />

               {/* description */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="link"
                  label="Link"
                  name="link"
                  value={createCertificationForm.values.link}
                  onChange={createCertificationForm.handleChange}
                  error={
                     createCertificationForm.touched.link &&
                     createCertificationForm.errors.link !== undefined
                  }
                  helperText={
                     createCertificationForm.touched.link && createCertificationForm.errors.link
                  }
                  variant="outlined"
               />
               
               <CustomDatePicker
                  sx={{ width: `100%` }}
                  label="Date"
                  name="date"
                  value={createCertificationForm.values.date}
                  onChange={(value: string) => createCertificationForm.setFieldValue("date", value)}
                  error={
                     createCertificationForm.touched.date &&
                     createCertificationForm.errors.date !== undefined
                  }
                  helperText={
                     createCertificationForm.touched.date && createCertificationForm.errors.date
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
               <Button onClick={handleCloseDrawerCertificationCreate}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     createCertificationForm.handleSubmit();
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
