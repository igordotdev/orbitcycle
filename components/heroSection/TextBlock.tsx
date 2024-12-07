import * as React from "react";
import { TextBlockProps } from "./types";

export const TextBlock: React.FC<TextBlockProps> = ({
  size,
  text,
  className = "",
  ariaLabel,
}) => {
  const sizeClasses = {
    large: "text-8xl font-extrabold max-md:text-4xl",
    medium: "text-4xl font-bold",
    small: "text-2xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} text-center max-md:max-w-full ${className}`}
      aria-label={ariaLabel || text}
      role="heading"
    >
      {text}
    </div>
  );
};
