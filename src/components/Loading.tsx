import React from 'react';

export const CountryCardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-0 dark:border-slate-800/50 dark:bg-slate-900/50">
      {/* Flag skeleton */}
      <div className="aspect-[1.6/1] w-full bg-slate-200 dark:bg-slate-800" />
      
      {/* Content skeleton */}
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between gap-5">
          <div className="h-5 w-2/3 rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-12 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
        
        <div className="h-3 w-1/2 rounded-md bg-slate-100 dark:bg-slate-855" />
        
        <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 rounded-md bg-slate-100 dark:bg-slate-855" />
            <div className="h-3 w-16 rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 w-16 rounded-md bg-slate-100 dark:bg-slate-855" />
            <div className="h-3 w-24 rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 w-14 rounded-md bg-slate-100 dark:bg-slate-855" />
            <div className="h-3 w-20 rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingGrid: React.FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="loading-grid">
      {Array.from({ length: count }).map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const DetailSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-8" id="detail-skeleton">
      {/* Back button skeleton */}
      <div className="h-10 w-28 rounded-xl bg-slate-200 dark:bg-slate-800" />
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Flag area */}
        <div className="lg:col-span-5">
          <div className="aspect-[1.5/1] w-full rounded-2xl bg-slate-200 dark:bg-slate-800" />
        </div>
        
        {/* Info area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-10 w-3/4 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-1/2 rounded-lg bg-slate-150 dark:bg-slate-850" />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-3">
              <div className="h-4 w-2/3 rounded-lg bg-slate-150 dark:bg-slate-850" />
              <div className="h-4 w-1/2 rounded-lg bg-slate-150 dark:bg-slate-850" />
              <div className="h-4 w-5/6 rounded-lg bg-slate-150 dark:bg-slate-850" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-2/3 rounded-lg bg-slate-150 dark:bg-slate-850" />
              <div className="h-4 w-1/2 rounded-lg bg-slate-150 dark:bg-slate-850" />
              <div className="h-4 w-4/5 rounded-lg bg-slate-150 dark:bg-slate-850" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
