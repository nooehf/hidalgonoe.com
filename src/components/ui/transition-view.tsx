"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface TransitionViewProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function TransitionView({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 20,
  className = "",
  triggerOnce = true,
  ...props
}: TransitionViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: triggerOnce, margin: "-100px 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo for ultra premium feel
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
