"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "minimal";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  showArrow = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display text-sm font-medium tracking-tight transition-all duration-300 focus:outline-hidden focus:ring-1 focus:ring-brand-dark/20";
  
  const variants = {
    primary:
      "bg-brand-accent text-brand-bg px-6 py-3 border border-brand-accent hover:bg-transparent hover:text-brand-text active:scale-98 rounded-none",
    secondary:
      "bg-transparent text-brand-text px-6 py-3 border border-brand-dark/20 hover:border-brand-dark active:scale-98 rounded-none",
    minimal:
      "bg-transparent text-brand-text p-0 border-b border-brand-dark/20 hover:border-brand-dark pb-1 rounded-none",
  };

  const arrowMotion = {
    initial: { x: 0, y: 0 },
    hover: { x: 3, y: -3 },
  };

  const buttonContent = (
    <motion.span
      className="flex items-center gap-1.5"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <span>{children}</span>
      {showArrow && (
        <motion.span variants={arrowMotion} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
        </motion.span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
}
