"use client";
import * as React from "react";
import { StatisticCard } from "./StatisticCard";
import { StatisticsData } from "./types";
import { Button } from "../heroSection/Button";

export const SpaceDebrisStats: React.FC = () => {
  const statisticsData: StatisticsData[] = [
    {
      value: "131 000 000+",
      description: "Trash objects on earth's orbit",
    },
    {
      value: "13 000 000+",
      description: "Kilograms of debris on earth's orbit",
    },
    {
      value: "3000+",
      description: "Non-functioning satellites on orbit",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center px-2.5 text-white">
      <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-center self-stretch px-80 py-6 w-full text-center max-md:px-5 max-md:max-w-full">
        {statisticsData.map((stat, index) => (
          <StatisticCard
            key={index}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/868eb62c397e48d9f1d2a3f8c646664e0651299531e31ad63a4ed4addb1ddfc4?placeholderIfAbsent=true&apiKey=16a4d8d70fbe497ab1ea8eec1afa4803"
        alt="Visual representation of space debris around Earth's orbit"
        className="object-contain self-stretch w-full aspect-[1.93] rounded-[100px] scale-90 max-md:max-w-full"
      />
      <div className="text-base font-extralight leading-none text-center">
        Map of debris on earth&apos;s orbit
      </div>
      <div className="mt-2.5 text-3xl font-semibold leading-9 text-center max-md:max-w-full">
        All of this debris is recyclable - ready to use again.
        <br />
        Find out below, how much can you benefit.
      </div>
      <div>
        <Button
          text="Use Calculator"
          className="gap-2.5 self-stretch px-3.5 py-2 mt-2.5 max-w-full text-sm font-medium leading-6 bg-fuchsia-800 rounded-md min-h-[40px] w-[120px]"
          aria-label="Open space debris calculator"
          onClick={() => {
            const calculatorSection = document.getElementById('calculator');
            if (calculatorSection) {
              calculatorSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
    </div>
  );
};
