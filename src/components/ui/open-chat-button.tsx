"use client";

import React from "react";
import Button from "./button";

interface OpenChatButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "minimal";
  className?: string;
  showArrow?: boolean;
}

export default function OpenChatButton({
  children = "Chatear con mi IA",
  variant = "secondary",
  className = "",
  showArrow = false
}: OpenChatButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-nh-chat", { bubbles: true, composed: true }));
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      showArrow={showArrow}
      className={className}
    >
      {children}
    </Button>
  );
}
