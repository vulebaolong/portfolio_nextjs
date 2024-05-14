"use client";

import { createProjectAction } from "@/actions/project.action";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
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

export default function MyProjectCreate() {
   const [loading, setLoading] = useState<boolean>(false);

   const contactForm = useFormik({
      initialValues: {
         title: ``,
         description: ``,
         platform: ``,
         type: ``,
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

         setLoading(true);
         const result = await createProjectAction(valuesRaw);
         console.log(result);
         setLoading(false);

         if (!result.status) return toast.error(result.message);

         contactForm.resetForm();

         toast.success(result.message);
      },
   });

   return (
      <Stack component="form" autoComplete="false" onSubmit={contactForm.handleSubmit} rowGap={3}>
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
            error={contactForm.touched.description && contactForm.errors.description !== undefined}
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
            helperText={contactForm.touched.img_project_path && contactForm.errors.img_project_path}
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
               contactForm.touched.img_logo_path && contactForm.errors.img_logo_path !== undefined
            }
            helperText={contactForm.touched.img_logo_path && contactForm.errors.img_logo_path}
            variant="outlined"
         />

         <Stack sx={{ flexDirection: `row`, gap: `20px` }}>
            <Button>Cancel</Button>

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
               Create
            </LoadingButton>
         </Stack>
      </Stack>
   );
}
