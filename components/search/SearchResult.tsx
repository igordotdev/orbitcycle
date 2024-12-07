import * as React from "react";
import { SearchResultProps } from "./types";

export const SearchResult: React.FC<SearchResultProps> = ({
  name,
  amount,
  totalPrice,
  usageInfo,
  location,
}) => {
  return (
    <div className="flex overflow-hidden flex-col px-7 py-6 mt-2.5 max-w-full text-2xl leading-none rounded-xl bg-stone-900 bg-opacity-50 w-[726px] max-md:px-5">
      <div className="text-4xl font-bold leading-none">{name}</div>
      <div className="mt-6">Amount: {amount}</div>
      <div className="mt-6">Total Price: {totalPrice}</div>
      <div className="mt-6">Can be used for: {usageInfo}</div>
      <div className="mt-6">Found in: {location}</div>
    </div>
  );
};
