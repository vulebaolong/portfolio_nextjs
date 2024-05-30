"use client";

import { letterVariant, sentenceVariant } from "@/common/framer-motion/animationVariants";
import ParticlesLinks from "@/common/particles/ParticlesLinks";
import { styleBoxPage } from "@/common/styles/style-blobal.mui";
import { TTextInPage } from "@/types/respon/text-in-page.type";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Box, Button, Container, Stack, Typography, useColorScheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const basePath = `/images/home/`;

type TProps = {
   dataTextInPage: TResonAction<TTextInPage | null>;
};

export default function Home({ dataTextInPage }: TProps) {
   const { mode, setMode } = useColorScheme();
   useEffect(() => {
      if (mode === `dark`) return;
      setMode(`dark`);
   }, [mode, setMode]);

   const handleDownloadCv = () => {
      window.open(
         "https://drive.google.com/file/d/1kjlBbByUWDnSdj5kQHL57gK18BIuO7MO/view?usp=drive_link",
         "_blank"
      );
   };

   return (
      <Box sx={{ ...styleBoxPage, pt: `90px` }}>
         <Container>
            <Stack
               sx={{
                  alignItems: "center",
                  textAlign: "center",
               }}
            >
               <Typography variant="h1">
                  <motion.span
                     variants={sentenceVariant}
                     initial="initial"
                     animate="animate"
                     style={{
                        overflow: `hidden`,
                        whiteSpace: `pre`,
                        fontSize: "1.5rem",
                        lineHeight: "2",
                        color: "hsla(0,0%,100%,.6)",
                        fontWeight: "400",
                        fontFamily: `var(--font-sora)`,
                        marginRight: `10px`,
                     }}
                  >
                     {"Hi, I am".split("").map((letter, index) => (
                        <motion.span
                           key={`${letter}-${index}`}
                           variants={letterVariant}
                           style={{ position: `relative`, display: `inline-block` }}
                        >
                           {letter}
                        </motion.span>
                     ))}
                  </motion.span>
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
                     filter: "drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.8))",
                  }}
               >
                  <motion.span
                     variants={sentenceVariant}
                     initial="initial"
                     animate="animate"
                     style={{
                        overflow: `hidden`,
                        whiteSpace: `pre`,
                        marginTop: "1.25rem",
                        fontSize: "60px",
                        lineHeight: "1.3",
                        fontWeight: "600",
                     }}
                  >
                     {dataTextInPage.data?.title
                        .split("/")[0]
                        .split("")
                        .map((letter, index) => (
                           <motion.span
                              key={`${letter}-${index}`}
                              variants={letterVariant}
                              style={{ position: `relative`, display: `inline-block` }}
                           >
                              {letter}
                           </motion.span>
                        ))}
                  </motion.span>
                  <br />
                  <motion.span
                     variants={sentenceVariant}
                     initial="initial"
                     animate="animate"
                     style={{
                        overflow: `hidden`,
                        whiteSpace: `pre`,
                        marginTop: "1.25rem",
                        fontSize: "60px",
                        lineHeight: "1.3",
                        fontWeight: "600",
                     }}
                  >
                     {dataTextInPage.data?.title
                        .split("/")[1]
                        .split("")
                        .map((letter, index) => (
                           <motion.span
                              key={`${letter}-${index}`}
                              variants={letterVariant}
                              style={{ position: `relative`, display: `inline-block` }}
                           >
                              {letter}
                           </motion.span>
                        ))}
                  </motion.span>
               </Typography>

               <motion.h3
                  variants={sentenceVariant}
                  initial="initial"
                  animate="animate"
                  style={{
                     overflow: `hidden`,
                     // whiteSpace: `pre`,
                     marginTop: "2rem",
                     lineHeight: "1.8",
                     fontSize: "16px",
                     fontWeight: "300",
                     maxWidth: "36rem",
                     color: "hsla(0,0%,100%,.6)",
                  }}
               >
                  {dataTextInPage.data?.description.split("").map((letter, index) => (
                     <motion.span
                        key={`${letter}-${index}`}
                        variants={letterVariant}
                        style={{ position: `relative`, display: `inline-block` }}
                     >
                        {letter}
                     </motion.span>
                  ))}
               </motion.h3>
               {/* <Typography
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
                  {dataTextInPage.data?.description}
               </Typography> */}

               <Button
                  onClick={handleDownloadCv}
                  variant="contained"
                  size="large"
                  sx={{
                     "mt": "4rem",
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
                  <Link
                     href={"/project"}
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
                  </Link>
               </Box>
            </Stack>
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
               "& #ParticlesLinks": {
                  width: "100%",
                  height: "100%",
                  transform: "translateZ(0)",
               },
            }}
         >
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

            {/* PARTICLES */}
            <ParticlesLinks />
         </Box>
      </Box>
   );
}
