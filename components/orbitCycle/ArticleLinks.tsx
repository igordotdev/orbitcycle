import * as React from "react";
import { ArticleLink } from "./types";

interface ArticleLinksProps {
  links: ArticleLink[];
}

export function ArticleLinks({ links }: ArticleLinksProps) {
  return (
    <div className="flex overflow-hidden flex-col p-2.5 mt-2.5 text-base font-light max-md:max-w-full">
      <div className="text-2xl font-semibold">
      Articles backing our solution:
      </div>
      {links.map((link, index) => (
      <div key={index} className="mt-2.5 max-md:max-w-full">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.url}
        </a>
      </div>
      ))}
    </div>
  );
}
