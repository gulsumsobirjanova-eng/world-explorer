export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  cca2?: string;
  ccn3?: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol?: string;
    };
  };
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  area: number;
  flag?: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  timezones?: string[];
  tld?: string[];
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
}

export type SortField = 'alphabetical-asc' | 'alphabetical-desc' | 'population-desc' | 'population-asc' | 'area-desc';

export type SelectedRegion = 'All' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
