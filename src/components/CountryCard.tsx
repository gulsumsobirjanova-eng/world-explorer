import React from 'react';
import { motion } from 'motion/react';
import { Heart, Globe2, Users, Landmark } from 'lucide-react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
  isFavorite: boolean;
  onToggleFavorite: (cca3: string, e: React.MouseEvent) => void;
  onSelect: (cca3: string) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 shadow-sm transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-900/70 backdrop-blur-md hover:shadow-md hover:border-teal-500/30 dark:hover:border-teal-400/30"
      onClick={() => onSelect(cca3)}
      id={`country-card-${cca3}`}
    >
      {/* Favorite Button on Overlap */}
      <button
        id={`fav-btn-card-${cca3}`}
        onClick={(e) => onToggleFavorite(cca3, e)}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 dark:bg-slate-850/90 text-slate-500 hover:text-red-550 dark:text-slate-400 dark:hover:text-red-400"
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart
          className={`h-5 w-5 transition-colors duration-200 ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400 group-hover:text-red-400/80'
          }`}
        />
      </button>

      {/* Flag Image Container */}
      <div className="relative aspect-[1.6/1] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={flags.png || flags.svg}
          alt={flags.alt || `Flag of ${name.common}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 font-sans text-lg font-bold text-slate-800 transition-colors duration-200 group-hover:text-teal-600 dark:text-slate-100 dark:group-hover:text-teal-400">
            {name.common}
          </h3>
          <span className="shrink-0 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {cca3}
          </span>
        </div>

        <p className="line-clamp-1 mb-4 text-xs text-slate-400 dark:text-slate-400 font-medium">
          {name.official}
        </p>

        {/* Info Rows */}
        <div className="space-y-2.5 border-t border-slate-100 pt-4 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <Users className="h-4 w-4 text-slate-450 dark:text-slate-400" />
            <span className="font-medium text-xs">Population:</span>
            <span className="ml-auto font-mono text-xs font-semibold">
              {population.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <Globe2 className="h-4 w-4 text-slate-450 dark:text-slate-400" />
            <span className="font-medium text-xs">Region:</span>
            <span className="ml-auto font-sans text-xs font-semibold">
              {region}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
            <Landmark className="h-4 w-4 text-slate-450 dark:text-slate-400" />
            <span className="font-medium text-xs">Capital:</span>
            <span className="ml-auto line-clamp-1 font-sans text-xs font-semibold text-right">
              {capital && capital.length > 0 ? capital[0] : 'None'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
