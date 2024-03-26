"use client";

import { delayBetweenAnimations } from "@/config/transition.config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let timer: NodeJS.Timer | undefined = undefined;

function Transition() {
  const [step, setStep] = useState(true);

  useEffect(() => {
    setStep(true);
    if (timer) return;
    timer = setTimeout(() => {
      setStep(false);
      timer = undefined;
    }, delayBetweenAnimations);
  }, []);

  const transitionVariants = {
    initial: {
      x: `${step ? "0%" : "100%"}`,
      width: `${step ? "0%" : "100%"}`,
    },
    animate: {
      x: `${step ? "100%" : "0%"}`,
      width: `${step ? "100%" : "0%"}`,
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };
  return (
    <>
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
        transition={{ delay: step ? 0.4 : 0, duration: 0.5, ease: "easeInOut" }}
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
        transition={{ delay: step ? 0 : 0.4, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}
export default Transition;
