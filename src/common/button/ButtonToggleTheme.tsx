import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, useColorScheme } from "@mui/material";

export default function ButtonToggleTheme() {
   const { mode, setMode } = useColorScheme();
   return (
      <IconButton
         onClick={() => {
            setMode(mode === `dark` ? `light` : `dark`);
         }}
      >
         {mode === `light` ? <DarkModeOutlinedIcon /> : <LightModeIcon />}
      </IconButton>
   );
}
