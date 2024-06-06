"use client";

import { motion, MotionStyle } from "framer-motion";
import { letterVariant, sentenceVariant } from "../common/framer-motion/animationVariants";

export const effectText = (text: string, style?: MotionStyle) => {
   return (
      <motion.span
         variants={sentenceVariant}
         initial="initial"
         animate="animate"
         style={{ margin: `0`, ...style }}
      >
         {text.split("").map((letter, index) => (
            <motion.span key={`${letter}-${index}`} variants={letterVariant}>
               {letter}
            </motion.span>
         ))}
      </motion.span>
   );
};
