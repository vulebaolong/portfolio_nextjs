"use client";

import { loginAction } from "@/actions/login.action";
import { ROUTER } from "@/constants/router.constant";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
   Box,
   Button,
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Login() {
   const router = useRouter();
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };

   const loginForm = useFormik({
      initialValues: {
         email: ``,
         password: ``,
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .trim()
            .required(`Email is required`)
            .email(`Invalid email. Please try again.`),
         password: Yup.string().required(`Password is required`),
      }),
      onSubmit: async (values: any) => {
         console.log(values);

         const result = await loginAction(values);

         console.log(result);

         if (!result.status) return toast.error(result.message);

         toast.success(result.message);

         router.push(ROUTER.ADMIN.DASHBOARD);
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
         <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? "text" : "password"}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                  </InputAdornment>
               }
               label="Password"
               name="password"
               onChange={loginForm.handleChange}
               value={loginForm.values.password}
            />
         </FormControl>
         <Box>
            <Button sx={{ width: `100%` }} type="submit" variant="contained">
               Login
            </Button>
            <Typography
               onClick={() => {
                  router.push(ROUTER.ADMIN.AUTH.REGISTER);
               }}
               sx={{
                  "mt": `10px`,
                  "color": `#90caf9`,
                  "cursor": `pointer`,
                  "textAlign": `center`,
                  "&:hover": {
                     color: `#90caf9cc`,
                  },
                  "transition": `color .3s`,
               }}
            >
               Register
            </Typography>
         </Box>
      </Stack>
   );
}
