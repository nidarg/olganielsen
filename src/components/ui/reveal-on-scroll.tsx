"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
}

export const RevealOnScroll = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        variants={{
          hidden: { 
            opacity: 0,
            scale: 0.3,
            y: 75
          },
          visible: { 
            opacity: 1,
            scale: 1,
            y: 0
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8,
          ease: [0.17, 0.55, 0.55, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}