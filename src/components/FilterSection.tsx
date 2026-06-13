import React from 'react';
import { AlignLeft, ChevronDown } from 'lucide-react';
import { SelectedRegion, SortField } from '../types';

interface FilterSectionProps {
  selectedRegion: SelectedRegion;
  onRegionChange: (region: SelectedRegion) => void;
  selectedSort: SortField;
  onSortChange: (sortField: SortField) => void;
  totalResults: number;
}

const regions: SelectedRegion[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const sortOptions: { value: SortField; label: string }[] = [
  { value: 'alphabetical-asc', label: 'Alphabetical (A - Z)' },
  { value: 'alphabetical-desc', label: 'Alphabetical (Z - A)' },
  { value: 'population-desc', label: 'Population (High to Low)' },
  { value: 'population-asc', label: 'Population (Low to High)' },
  { value: 'area-desc', label: 'Land Area (Largest First)' },
];

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedRegion,
  onRegionChange,
  selectedSort,
  onSortChange,
  totalResults,
}) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between mb-8" id="filters-ribbon">
      {/* Region Selector Pills */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Filter by Region
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {regions.map((region) => {
            const isActive = selectedRegion === region;
            return (
              <button
                key={region}
                id={`region-pill-${region}`}
                onClick={() => onRegionChange(region)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-500 font-extrabold text-white shadow-xs scale-102'
                    : 'bg-white text-slate-650 border border-slate-200/80 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-350 dark:border-slate-800 dark:hover:bg-slate-850'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort Option Selection */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:self-end">
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Sort Hierarchy
          </label>
          <div className="relative">
            <select
              id="sort-select-dropdown"
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value as SortField)}
              className="h-10 w-full sm:w-64 appearance-none rounded-xl border border-slate-200 bg-white pl-4 pr-10 text-xs font-semibold text-slate-700 outline-hidden transition-all duration-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:focus:border-teal-400"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-slate-400">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Total stats count badge */}
        <div className="flex flex-col gap-2 shrink-0">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 sm:text-right">
            Active Dataset
          </span>
          <div className="h-10 flex items-center justify-center sm:justify-start px-4 rounded-xl border border-dashed border-slate-200 text-xs font-mono font-bold text-slate-500 dark:border-slate-800 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/20">
            <AlignLeft className="h-4 w-4 mr-1.5 opacity-60" />
            {totalResults} {totalResults === 1 ? 'country' : 'countries'}
          </div>
        </div>
      </div>
    </div>
  );
};
