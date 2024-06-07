"use client";

import { registerAction } from "@/actions/register.action";
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

export default function Register() {
   const router = useRouter();

   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };

   const registerForm = useFormik({
      initialValues: {
         name: ``,
         email: ``,
         password: ``,
      },
      validationSchema: Yup.object({
         name: Yup.string().required(`Name is required`),
         email: Yup.string()
            .trim()
            .required(`Email is required`)
            .email(`Invalid email. Please try again.`),
         password: Yup.string().required(`Password is required`),
      }),
      onSubmit: async (values) => {
         console.log(values);

         const reuslt = await registerAction(values);
         console.log(reuslt);

         if (!reuslt.data) return toast.error(reuslt.message);

         toast.success(reuslt.message);

         router.push(ROUTER.ADMIN.AUTH.LOGIN);
      },
   });
   return (
      <Stack gap={5} maxWidth={"500px"} component={"form"} onSubmit={registerForm.handleSubmit}>
         <TextField
            name="name"
            onChange={registerForm.handleChange}
            value={registerForm.values.name}
            label="name"
            variant="outlined"
         />
         <TextField
            name="email"
            onChange={registerForm.handleChange}
            value={registerForm.values.email}
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
               onChange={registerForm.handleChange}
               value={registerForm.values.password}
            />
         </FormControl>
         <Box>
            <Button sx={{ width: `100%` }} type="submit" variant="contained">
               Register
            </Button>
            <Typography
               onClick={() => {
                  router.push(ROUTER.ADMIN.AUTH.LOGIN);
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
               Login
            </Typography>
         </Box>
      </Stack>
   );
}
