import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// The CSS for the animation is included directly in this file.
const animationStyles = `
  @keyframes animated-gradient-text-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animated-gradient-text-class {
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: animated-gradient-text-animation 2.5s linear infinite;
  }
`;

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * A component that applies a moving gradient animation to its text children.
 * It's designed to be used with the existing 'gradient-text' class to inherit
 * the correct colors from the site's theme.
 */
export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <>
      <style>{animationStyles}</style>
      <span className={cn("animated-gradient-text-class", className)}>
        {children}
      </span>
    </>
  );
}
