"use client";

import { sendMailAction } from "@/actions/contract.action";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Divider, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

type TProps = {
   dataTextInPage: TResonAction<TTextInPage | null>;
};

function FormContact({ dataTextInPage }: TProps) {
   const [loading, setLoading] = useState<boolean>(false);

   const contactForm = useFormik({
      initialValues: {
         name: ``,
         email: ``,
         message: ``,
      },
      validationSchema: Yup.object().shape({
         name: Yup.string().trim().required(`Name is required`),
         email: Yup.string()
            .trim()
            .required("Email is required.")
            .email("Invalid email. Please try again."),
         message: Yup.string().trim().required("Message is required."),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(valuesRaw);

         setLoading(true);
         const result = await sendMailAction({
            value: valuesRaw,
            emailMe: dataTextInPage.data?.description.split(`/`)[1] || `vulebaolong@gmail.com`,
         });
         setLoading(false);

         if (result.status) {
            toast.success(`Thank you for reaching out! We'll get back to you shortly.`);
         } else {
            toast.warning(`Sorry, the system is under maintenance, please try again later`);
         }
      },
   });
   return (
      <Stack component="form" autoComplete="false" onSubmit={contactForm.handleSubmit} rowGap={3}>
         <TextField
            sx={{ width: `100%` }}
            autoComplete="name"
            label="Name"
            name="name"
            value={contactForm.values.name}
            onChange={contactForm.handleChange}
            error={contactForm.touched.name && contactForm.errors.name !== undefined}
            helperText={contactForm.touched.name && contactForm.errors.name}
            variant="outlined"
         />
         <TextField
            sx={{ width: `100%` }}
            autoComplete="email"
            label="Email"
            name="email"
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
            error={contactForm.touched.email && contactForm.errors.email !== undefined}
            helperText={contactForm.touched.email && contactForm.errors.email}
            variant="outlined"
         />
         <TextField
            sx={{ width: `100%` }}
            multiline
            rows={10}
            autoComplete="message"
            label="Message"
            name="message"
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
            error={contactForm.touched.message && contactForm.errors.message !== undefined}
            helperText={contactForm.touched.message && contactForm.errors.message}
            variant="outlined"
         />
         <Stack
            sx={{
               flexDirection: {
                  xs: `column`,
                  sm: `row`,
               },
               gap: `20px`,
               height: `52px`,
            }}
         >
            <LoadingButton
               onClick={() => {
                  contactForm.handleSubmit();
               }}
               loading={loading}
               loadingPosition="end"
               endIcon={<SendRoundedIcon sx={{ fontSize: `16px !important` }} />}
               variant="outlined"
               size="large"
               sx={{
                  borderRadius: `999999px`,
                  textTransform: `none`,
                  fontSize: `18px`,
                  fontWeight: `500`,
                  height: `100%`,
               }}
               color="error"
            >
               Lets talk
            </LoadingButton>

            {/* DIVIDER */}
            <Box
               sx={{
                  display: {
                     xs: `none`,
                     sm: `block`,
                  },
               }}
            >
               <Divider orientation={`vertical`} sx={{ height: `100%` }} />
            </Box>

            <Stack sx={{ height: `100%`, alignItems: `start`, justifyContent: `space-evenly` }}>
               <Stack
                  sx={{
                     flexDirection: `row`,
                     gap: `10px`,
                     alignItems: `center`,
                     justifyContent: `center`,
                  }}
               >
                  <LocalPhoneRoundedIcon
                     sx={{ fontSize: `18px`, color: `rgba(255,255,255, 0.5)` }}
                  />
                  <Box
                     sx={{
                        "textDecoration": `none`,
                        "color": `white`,
                        "&:hover": { color: `#69b1ff` },
                        "transition": `color .3s`,
                        "fontSize": `14px`,
                     }}
                     component={`a`}
                     href="tel:0836789578"
                  >
                     {dataTextInPage.data?.description.split(`/`)[0]}
                  </Box>
               </Stack>
               <Stack
                  sx={{
                     flexDirection: `row`,
                     gap: `10px`,
                     alignItems: `center`,
                     justifyContent: `center`,
                  }}
               >
                  <EmailRoundedIcon sx={{ fontSize: `18px`, color: `rgba(255,255,255, 0.5)` }} />
                  <Box
                     sx={{
                        "textDecoration": `none`,
                        "color": `white`,
                        "&:hover": { color: `#69b1ff` },
                        "transition": `color .3s`,
                        "fontSize": `14px`,
                     }}
                     component={`a`}
                     href={`mailto:${dataTextInPage.data?.description.split(`/`)[1]}`}
                  >
                     {dataTextInPage.data?.description.split(`/`)[1]}
                  </Box>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
}
export default FormContact;
