"use client";

import ParticlesLinks from "@/common/particles/ParticlesLinks";
import Transition from "@/common/Transition";
import { ROUTER } from "@/constants/router.constant";
import { wait } from "@/helpers/function.helper";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const basePath = `/images/home/`;

export default function Home() {
  const [startTransition, setStartTransition] = useState(false);
  const router = useRouter();
  // const handleClickDownloadCv = async () => {
  //   setStartTransition(true);
  //   await wait(1000);
  //   router.push(ROUTER.PROJECT);
  //   await wait(10000);
  //   setStartTransition(false);
  // };
  return (
    <>
      <div>
        <Stack
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h1">
            <Typography
              component={"span"}
              sx={{
                fontSize: "1.5rem",
                lineHeight: "2",
                color: "hsla(0,0%,100%,.6)",
                fontWeight: "400",
                mr: "7px",
              }}
            >
              Hi, I am
            </Typography>

            <motion.span
              style={{
                WebkitTextFillColor: "transparent",
                fontSize: "1.5rem",
                lineHeight: "2",
                fontWeight: "700",
                background:
                  "linear-gradient(300deg, rgba(255,248,0,1) 0%, rgba(241,48,36,1) 25%, rgba(255,248,0,1) 50%, rgba(241,48,36,1)  75%) 0% 0% / 400% text",
                filter: "drop-shadow(0px 3px 10px rgba(250, 221, 220, 0.5))",
              }}
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              VU LE BAO LONG
            </motion.span>
          </Typography>

          <Typography
            variant="h2"
            sx={{
              // filter: "drop-shadow(0px 3px 10px rgba(250, 221, 220, 0.8))",
              filter: "drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.8))",
            }}
          >
            <Typography
              component={"span"}
              sx={{
                mt: "1.25rem",
                fontSize: "60px",
                lineHeight: "1.3",
                fontWeight: "600",
              }}
            >
              Front End - Back End
            </Typography>
            <br />
            <Typography
              component={"span"}
              sx={{
                fontSize: "60px",
                lineHeight: "1.3",
                fontWeight: "600",
              }}
            >
              Web Developer
            </Typography>
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: "2rem",
              lineHeight: "1.8",
              fontSize: "16px",
              fontWeight: "300",
              maxWidth: "36rem",
              color: "hsla(0,0%,100%,.6)",
            }}
          >
            I&apos;m deeply passionate about coding, constantly striving to improve, and adept at
            creative problem-solving. Every day is a new opportunity to enhance my programming
            skills and create innovative solutions.
          </Typography>
        </Stack>

        <Stack
          sx={{
            position: "relative",
            zIndex: "1",
            mt: "4rem",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              "filter": "drop-shadow(0px 3px 10px rgba(250, 221, 220, 0.3))",
              "borderRadius": "999999px",
              "textTransform": "capitalize",
              "color": "white",
              "transition": "all 0.3s",
              "background":
                "linear-gradient(60deg, rgba(241, 48, 36, 1) 50%, rgba(255, 248, 0, 1) 100%)",
              "&:active": {
                transform: "translateY(1px)",
              },
              "&:hover svg": {
                animation: "slide-top-bottom 1s forwards",
              },
            }}
          >
            Download CV
            <DownloadRoundedIcon
              sx={{
                ml: "10px",
              }}
            />
          </Button>

          <Box
            sx={{
              "mt": "1.25rem",
              "position": "relative",
              "&:hover svg": {
                animation: "slide-left-right 1s forwards",
              },
            }}
          >
            <Image
              src={`${basePath}circle-star.svg`}
              width={148}
              height={150}
              alt="circle-start.svg"
              priority={true}
            />
            <Box
              // href={"/project"}
              onClick={async () => {
                setStartTransition(true);
                await wait(1000);
                router.push(ROUTER.ABOUT);
                await wait(1000);
                setStartTransition(false);
              }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={`${basePath}rounded-text.png`}
                width={110}
                height={115}
                alt="rounded-text.png"
                priority={true}
                style={{
                  animation: "spin 10s linear infinite",
                  position: "absolute",
                }}
              />

              <KeyboardDoubleArrowRightRoundedIcon
                sx={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
            </Box>
          </Box>
        </Stack>

        {/* BACKGROUND */}
        <Box
          sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <Image
            fill
            src={`${basePath}bg.svg`}
            alt={`bg.svg`}
            priority
            style={{
              verticalAlign: "middle",
              position: "absolute",
              objectFit: "cover",
            }}
          />
          <Image
            fill
            src={`${basePath}bg-explosion.png`}
            alt={`bg-explosion.png`}
            priority
            style={{
              verticalAlign: "middle",
              position: "absolute",
              objectFit: "cover",
              opacity: ".5",
              mixBlendMode: "color-dodge",
              filter: "blur(5px)",
            }}
          />
          <Image
            width={400}
            height={400}
            src={`${basePath}top-left.png`}
            alt={`top-left.png`}
            priority
            style={{
              top: "0",
              left: "0",
              verticalAlign: "middle",
              position: "absolute",
              objectFit: "cover",
              mixBlendMode: "color-dodge",
              opacity: ".5",
            }}
          />
        </Box>

        {/* PARTICLES */}
        <Box
          sx={{
            "position": "fixed",
            "width": "100vw",
            "height": "100vh",
            "top": "0",
            "left": "0",
            "& div": {
              width: "100%",
              height: "100%",
              transform: "translateZ(0)",
            },
          }}
        >
          <ParticlesLinks />
        </Box>
      </div>
      {/* {startTransition && <Transition />} */}
    </>
  );
}
