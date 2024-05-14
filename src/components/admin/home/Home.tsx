"use client";

import Logo from "@/common/logo/Logo";
import { ROUTER } from "@/constants/router.constant";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter();

   return (
      <Stack
         sx={{
            alignItems: `center`,
            justifyContent: `center`,
            gap: `50px`,
         }}
      >
         <Logo />
         <Stack sx={{ flexDirection: `row`, gap: `20px` }}>
            <Button
               onClick={() => {
                  router.push(ROUTER.ADMIN.AUTH.LOGIN);
               }}
               variant="contained"
            >
               Login
            </Button>
            <Button
               onClick={() => {
                  router.push(ROUTER.ADMIN.AUTH.REGISTER);
               }}
               variant="outlined"
            >
               Register
            </Button>
         </Stack>
      </Stack>
   );
}
