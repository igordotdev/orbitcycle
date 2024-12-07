import * as React from "react";
import { StatisticProps } from "./types";

export const StatisticCard: React.FC<StatisticProps> = ({
  value,
  description,
  minWidth = "240px",
  width = "241px",
}) => {
  return (
    <div
      className="flex overflow-hidden flex-col self-stretch px-4 py-0.5 my-auto"
      style={{ minWidth, width }}
    >
      <div className="text-3xl font-semibold leading-none">{value}</div>
      <div className="mt-2 text-2xl leading-6">{description}</div>
    </div>
  );
};
