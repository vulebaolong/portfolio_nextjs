"use client";

import { loginAction } from "@/actions/login/login.action";
import { ROUTER } from "@/constants/router.constant";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Login() {
   const router = useRouter();

   const loginForm = useFormik({
      initialValues: {
         email: "long@gmail.com",
         password: "123456",
      },
      validationSchema: Yup.object({
         email: Yup.string().email("email không đúng định dạng").required("Vui lòng nhập email"),
         password: Yup.string().required("Vui lòng nhập password"),
      }),
      onSubmit: async (values: any) => {
         console.log(values);

         const result = await loginAction(values);

         console.log(result);

         toast.success(result.message)

         router.push(ROUTER.ADMIN.HOME);
      },
   });
   return (
      <Stack gap={5} maxWidth={"500px"} component={"form"} onSubmit={loginForm.handleSubmit}>
         <TextField
            name="email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            label="email"
            variant="outlined"
         />
         <TextField
            name="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
            label="passwork"
            variant="outlined"
         />
         <Button type="submit" variant="contained">
            Login
         </Button>
      </Stack>
   );
}
