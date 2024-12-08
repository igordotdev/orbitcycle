import * as React from "react";
import { ContentSection } from "./types";

interface ContentBlockProps {
  section: ContentSection;
}

export function ContentBlock({ section }: ContentBlockProps) {
  return (
    <>
      <div className="mt-3.5 text-3xl font-bold">{section.title}</div>
      <div className="mt-3.5 max-md:max-w-full">{section.content}</div>
    </>
  );
}
