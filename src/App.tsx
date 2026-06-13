import React, { useState, useEffect, useMemo, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Navigation, Layers, Compass, Loader2 } from 'lucide-react';
import { SelectedRegion, SortField, Country } from './types';
import { fetchAllCountries } from './lib/api';
import { CountryCard } from './components/CountryCard';
import { SearchBar } from './components/SearchBar';
import { FilterSection } from './components/FilterSection';
import { StatsSection } from './components/StatsSection';
import { ThemeToggle } from './components/ThemeToggle';
import { LoadingGrid, DetailSkeleton } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';
import { CountryDetail } from './components/CountryDetail';
import { FavoritesView } from './components/FavoritesView';

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Router states
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'favorites'>('home');
  const [selectedCca3, setSelectedCca3] = useState<string | null>(null);

  // Filters & Search states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [deboggledQuery, setDeboggledQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegion>('All');
  const [selectedSort, setSelectedSort] = useState<SortField>('population-desc');

  // React 19 Transition state for low priority sorting operations
  const [, startTransition] = useTransition();

  // Bookmarking/Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('world_explorer_favorites');
        return saved ? JSON.parse(saved) : [];
      } catch (err) {
        console.error('Error fetching favorites:', err);
        return [];
      }
    }
    return [];
  });

  // Debouncing search query 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboggledQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Load and fetch initial countries
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchAllCountries();
      setCountries(data);
    } catch (err: any) {
      setError(err?.message || 'Could not fetch countries. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Router routing - deep linking support
  useEffect(() => {
    const parseHashAndParams = () => {
      const hash = window.location.hash || '#';
      const searchParams = new URLSearchParams(window.location.search);

      // Restore search filters if present in current URL
      if (searchParams.has('q')) setSearchQuery(searchParams.get('q') || '');
      if (searchParams.has('region')) setSelectedRegion((searchParams.get('region') as SelectedRegion) || 'All');
      if (searchParams.has('sort')) setSelectedSort((searchParams.get('sort') as SortField) || 'population-desc');

      if (hash.startsWith('#country/')) {
        const cca3Code = hash.replace('#country/', '').toUpperCase();
        setSelectedCca3(cca3Code);
        setCurrentView('detail');
      } else if (hash === '#favorites') {
        setCurrentView('favorites');
      } else {
        setCurrentView('home');
        setSelectedCca3(null);
      }
    };

    parseHashAndParams();
    window.addEventListener('hashchange', parseHashAndParams);
    return () => {
      window.removeEventListener('hashchange', parseHashAndParams);
    };
  }, []);

  // Sync state transitions back to URL search params & title mapping
  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (deboggledQuery) searchParams.set('q', deboggledQuery);
    if (selectedRegion !== 'All') searchParams.set('region', selectedRegion);
    if (selectedSort !== 'population-desc') searchParams.set('sort', selectedSort);

    const newSearchString = searchParams.toString();
    const newUrl = `${window.location.pathname}${newSearchString ? '?' + newSearchString : ''}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);

    // Update dynamic metadata titles
    if (currentView === 'detail' && selectedCca3) {
      const selected = countries.find((c) => c.cca3 === selectedCca3);
      document.title = selected ? `${selected.name.common} – WorldExplorer` : 'Country Details | WorldExplorer';
    } else if (currentView === 'favorites') {
      document.title = 'Saved Bookmarks – WorldExplorer';
    } else {
      document.title = 'WorldExplorer – Global Countries Information Platform';
    }
  }, [deboggledQuery, selectedRegion, selectedSort, currentView, selectedCca3, countries]);

  // Fast mapping of cca3 to country records
  const cca3ToCountryMap = useMemo(() => {
    const map: Record<string, Country> = {};
    countries.forEach((country) => {
      map[country.cca3] = country;
    });
    return map;
  }, [countries]);

  // Sync favorites back to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('world_explorer_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed storing favorites:', err);
    }
  }, [favorites]);

  const handleToggleFavorite = (cca3: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(cca3) ? prev.filter((item) => item !== cca3) : [...prev, cca3]
    );
  };

  const handleClearAllFavorites = () => {
    if (confirm('Are you sure you want to clear all your saved country bookmarks?')) {
      setFavorites([]);
    }
  };

  // Navigations helpers
  const handleSelectCountry = (cca3: string) => {
    window.location.hash = `#country/${cca3.toLowerCase()}`;
  };

  const handleNavigateHome = () => {
    window.location.hash = '#';
  };

  const handleNavigateFavorites = () => {
    window.location.hash = '#favorites';
  };

  // Memoized lists filtering and sorting computations
  const processedCountries = useMemo(() => {
    let list = [...countries];

    // Search filter: support common names, capitals, official names and codes
    if (deboggledQuery.trim() !== '') {
      const q = deboggledQuery.toLowerCase().trim();
      list = list.filter((c) => {
        const commonName = c.name.common?.toLowerCase() || '';
        const officialName = c.name.official?.toLowerCase() || '';
        const cca3Code = c.cca3?.toLowerCase() || '';
        const capitalCity = c.capital && c.capital.length > 0 ? c.capital[0].toLowerCase() : '';
        const nativeNames = c.name.nativeName 
          ? (Object.values(c.name.nativeName) as { common: string; official: string }[])
              .map(n => n.common.toLowerCase() + ' ' + n.official.toLowerCase())
              .join(' ')
          : '';

        return (
          commonName.includes(q) ||
          officialName.includes(q) ||
          cca3Code.includes(q) ||
          capitalCity.includes(q) ||
          nativeNames.includes(q)
        );
      });
    }

    // Region grouping filter
    if (selectedRegion !== 'All') {
      list = list.filter((c) => c.region === selectedRegion);
    }

    // Sort hierarchy applied
    list.sort((a, b) => {
      switch (selectedSort) {
        case 'alphabetical-asc':
          return a.name.common.localeCompare(b.name.common);
        case 'alphabetical-desc':
          return b.name.common.localeCompare(a.name.common);
        case 'population-desc':
          return b.population - a.population;
        case 'population-asc':
          return a.population - b.population;
        case 'area-desc':
          return b.area - a.area;
        default:
          return b.population - a.population;
      }
    });

    return list;
  }, [countries, deboggledQuery, selectedRegion, selectedSort]);

  // Map bookmarked records
  const favoriteCountries = useMemo(() => {
    return countries.filter((c) => favorites.includes(c.cca3));
  }, [countries, favorites]);

  // Selected details country
  const activeDetailCountry = useMemo(() => {
    if (currentView === 'detail' && selectedCca3) {
      return cca3ToCountryMap[selectedCca3] || null;
    }
    return null;
  }, [currentView, selectedCca3, cca3ToCountryMap]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-slate-850/60 dark:bg-slate-950/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo Title */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleNavigateHome} id="brand-logo">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white shadow-md shadow-teal-500/20">
              <Layers className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white font-sans">
                World<span className="text-teal-500">Explorer</span>
              </span>
              <span className="hidden sm:block text-[9px] font-mono text-slate-400 font-extrabold uppercase tracking-widest leading-none mt-0.5">
                Global Countries Info Hub
              </span>
            </div>
          </div>

          {/* Header Action Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleNavigateFavorites}
              id="favorites-nav-badge"
              className={`flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 border ${
                currentView === 'favorites'
                  ? 'bg-red-500 text-white border-red-500 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-850'
              }`}
            >
              <Heart className={`h-4.5 w-4.5 ${currentView === 'favorites' ? 'fill-white' : 'text-red-500 fill-red-500/10'}`} />
              <span className="font-semibold">Favorites</span>
              <span className={`flex h-5 items-center justify-center rounded-full px-1.5 font-mono text-[10px] font-bold ${
                currentView === 'favorites' ? 'bg-white text-red-500' : 'bg-red-500/10 text-red-500'
              }`}>
                {favorites.length}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container Workspace */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Error State Block */}
        {error ? (
          <ErrorMessage message={error} onRetry={loadData} />
        ) : (
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div key="loading-state" className="space-y-8">
                {currentView !== 'detail' && (
                  <>
                    <div className="h-28 w-full rounded-3xl bg-slate-200 animate-pulse dark:bg-slate-900" />
                    <div className="h-12 w-full max-w-xl rounded-2xl bg-slate-200 animate-pulse dark:bg-slate-900" />
                  </>
                )}
                <LoadingGrid count={8} />
              </div>
            ) : (
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* 1. HOMEPAGE VIEW */}
                {currentView === 'home' && (
                  <div className="space-y-6" id="home-view-outlet">
                    
                    {/* Immersive Welcome Hero Panel */}
                    <div className="relative overflow-hidden rounded-3xl border border-slate-200/40 bg-linear-to-r from-teal-500/10 to-indigo-550/10 p-6 md:p-8 dark:border-slate-800/40 dark:from-teal-950/20 dark:to-indigo-950/20">
                      <div className="relative z-10 max-w-3xl">
                        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-bold text-teal-655 dark:text-teal-400 border border-teal-500/10">
                          <Navigation className="h-3 w-3" />
                          Explore 250+ Geographic Entities
                        </span>
                        
                        <h2 className="text-2xl md:text-3.5xl font-black tracking-tight text-slate-850 dark:text-white font-sans">
                          Explore the World with Premium SaaS Analytics
                        </h2>
                        
                        <p className="mt-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                          Analyze national demographics, bounding borders, native translations, maps, and currencies in a beautiful, high-fidelity responsive workspace.
                        </p>
                      </div>

                      {/* Topographic Gradient Glows */}
                      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />
                      <div className="absolute -bottom-16 right-32 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
                    </div>

                    {/* Stats Dashboard section */}
                    <StatsSection countries={processedCountries} />

                    {/* Interactive Filters Ribbon */}
                    <div className="space-y-4">
                      <SearchBar value={searchQuery} onChange={setSearchQuery} />
                      
                      <FilterSection
                        selectedRegion={selectedRegion}
                        onRegionChange={(reg) => startTransition(() => setSelectedRegion(reg))}
                        selectedSort={selectedSort}
                        onSortChange={(sort) => startTransition(() => setSelectedSort(sort))}
                        totalResults={processedCountries.length}
                      />
                    </div>

                    {/* Main Countries Grid Display */}
                    {processedCountries.length > 0 ? (
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="countries-grid">
                        <AnimatePresence mode="popLayout">
                          {processedCountries.map((country) => (
                            <CountryCard
                              key={country.cca3}
                              country={country}
                              isFavorite={favorites.includes(country.cca3)}
                              onToggleFavorite={handleToggleFavorite}
                              onSelect={handleSelectCountry}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Empty Search State */
                      <div
                        id="empty-search-panel"
                        className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-12 text-center min-h-[250px]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400 dark:bg-slate-900">
                          <Compass className="h-6 w-6 animate-spin" style={{ animationDuration: '6s' }} />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-200">
                          No Countries Found
                        </h3>
                        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 max-w-sm">
                          There are no countries matching your query "{searchQuery}" in region "{selectedRegion}". Try checking your spelling or adjusting filters.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedRegion('All');
                          }}
                          className="mt-6 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 transition-all active:scale-[0.98]"
                        >
                          Clear Active Filters
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. COUNTRY DETAILS VIEW */}
                {currentView === 'detail' && (
                  <div id="detail-view-outlet">
                    {activeDetailCountry ? (
                      <CountryDetail
                        country={activeDetailCountry}
                        isFavorite={favorites.includes(activeDetailCountry.cca3)}
                        onToggleFavorite={(code) => handleToggleFavorite(code)}
                        onBack={handleNavigateHome}
                        onBorderClick={handleSelectCountry}
                        cca3ToCountryMap={cca3ToCountryMap}
                      />
                    ) : (
                      <div className="space-y-4">
                        <ErrorMessage
                          message={`The requested country code "${selectedCca3}" was not resolved in the active index.`}
                          onRetry={handleNavigateHome}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* 3. BOOKMARKED FAVORITES VIEW */}
                {currentView === 'favorites' && (
                  <div id="favorites-view-outlet">
                    <FavoritesView
                      favoriteCountries={favoriteCountries}
                      onToggleFavorite={handleToggleFavorite}
                      onClearAll={handleClearAllFavorites}
                      onSelectCountry={handleSelectCountry}
                      onNavigateHome={handleNavigateHome}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      {/* Elegant Standard Slate Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white/40 py-6 text-center text-xs text-slate-400 backdrop-blur-xs dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-semibold text-slate-400 dark:text-slate-500">
          <p>© 2026 WorldExplorer. Designed and engineered as a high-fidelity REST Countries platform.</p>
          <div className="flex items-center gap-3">
            <span className="hover:text-teal-500 cursor-pointer" onClick={handleNavigateHome}>Explorer</span>
            <span>•</span>
            <span className="hover:text-red-500 cursor-pointer" onClick={handleNavigateFavorites}>Favorites ({favorites.length})</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
