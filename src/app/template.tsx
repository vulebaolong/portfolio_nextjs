"use client";
import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          right: "100%",
          width: "100vw",
          height: "100vh",
          zIndex: "53",
          background: "#2e2257",
        }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          right: "100%",
          width: "100vw",
          height: "100vh",
          zIndex: "52",
          background: "#3b2d71",
        }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          right: "100%",
          width: "100vw",
          height: "100vh",
          zIndex: "51",
          background: "#4b2792",
        }}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}
