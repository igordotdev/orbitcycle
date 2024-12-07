import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`gap-2.5 self-stretch px-4 py-2 mt-2.5 max-w-full text-sm font-medium
        leading-6 whitespace-nowrap bg-fuchsia-800 rounded-md min-h-[40px] w-[120px] 
        hover:bg-fuchsia-700 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none 
        transition-colors duration-200 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } 
        ${className}`}
      aria-label={ariaLabel || text}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
