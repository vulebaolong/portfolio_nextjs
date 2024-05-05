"use client";

import ParticlesTriangles from "@/common/particles/ParticlesTriangles";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import CountUp from "react-countup";
import Right from "./Right";

const basePath = `/images/about/`;

type TProps = {
  responInfoGitHubAction: TResonAction<TInfoGitHub>;
};

export default function About({ responInfoGitHubAction }: TProps) {
  const { data } = responInfoGitHubAction;

  const daysDiff = dayjs().diff(data.created_at, "days");
  const yearsDiff = dayjs().diff(data.created_at, "years");
  const totalRepo = data.public_repos;

  console.log({ daysDiff, yearsDiff, totalRepo });

  return (
    <Box sx={{ pt: `5rem` }}>
      <Container>
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: `44% 56%`,
            gap: `5rem`,
          }}
        >
          <Box
            sx={{
              gridColumn: `1`,
              pr: `20px`,
              minWidth: `0`,
              minHeight: `0`
            }}
          >
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
              My determination shines through when I encounter challenges. I persistently invest
              time in understanding and breaking problems into manageable steps, approaching each
              difficulty as an opportunity for personal growth and advancement.
            </Typography>

            <Stack
              sx={{
                mt: `48px`,
                flexDirection: `row`,
                alignItems: `stretch`,
                justifyContent: `space-between`,
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
          </Box>

          <Box
            sx={{
              gridColumn: `2`,
            }}
          >
            <Right />
          </Box>
        </Box>
      </Container>

      {/* BACKGROUND / PARTICLES*/}
      <Box
        sx={{
          "position": "fixed",
          "width": "100vw",
          "height": "100vh",
          "top": "0",
          "left": "0",
          "zIndex": "-1",
          "& #ParticlesTriangles": {
            width: "100%",
            height: "100%",
            transform: "translateZ(0)",
          },
        }}
      >
        <ParticlesTriangles />
      </Box>
    </Box>
  );
}
