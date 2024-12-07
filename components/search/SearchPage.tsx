import * as React from "react";
import { SearchResult } from "./SearchResult";

export const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="flex overflow-hidden flex-col items-center px-2.5 py-3 text-white">
      <div className="text-sm font-semibold leading-[51px] max-md:max-w-full">
        <span className="text-4xl">
          Search for manufacturing materials or products.
        </span>
      </div>
      <form className="w-full max-w-[769px]">
        <label htmlFor="searchInput" className="sr-only">
          Enter material/product
        </label>
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="overflow-hidden gap-2.5 w-full px-5 py-2.5 mt-2.5 text-base bg-neutral-800 rounded-[30px] text-white text-opacity-30"
          placeholder="Enter material/product"
          aria-label="Search for materials or products"
        />
      </form>
      <SearchResult
        name="Example Material"
        amount="100 units"
        totalPrice="500 credits"
        usageInfo="Manufacturing, Construction"
        location="Low Earth Orbit"
      />
    </div>
  );
};
