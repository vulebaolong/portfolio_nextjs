import Logo from "@/common/logo/Logo";
import { Stack } from "@mui/material";

export default function Dashboard() {
   return (
      <Stack sx={{ width: `100%`, height: `100%`, alignItems: `center`, justifyContent: `center` }}>
         <Logo />
      </Stack>
   );
}
