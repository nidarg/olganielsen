"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface TimelineProps {
  items: {
    title: string;
    description: string;
  }[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="w-full">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: idx * 0.3,
              },
            },
          }}
          className="relative pl-8 py-6 group"
        >
          {idx !== items.length - 1 && (
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-amber-500 origin-top group-hover:scale-y-110 transition-transform duration-300" />
          )}
          <div className="absolute left-2 top-7 h-4 w-4 rounded-full border-2 border-amber-500 bg-gray-900 group-hover:scale-125 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-amber-500 mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};