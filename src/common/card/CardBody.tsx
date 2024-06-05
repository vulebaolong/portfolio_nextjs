import { Stack } from "@mui/material";

export default function CardBody({ children }: { children: React.ReactNode }) {
   return (
      <Stack sx={{ overflowY: `auto`, gap: `20px`, flex: `1`, height: `calc(100% - 100px)` }}>
         {children}
      </Stack>
   );
}
