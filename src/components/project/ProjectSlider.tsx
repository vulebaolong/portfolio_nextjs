"use client";

import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Box, Link, Stack, SxProps, Typography } from "@mui/material";

const basePath = `/images/project/`;

const workSlides: { title: string; path: string; logo: string; link: string }[] = [
   {
      title: "Netflix",
      logo: `${basePath}logo_Netflix.png`,
      path: `${basePath}thumb1.jpg`,
      link: "https://netflix-vulebaolong.netlify.app/",
   },
   {
      title: "L9 Learning",
      logo: `${basePath}logo_L9Learning.png`,
      path: `${basePath}thumb2.jpg`,
      link: "https://l9-learning-vulebaolong.netlify.app/",
   },
   {
      title: "API Netflix",
      logo: `${basePath}logo_Netflix.png`,
      path: `${basePath}thumb3.jpg`,
      link: "https://netflix-vulebaolong.netlify.app/api",
   },
   {
      title: "API L9 Learning",
      logo: `${basePath}logo_L9Learning.png`,
      path: `${basePath}thumb4.jpg`,
      link: "https://l9-learning-vulebaolong.netlify.app/api",
   },
];

const variants = {
   enter: (direction: number) => {
      return {
         x: direction > 0 ? 1000 : -1000,
         opacity: 0,
      };
   },
   center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
   },
   exit: (direction: number) => {
      return {
         zIndex: 0,
         x: direction < 0 ? 1000 : -1000,
         opacity: 0,
      };
   },
};

const btnSlider: SxProps = {
   "position": `absolute`,
   "display": `flex`,
   "alignItems": `center`,
   "justifyContent": `center`,
   "borderRadius": `9999px`,
   "top": `50%`,
   "translateY": `-50%`,
   "width": `40px`,
   "height": `40px`,
   "zIndex": `2`,
   "fontWeight": `700`,
   "fontSize": `25px`,
   "color": `black`,
   "background": `white`,
   "&:hover": {
      backgroundColor: `rgb(255 255 255 / 0.8)`,
   },
   "&:active": {
      backgroundColor: `rgb(255 255 255 / 0.6)`,
   },
   "cursor": `pointer`,
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
   return Math.abs(offset) * velocity;
};

function ProjectSlider() {
   const [[page, direction], setPage] = useState([0, 0]);

   // We only have 3 workSlides, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
   // then wrap that within 0-2 to find our image ID in the array below. By passing an
   // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
   // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
   const index = wrap(0, workSlides.length, page);

   const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
   };

   // const btnSlider =
   //    "absolute flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 w-[40px] h-[40px] z-[2] font-bold text-[25px] text-black bg-white hover:bg-white/80 active:bg-white/60 cursor-pointer transition";
   return (
      <>
         {/* slider */}
         <Box sx={{ position: `relative`, width: `100%`, height: `100%` }}>
            <AnimatePresence initial={false} custom={direction}>
               <motion.div
                  style={{
                     cursor: "pointer",
                     width: "100%",
                     height: "100%",
                     position: "absolute",
                     borderRadius: "8px",
                     overflow: "hidden",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                     x: { type: "spring", stiffness: 300, damping: 30 },
                     opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                     const swipe = swipePower(offset.x, velocity.x);

                     if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                     } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                     }
                  }}
               >
                  <Link
                     target="_blank"
                     href={workSlides[index].link}
                     underline="none"
                     sx={{
                        "width": "100%",
                        "height": "100%",
                        "display": "flex",
                        "alignItems": "center",
                        "justifyContent": "center",
                        "overflow": "hidden",
                        "&:hover .title": {
                           transform: "translateY(-500%)",
                           opacity: `1`,
                        },
                        "&:hover .iconBstitleArrowRight": {
                           transform: "translateY(-450%)",
                           opacity: `1`,
                        },
                        "&:hover .nameProject": {
                           transform: "translateY(-300%)",
                           opacity: `1`,
                        },
                     }}
                  >
                     <Image
                        src={workSlides[index].path}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                        alt="imgSlideWork"
                        priority={true}
                     />
                     {/* overlay gradient */}
                     <Box
                        sx={{
                           "width": "100%",
                           "height": "100%",
                           "position": "absolute",
                           "inset": 0,
                           "backgroundImage":
                              "linear-gradient(to right, transparent, #e838cc, #4a22bd)",
                           "opacity": 0.5,
                           "@media (min-width: 1280px)": {
                              "opacity": 0,
                              "&:hover": {
                                 opacity: 0.8,
                              },
                           },
                           "transition": "opacity 700ms",
                        }}
                     ></Box>

                     {/* title */}
                     <Box
                        sx={{
                           position: "absolute",
                           bottom: 0,
                           transform: "translateY(100%)",
                           transition: "transform 300ms",
                        }}
                     >
                        <Box
                           sx={{
                              display: "flex",
                              gap: `5px`,
                              alignItems: "center",
                              gapX: "2",
                              fontSize: "13px",
                              letterSpacing: "0.2em",
                           }}
                        >
                           {/* title 1 */}
                           <Typography
                              className={`title`}
                              sx={{
                                 color: `white`,
                                 fontSize: `12px`,
                                 transition: "all 300ms",
                                 transitionDelay: "100ms",
                                 opacity: `0`,
                                 transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
                              }}
                           >
                              LIVE
                           </Typography>

                           {/* title 2 */}
                           <Typography
                              className={`title`}
                              sx={{
                                 color: `white`,
                                 fontSize: `12px`,
                                 transition: "all 300ms",
                                 transitionDelay: "150ms",
                                 opacity: `0`,
                                 transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
                              }}
                           >
                              PROJECT
                           </Typography>

                           {/* icon */}
                           <Box
                              className={`iconBstitleArrowRight`}
                              component={BsArrowRight}
                              sx={{
                                 color: `white`,
                                 fontSize: "20px",
                                 transition: "all 300ms",
                                 transitionDelay: "200ms",
                                 opacity: `0`,
                                 transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
                              }}
                           />
                        </Box>
                        {/* name project */}
                        <Stack
                           className="nameProject"
                           sx={{
                              flexDirection: `row`,
                              alignItems: "center",
                              fontSize: "1.25rem",
                              gap: "0.25rem",
                              fontWeight: "500",
                              transition: "all 300ms",
                              opacity: `0`,
                              transitionTimingFunction: `cubic-bezier(.4,0,.2,1)`,
                           }}
                        >
                           <Box sx={{ height: "26px", width: `26px` }}>
                              <Image
                                 src={workSlides[index].logo}
                                 width={0}
                                 height={0}
                                 sizes="100vw"
                                 style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    verticalAlign: `unset`,
                                 }}
                                 alt="imgSlideWork"
                                 priority={true}
                              />
                           </Box>
                           <Typography sx={{ color: `white`, fontWeight: `700` }}>
                              {workSlides[index].title}
                           </Typography>
                        </Stack>
                     </Box>
                  </Link>
               </motion.div>
            </AnimatePresence>
            {/* btn next */}
            <Box sx={{ ...btnSlider, right: `8px` }} onClick={() => paginate(1)}>
               ‣
            </Box>
            {/* btn prev */}
            <Box sx={{ ...btnSlider, left: `8px`, scale: `-1 -1` }} onClick={() => paginate(-1)}>
               ‣
            </Box>
         </Box>
         {/* pani */}
         <Typography sx={{ textAlign: `center`, mt: `8px` }}>
            {index + 1} / {workSlides.length}
         </Typography>
      </>
   );
}

export default ProjectSlider;
