import * as React from "react";
import { NavigationItem } from "./NavigationItem";

interface NavigationProps {
  items: Array<{
    label: string;
    className?: string;
  }>;
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center self-stretch px-3 py-5 my-auto min-w-[240px] w-[567px] max-md:max-w-full">
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          label={item.label}
          className={item.className}
        />
      ))}
    </div>
  );
};
