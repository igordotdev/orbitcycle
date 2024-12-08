import * as React from "react";
import { ContentBlock } from "./ContentBlock";
import { ImageWithCaption } from "./ImageWithCaption";
import { ArticleLinks } from "./ArticleLinks";
import { ContentSection, ArticleLink } from "./types";

export function OrbitCyclePurpose() {
  const contentSections: ContentSection[] = [
    {
      title: "What do we offer?",
      content:
        "With our advanced data profiling we were able to prepare density maps of debris in space and outline the most profitable areas.",
    },
    {
      title: "Why choose OrbitCycle?",
      content:
        "OrbitCycle transforms scattered space debris into precise profit maps, showing you exactly where your next big profit lies. With advaced analytics and intuitive visualizations, it identifies the most valuable salvage areas instantly.",
    },
  ];

  const articleLinks: ArticleLink[] = [
    { url: "https://sdup.esoc.esa.int/discosweb/statistics/" },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0956053X22005104",
    },
    { url: "http://astria.tacc.utexas.edu/AstriaGraph/" },
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center p-2.5 text-white">
      <div className="text-4xl font-bold max-md:max-w-full">
        What is the purpose of OrbitCycle?
      </div>
      <div className="flex overflow-hidden flex-wrap gap-2.5 items-start p-2.5 mt-2.5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col py-3 text-xl font-medium min-w-[240px] w-[779px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            OrbitCycle was created to unlock a whole new dimension of resources
            collection, extensive research has been done, all of them proving
            the market potential is huge.
          </div>
          {contentSections.map((section, index) => (
            <ContentBlock key={index} section={section} />
          ))}
        </div>
        <ImageWithCaption
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0a862ececf5761e8c68bd2ef1c49e9a00ff87b4d5005a2a1d90997cf3c2bc5?placeholderIfAbsent=true&apiKey=16a4d8d70fbe497ab1ea8eec1afa4803"
          alt="ESA Space environment visualization"
          caption="ESA - Space environment report 2024"
        />
      </div>
      <div className="mt-2.5 text-4xl font-bold max-md:max-w-full">
        Demo density map of space debris
      </div>
      <iframe src="http://127.0.0.1:5500/web_unity/" className="w-full h-[500px] mt-2.5" />
      <div className="mt-3.5 max-md:max-w-full"> Red - highest profitability; Orange - High profitability; Yellow - Medium profitability; Grey - low profitability</div>
      <div className="mt-2.5 text-4xl font-bold max-md:max-w-full">
        We are not the ones saying it - research speaks for itself.
      </div>
      <ArticleLinks links={articleLinks} />
    </div>
  );
}
