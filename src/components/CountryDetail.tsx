import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Move, Compass, Calendar, Globe, Coins, ShieldCheck, Heart } from 'lucide-react';
import { Country } from '../types';
import { InteractiveMap } from './InteractiveMap';

interface CountryDetailProps {
  country: Country;
  isFavorite: boolean;
  onToggleFavorite: (cca3: string) => void;
  onBack: () => void;
  onBorderClick: (cca3: string) => void;
  cca3ToCountryMap: Record<string, Country>;
}

export const CountryDetail: React.FC<CountryDetailProps> = ({
  country,
  isFavorite,
  onToggleFavorite,
  onBack,
  onBorderClick,
  cca3ToCountryMap,
}) => {
  const {
    name,
    flags,
    population,
    area,
    capital,
    region,
    subregion,
    languages,
    currencies,
    timezones,
    tld,
    borders,
    coatOfArms,
    cca3,
  } = country;

  // Resolve borders to readable country names
  const resolvedBorders = borders?.map((code) => ({
    code,
    name: cca3ToCountryMap[code]?.name.common || code,
  })) || [];

  const languagesList = languages ? Object.values(languages).join(', ') : 'Not applicable';

  const currenciesList = currencies
    ? (Object.values(currencies) as { name: string; symbol?: string }[])
        .map((curr) => `${curr.name} (${curr.symbol || ''})`)
        .join(', ')
    : 'Not applicable';

  // Details statistics block mapping
  const metrics = [
    { label: 'Region', value: region, icon: Compass, sub: subregion || 'No Subregion' },
    { label: 'Capital City', value: capital && capital.length > 0 ? capital.join(', ') : 'None', icon: Globe, sub: 'Seat of government' },
    { label: 'Population Density', value: population.toLocaleString(), icon: Users, sub: 'Total resident citizens' },
    { label: 'Physical Area', value: `${area.toLocaleString()} km²`, icon: Move, sub: 'Total geographical footprint' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
      id="country-detail-container"
    >
      {/* Back & Action Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-850 hover:scale-[1.02] active:scale-[0.98] shadow-xs"
          id="btn-back-to-explorer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Explorer
        </button>

        <button
          onClick={() => onToggleFavorite(cca3)}
          className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm ${
            isFavorite
              ? 'bg-red-500 text-white hover:bg-red-655'
              : 'bg-white border border-slate-200 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-250 dark:hover:bg-slate-850 hover:bg-slate-50'
          }`}
          id="btn-toggle-favorite-detail"
        >
          <Heart className={`h-4.5 w-4.5 ${isFavorite ? 'fill-white text-white' : 'text-slate-400'}`} />
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>

      {/* Main Grid: Flag Display vs Country Stats */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column - Visual Representation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-md dark:border-slate-800/60 dark:bg-slate-900">
            <img
              src={flags.svg || flags.png}
              alt={flags.alt || `Flag of ${name.common}`}
              className="h-full w-full object-cover aspect-[3/2]"
              id="detail-flag-image"
            />
          </div>

          {/* Coat of Arms Preview (if available) */}
          {coatOfArms && (coatOfArms.svg || coatOfArms.png) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-xs dark:border-slate-800/50 dark:bg-slate-900/50"
              id="coat-of-arms-block"
            >
              <img
                src={coatOfArms.svg || coatOfArms.png}
                alt={`Coat of arms of ${name.common}`}
                className="h-16 w-16 object-contain"
              />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  National Coat of Arms
                </h5>
                <p className="text-sm font-medium text-slate-650 dark:text-slate-350">
                  Official seal of {name.common}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Column - Deep Fact Sheets */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 font-sans">
                {name.common}
              </h1>
              <span className="px-3 py-1 text-sm font-bold font-mono rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/10">
                {cca3}
              </span>
            </div>
            <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium">
              Official: <span className="italic">{name.official}</span>
            </p>
          </div>

          {/* Key Metrics Quick Cards */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="p-4 rounded-2xl border border-slate-150/60 bg-white/60 dark:border-slate-800/50 dark:bg-slate-900/40"
                >
                  <div className="flex items-center gap-2 mb-2 text-slate-400">
                    <Icon className="h-4.5 w-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">{m.label}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{m.value}</p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">{m.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Deep Metadata Specifications */}
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-xs backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/70 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 pb-2 dark:border-slate-800">
              Technical Specifications
            </h3>

            <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Coins className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-400">Currencies</span>
                    <span className="text-slate-755 dark:text-slate-200 font-medium mt-1 inline-block">
                      {currenciesList}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-400">Primary Languages</span>
                    <span className="text-slate-755 dark:text-slate-200 font-medium mt-1 inline-block">
                      {languagesList}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Calendar className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-400">Timezones</span>
                    <span className="text-slate-755 dark:text-slate-200 font-mono mt-1 inline-block font-semibold">
                      {timezones && timezones.length > 0 ? timezones.slice(0, 3).join(', ') : 'UTC'}
                      {timezones && timezones.length > 3 && ` (+${timezones.length - 3} more)`}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-400">Top-Level Domain</span>
                    <span className="text-slate-755 dark:text-slate-200 font-mono mt-1 inline-block text-teal-600 dark:text-teal-400 font-bold">
                      {tld && tld.length > 0 ? tld.join(', ') : 'None'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border Countries Badges */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Bordering Land Neighbors ({resolvedBorders.length})
            </h4>
            
            {resolvedBorders.length > 0 ? (
              <div className="flex flex-wrap gap-2.5">
                {resolvedBorders.map((b) => (
                  <button
                    key={b.code}
                    id={`border-badge-${b.code}`}
                    onClick={() => onBorderClick(b.code)}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-xs font-bold text-slate-700 transition-all duration-200 hover:border-teal-500/35 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-teal-400/35 dark:hover:bg-slate-850 hover:scale-[1.03] shadow-xs active:scale-95"
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md font-semibold">
                      {b.code}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 dark:text-slate-500 italic font-semibold">
                This country is an island state or has no land border definitions.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <InteractiveMap country={country} />
    </motion.div>
  );
};
