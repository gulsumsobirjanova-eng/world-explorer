import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Navigation, Compass } from 'lucide-react';
import { Country } from '../types';

interface StatsSectionProps {
  countries: Country[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ countries }) => {
  const totalCountries = countries.length;
  
  const totalPopulation = countries.reduce((acc, curr) => acc + (curr.population || 0), 0);
  
  const totalArea = countries.reduce((acc, curr) => acc + (curr.area || 0), 0);

  const regionCount = new Set(countries.map((c) => c.region).filter(Boolean)).size;

  const statItems = [
    {
      label: 'Selected Countries',
      value: totalCountries.toLocaleString(),
      desc: 'Active dataset items',
      icon: Globe,
      colorClass: 'text-teal-655 bg-teal-50 dark:bg-teal-950/40 dark:text-teal-400 border-teal-500/10',
    },
    {
      label: 'Combined Population',
      value: totalPopulation >= 1000000000 
        ? `${(totalPopulation / 1000000000).toFixed(2)} Billion` 
        : totalPopulation.toLocaleString(),
      desc: 'Aggregate human footprint',
      icon: Users,
      colorClass: 'text-indigo-655 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400 border-indigo-500/10',
    },
    {
      label: 'Cumulative Land Area',
      value: totalArea >= 1000000 
        ? `${(totalArea / 1000000).toFixed(2)}M km²` 
        : `${totalArea.toLocaleString()} km²`,
      desc: 'Physical territory sum',
      icon: Compass,
      colorClass: 'text-emerald-655 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-500/10',
    },
    {
      label: 'Unique Regions',
      value: regionCount,
      desc: 'Active continental divisions',
      icon: Navigation,
      colorClass: 'text-rose-655 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-450 border-rose-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8" id="stats-section">
      {statItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/50 p-6 shadow-xs backdrop-blur-xs dark:border-slate-800/60 dark:bg-slate-900/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {item.label}
                </p>
                <h4 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                  {item.value}
                </h4>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.colorClass}`}>
                <IconComponent className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-400 font-medium">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
