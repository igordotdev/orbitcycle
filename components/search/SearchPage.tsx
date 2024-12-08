"use client";
import React, { useState } from 'react';
import { SearchResult } from './SearchResult';
import { SearchResultProps } from './types';

export const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Partial<SearchResultProps>>({});

  const axios = require('axios');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/get_material/${searchTerm}`);
      const data = await response.data;
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Failed to fetch:', error);
      setSearchResults({});
    }
  };

  const renderContent = () => {
    if (searchTerm.trim() === '') {
      return <div className="h-"></div>;
    }
    if (!searchResults.name) {
      return <div className="mt-5 text-white">No results found</div>;
    }
    return (
      <SearchResult
        name={searchResults.name}
        total_mass={searchResults.total_mass}
        usageInfo={searchResults.usageInfo}
        price={searchResults.price}
        orbits={searchResults.orbits}
      />
    );
  };

  return (
    <div className="flex overflow-hidden flex-col items-center px-2.5 py-3 text-white">
      <div className="text-sm font-semibold leading-[51px] max-md:max-w-full">
        <span className="text-4xl">
          Search for manufacturing materials or products.
        </span>
      </div>
      <form className="w-full max-w-[769px]" onSubmit={handleSubmit}>
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
      {renderContent()}
    </div>
  );
};
