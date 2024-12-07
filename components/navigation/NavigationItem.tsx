import * as React from "react";

interface NavigationItemProps {
  label: string;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  className = "",
}) => {
  return (
    <div
      className={`text-center flex-1 shrink gap-2.5 self-stretch px-4 py-2 my-auto whitespace-nowrap rounded-md bg-white bg-opacity-0 min-h-[40px] hover:underline ${className}`}
      role="button"
      tabIndex={0}
    >
      {label}
    </div>
  );
};
