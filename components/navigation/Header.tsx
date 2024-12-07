import * as React from "react";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  const navigationItems = [
    { label: "Home" },
    { label: "Our Solution" },
    { label: "Calculator", className: "px-1.5 basis-5" },
    { label: "About Us" },
  ];

  return (
    <div className="flex overflow-hidden flex-wrap justify-center items-center p-2.5 text-sm font-medium leading-6 text-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f6c8ca5ed35c6e63c6201a81c53e249aa59c4edcf041528838670750af0287?placeholderIfAbsent=true&apiKey=16a4d8d70fbe497ab1ea8eec1afa4803"
        alt="Company logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.31] w-[72px]"
      />
      <div className="flex-grow" />
      <Navigation items={navigationItems} />
    </div>
  );
};
