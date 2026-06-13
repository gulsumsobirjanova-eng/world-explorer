import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, Layers, ZoomIn, ZoomOut, Compass, ExternalLink, Globe, Landmark } from 'lucide-react';
import { Country } from '../types';

interface InteractiveMapProps {
  country: Country;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ country }) => {
  const [zoom, setZoom] = useState<number>(5);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'terrain'>('roadmap');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // When country changes, reset loading state and default zoom
  useEffect(() => {
    setIsLoading(true);
    // Large countries need lower zoom, small countries/islands need higher zoom
    if (country.area < 50000) {
      setZoom(7);
    } else if (country.area > 2000000) {
      setZoom(4);
    } else {
      setZoom(5);
    }
  }, [country]);

  const mapTypeQuery = mapType === 'satellite' ? 'k' : mapType === 'terrain' ? 'p' : '';
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    country.name.common
  )}&t=${mapTypeQuery}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 1, 15));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 1, 2));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200/60 bg-white p-5 shadow-xs transition-colors dark:border-slate-800/60 dark:bg-slate-900"
      id="interactive-map-view"
    >
      {/* Header and Controls Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 mb-4 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400">
            <Compass className="h-5.5 w-5.5 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
              Xaritada ko'rish / Geographical Map
            </h3>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              Interactive 3D visualization of {country.name.common}
            </p>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Map Type Toggle */}
          <div className="flex items-center rounded-xl bg-slate-100 p-0.5 dark:bg-slate-800">
            {(['roadmap', 'satellite', 'terrain'] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  setMapType(type);
                  setIsLoading(true);
                }}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  mapType === type
                    ? 'bg-white text-teal-600 shadow-xs dark:bg-slate-700 dark:text-teal-400'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {type === 'roadmap' ? "Xarita" : type === 'satellite' ? "Yo'ldosh" : "Relyef"}
              </button>
            ))}
          </div>

          {/* Zoom Actions */}
          <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 2}
              className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 active:scale-90 disabled:opacity-30 dark:text-slate-450 dark:hover:bg-slate-800"
              title="Kichiklashtirish"
            >
              <ZoomOut className="h-4.5 w-4.5" />
            </button>
            <span className="px-2 font-mono text-[11px] font-bold text-slate-600 dark:text-slate-350 min-w-[24px] text-center">
              z{zoom}
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 15}
              className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 active:scale-90 disabled:opacity-30 dark:text-slate-450 dark:hover:bg-slate-800"
              title="Kattalashtirish"
            >
              <ZoomIn className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 dark:border-slate-800/80 dark:bg-slate-950 h-[380px] md:h-[450px]">
        {/* Loading Spinner */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/90 dark:bg-slate-950/90"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="relative flex h-10 w-10">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white">
                    <Map className="h-5 w-5 animate-pulse" />
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Xarita yuklanmoqda...
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    Fetching high-fidelity details of {country.name.common}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Map iframe */}
        <iframe
          src={embedUrl}
          referrerPolicy="no-referrer"
          className="h-full w-full border-0 rounded-2xl grayscale-[15%] contrast-[105%] dark:grayscale-[40%] dark:invert-[90%] dark:hue-rotate-[180deg]"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          id="embedded-gmaps-iframe"
          title={`Detailed map of ${country.name.common}`}
        ></iframe>
      </div>

      {/* Footer useful resource navigation */}
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-between text-xs pt-1">
        <span className="text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
          <Globe className="h-4 w-4" />
          Joylashuv koordinatalari: {country.name.common} ({country.cca3})
        </span>

        {/* Navigation links */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              country.name.common
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:underline transition-all"
          >
            Google Maps <ExternalLink className="h-3 w-3" />
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
              country.name.common
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:underline transition-all"
          >
            OpenStreetMap <ExternalLink className="h-3 w-3" />
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a
            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(country.name.common)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 hover:underline transition-all"
          >
            <Landmark className="h-3.5 w-3.5" /> Wikipedia <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
