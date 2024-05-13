"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import CountUp from "react-countup";

type TProps = {
   data: TInfoGitHub;
};

export default function Left({ data }: TProps) {
   const daysDiff = dayjs().diff(data.created_at, "days");
   const yearsDiff = dayjs().diff(data.created_at, "years");
   const totalRepo = data.public_repos;
   return (
      <>
         <Typography
            variant="h1"
            sx={{
               fontSize: `54px`,
               fontWeight: `600`,
            }}
         >
            About{" "}
            <Box
               sx={{
                  color: `#f44336`,
               }}
               component={`span`}
            >
               me.
            </Box>
         </Typography>

         <Typography
            sx={{
               color: "hsla(0,0%,100%,.6)",
               fontSize: `16px`,
               lineHeight: `1.8`,
               mt: `16px`,
            }}
         >
            My determination shines through when I encounter challenges. I persistently invest time
            in understanding and breaking problems into manageable steps, approaching each
            difficulty as an opportunity for personal growth and advancement.
         </Typography>

         <Stack
            sx={{
               mt: `48px`,
               flexDirection: `row`,
               alignItems: `stretch`,
               justifyContent: `space-between`,
               flexWrap: `wrap`,
               rowGap: `20px`,
            }}
         >
            {/* YEAR */}
            <Stack gap={`.5rem`}>
               <Typography
                  sx={{
                     color: `#f44336`,
                     fontSize: `2.25rem`,
                     lineHeight: `2.5rem`,
                     fontWeight: `800`,
                  }}
               >
                  <CountUp start={0} end={yearsDiff} duration={5} /> +
               </Typography>

               <Typography
                  sx={{
                     fontSize: `.75rem`,
                     letterSpacing: `1px`,
                     lineHeight: `1.4`,
                  }}
               >
                  YEARS OF <br /> EXPERIENCE
               </Typography>
            </Stack>

            {/* DIVIDER */}
            <Box>
               <Divider orientation={`vertical`} sx={{ height: `100%` }} />
            </Box>

            {/* DAY */}
            <Stack gap={`.5rem`}>
               <Typography
                  sx={{
                     color: `#f44336`,
                     fontSize: `2.25rem`,
                     lineHeight: `2.5rem`,
                     fontWeight: `800`,
                  }}
               >
                  <CountUp start={0} end={daysDiff} duration={5} /> +
               </Typography>

               <Typography
                  sx={{
                     fontSize: `.75rem`,
                     letterSpacing: `1px`,
                     lineHeight: `1.4`,
                  }}
               >
                  DAYS OF <br /> EXPERIENCE
               </Typography>
            </Stack>

            {/* DIVIDER */}
            <Box>
               <Divider orientation={`vertical`} sx={{ height: `100%` }} />
            </Box>

            {/* REPO */}
            <Stack gap={`.5rem`}>
               <Typography
                  sx={{
                     color: `#f44336`,
                     fontSize: `2.25rem`,
                     lineHeight: `2.5rem`,
                     fontWeight: `800`,
                  }}
               >
                  <CountUp start={0} end={totalRepo} duration={5} /> +
               </Typography>

               <Typography
                  sx={{
                     fontSize: `.75rem`,
                     letterSpacing: `1px`,
                     lineHeight: `1.4`,
                  }}
               >
                  TOTAL <br /> REPOSITORIES
               </Typography>
            </Stack>
         </Stack>
      </>
   );
}
