import * as React from "react";
import { ImageProps } from "./types";

export function ImageWithCaption({ src, alt, caption }: ImageProps) {
  return (
    <div className="flex overflow-hidden flex-col items-center p-2.5 text-sm font-extralight tracking-tight min-w-[240px] w-[470px] max-md:max-w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain max-w-full aspect-[1.5] w-[450px]"
      />
      {caption && <div className="mt-2.5">{caption}</div>}
    </div>
  );
}
