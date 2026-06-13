import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search countries by common name, capital or alternative official names...',
}) => {
  return (
    <div className="relative w-full" id="search-bar-container">
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <Search className="h-5 w-5 text-slate-400 dark:text-slate-500" />
      </div>
      
      <input
        type="text"
        id="country-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white/70 pl-12 pr-12 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none backdrop-blur-md transition-all duration-305 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-teal-400 dark:focus:bg-slate-900 dark:focus:ring-teal-450/15"
      />

      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-350 transition-colors"
          title="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};
