import { Stack } from "@mui/material";

export default function CardContainer({ children }: { children: React.ReactNode }) {
   return (
      <Stack
         sx={{
            flexDirection: `column`,
            height: `100%`,
            justifyContent: `space-between`,
            gap: `20px`,
         }}
      >
         {children}
      </Stack>
   );
}
