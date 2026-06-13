import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Trash2, ArrowLeft, Search } from 'lucide-react';
import { Country } from '../types';
import { CountryCard } from './CountryCard';

interface FavoritesViewProps {
  favoriteCountries: Country[];
  onToggleFavorite: (cca3: string, e: React.MouseEvent) => void;
  onClearAll: () => void;
  onSelectCountry: (cca3: string) => void;
  onNavigateHome: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteCountries,
  onToggleFavorite,
  onClearAll,
  onSelectCountry,
  onNavigateHome,
}) => {
  return (
    <div id="favorites-view" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-650 dark:text-slate-350 transition-all hover:scale-105"
            id="fav-back-home"
            title="Back to Home"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 font-sans">
              Your Saved Countries
            </h2>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              {favoriteCountries.length} {favoriteCountries.length === 1 ? 'bookmark' : 'bookmarks'} stored locally
            </p>
          </div>
        </div>

        {favoriteCountries.length > 0 && (
          <button
            id="clear-all-favorites-btn"
            onClick={onClearAll}
            className="flex items-center gap-2 rounded-xl border border-red-200 dark:border-red-950/40 bg-red-50/50 hover:bg-red-500 hover:text-white dark:bg-red-950/20 px-4 py-2.5 text-xs font-bold text-red-655 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Trash2 className="h-4.5 w-4.5" />
            Clear All Bookmarks
          </button>
        )}
      </div>

      <AnimatePresence mode="popLayout text">
        {favoriteCountries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-12 text-center min-h-[300px] max-w-xl mx-auto"
            id="favorites-empty-panel"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500 mb-4 animate-bounce">
              <Heart className="h-8 w-8 text-slate-350" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              No Saved Countries Yet
            </h3>
            
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Explore our global index and hit the heart icon on any flag card to preserve them here.
            </p>

            <button
              onClick={onNavigateHome}
              className="mt-6 flex items-center gap-2 rounded-xl bg-teal-555 px-5 py-2.5 text-xs font-bold text-white transition-all duration-250 hover:bg-teal-611 hover:scale-103 shadow-md"
            >
              <Search className="h-4.5 w-4.5" />
              Start Exploring Countries
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {favoriteCountries.map((country) => (
              <CountryCard
                key={country.cca3}
                country={country}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectCountry}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
