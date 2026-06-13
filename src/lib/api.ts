import { Country } from '../types';
import { STATIC_COUNTRIES } from '../data/countriesData';
import worldCountries from 'world-countries';

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1';

const getHeaders = (url: string) => {
  const headers: Record<string, string> = {
    'Accept': 'application/json',
  };
  const isRestCountries = url.includes('restcountries.com');
  if (!isRestCountries) {
    const apiKey = (process.env as any).RC_LIVE_KEY || 'rc_live_7893ddef232c41f1a053ca1f8f5d597e';
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }
  }
  return headers;
};

export async function fetchAllCountries(): Promise<Country[]> {
  try {
    const url = `${REST_COUNTRIES_API}/all?fields=name,cca3,cca2,flags,population,region,subregion,capital,languages,currencies,borders,area,timezones,tld,coatOfArms`;
    const response = await fetch(
      url,
      { headers: getHeaders(url) }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch countries grid. Status: ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('Data format returned from API is invalid');
    }
    return data;
  } catch (error) {
    console.warn('Error in fetchAllCountries (failed to fetch), falling back safely to local high-fidelity country database + world-countries list:', error);
    
    const merged = [...STATIC_COUNTRIES];
    const existingCca3 = new Set(STATIC_COUNTRIES.map(c => c.cca3.toUpperCase()));

    worldCountries.forEach((wc: any) => {
      const code = wc.cca3.toUpperCase();
      if (!existingCca3.has(code)) {
        merged.push({
          name: {
            common: wc.name.common,
            official: wc.name.official,
            nativeName: wc.name.native || {}
          },
          cca3: wc.cca3,
          cca2: wc.cca2,
          capital: wc.capital || [],
          region: wc.region,
          subregion: wc.subregion || '',
          population: 0,
          area: wc.area || 0,
          borders: wc.borders || [],
          languages: wc.languages || {},
          currencies: wc.currencies || {},
          timezones: wc.timezones || ['UTC'],
          tld: wc.tld || [],
          flags: {
            png: `https://flagcdn.com/w320/${wc.cca2.toLowerCase()}.png`,
            svg: `https://flagcdn.com/${wc.cca2.toLowerCase()}.svg`,
            alt: `Flag of ${wc.name.common}`
          },
          coatOfArms: {
            png: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=200&auto=format&fit=crop',
            svg: ''
          }
        });
      }
    });

    return merged;
  }
}

export async function fetchCountryByCca3(cca3: string): Promise<Country> {
  try {
    const url = `${REST_COUNTRIES_API}/alpha/${cca3}`;
    const response = await fetch(url, {
      headers: getHeaders(url),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch details for country code: ${cca3}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.warn(`Error in fetchCountryByCca3 for ${cca3}, looking up in high-fidelity combined database:`, error);
    const foundStatic = STATIC_COUNTRIES.find((c) => c.cca3.toUpperCase() === cca3.toUpperCase());
    if (foundStatic) {
      return foundStatic;
    }
    
    const foundWc = worldCountries.find((wc) => wc.cca3.toUpperCase() === cca3.toUpperCase());
    if (foundWc) {
      return {
        name: {
          common: foundWc.name.common,
          official: foundWc.name.official,
          nativeName: foundWc.name.native || {}
        },
        cca3: foundWc.cca3,
        cca2: foundWc.cca2,
        capital: foundWc.capital || [],
        region: foundWc.region,
        subregion: foundWc.subregion || '',
        population: 0,
        area: foundWc.area || 0,
        borders: foundWc.borders || [],
        languages: foundWc.languages || {},
        currencies: foundWc.currencies || {},
        timezones: ['UTC'],
        tld: foundWc.tld || [],
        flags: {
          png: `https://flagcdn.com/w320/${foundWc.cca2.toLowerCase()}.png`,
          svg: `https://flagcdn.com/${foundWc.cca2.toLowerCase()}.svg`,
          alt: `Flag of ${foundWc.name.common}`
        },
        coatOfArms: {
          png: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?q=80&w=200&auto=format&fit=crop',
          svg: ''
        }
      };
    }
    throw error;
  }
}

