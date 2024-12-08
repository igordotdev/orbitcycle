import * as React from "react";
import { SearchResultProps } from "./types";

export const SearchResult: React.FC<SearchResultProps> = ({
  name,
  total_mass,
  price,
  usageInfo = [],
  orbits = [],
}) => {
  const totalPrice = price * total_mass * 1000;
  const formatPrice = totalPrice.toLocaleString('fr-FR');
  return (
    <div className="flex overflow-hidden flex-col px-7 py-6 mt-2.5 max-w-full text-2xl leading-none rounded-xl bg-stone-900 bg-opacity-50 w-[726px] max-md:px-5">
      <div className="text-4xl font-bold leading-none">{name}</div>
      <div className="mt-6">Amount: {total_mass} tonnes </div>
      <div className="mt-6">Total Price: {formatPrice} $</div>
      <div className="mt-6">Usage:
        <ul>
          {usageInfo?.map((value: string, index: number) => (
          <li className="ml-20 mt-3" key={index}>- {value}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">Found in:
        <ul>
          {orbits?.map((value: string, index: number) => (
          <li className="ml-20 mt-3" key={index}>- {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
