import { Country } from '../types';

export const STATIC_COUNTRIES: Country[] = [
  {
    name: { common: "Uzbekistan", official: "Republic of Uzbekistan" },
    cca3: "UZB",
    cca2: "UZ",
    capital: ["Tashkent"],
    region: "Asia",
    subregion: "Central Asia",
    population: 34232050,
    area: 447400,
    borders: ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
    languages: { uzb: "Uzbek", rus: "Russian" },
    currencies: { UZS: { name: "Uzbekistani soʻm", symbol: "soʻm" } },
    timezones: ["UTC+05:00"],
    tld: [".uz"],
    flags: {
      png: "https://flagcdn.com/w320/uz.png",
      svg: "https://flagcdn.com/uz.svg"
    }
  },
  {
    name: { common: "United States", official: "United States of America" },
    cca3: "USA",
    cca2: "US",
    capital: ["Washington, D.C."],
    region: "Americas",
    subregion: "North America",
    population: 331002651,
    area: 9833517,
    borders: ["CAN", "MEX"],
    languages: { eng: "English" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } },
    timezones: ["UTC-05:00", "UTC-06:00", "UTC-07:00", "UTC-08:00"],
    tld: [".us"],
    flags: {
      png: "https://flagcdn.com/w320/us.png",
      svg: "https://flagcdn.com/us.svg"
    }
  },
  {
    name: { common: "United Kingdom", official: "United Kingdom of Great Britain and Northern Ireland" },
    cca3: "GBR",
    cca2: "GB",
    capital: ["London"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 67081000,
    area: 242900,
    borders: ["IRL"],
    languages: { eng: "English" },
    currencies: { GBP: { name: "British pound", symbol: "£" } },
    timezones: ["UTC+00:00"],
    tld: [".uk"],
    flags: {
      png: "https://flagcdn.com/w320/gb.png",
      svg: "https://flagcdn.com/gb.svg"
    }
  },
  {
    name: { common: "Germany", official: "Federal Republic of Germany" },
    cca3: "DEU",
    cca2: "DE",
    capital: ["Berlin"],
    region: "Europe",
    subregion: "Western Europe",
    population: 83240525,
    area: 357114,
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".de"],
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg"
    }
  },
  {
    name: { common: "France", official: "French Republic" },
    cca3: "FRA",
    cca2: "FR",
    capital: ["Paris"],
    region: "Europe",
    subregion: "Western Europe",
    population: 67391582,
    area: 551695,
    borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
    languages: { fra: "French" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".fr"],
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
      svg: "https://flagcdn.com/fr.svg"
    }
  },
  {
    name: { common: "Japan", official: "Japan" },
    cca3: "JPN",
    cca2: "JP",
    capital: ["Tokyo"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 125800000,
    area: 377975,
    borders: [],
    languages: { jpn: "Japanese" },
    currencies: { JPY: { name: "Japanese yen", symbol: "¥" } },
    timezones: ["UTC+09:00"],
    tld: [".jp"],
    flags: {
      png: "https://flagcdn.com/w320/jp.png",
      svg: "https://flagcdn.com/jp.svg"
    }
  },
  {
    name: { common: "Canada", official: "Canada" },
    cca3: "CAN",
    cca2: "CA",
    capital: ["Ottawa"],
    region: "Americas",
    subregion: "North America",
    population: 38008005,
    area: 9984670,
    borders: ["USA"],
    languages: { eng: "English", fra: "French" },
    currencies: { CAD: { name: "Canadian dollar", symbol: "$" } },
    timezones: ["UTC-03:30", "UTC-04:00", "UTC-05:00", "UTC-06:00", "UTC-07:00", "UTC-08:00"],
    tld: [".ca"],
    flags: {
      png: "https://flagcdn.com/w320/ca.png",
      svg: "https://flagcdn.com/ca.svg"
    }
  },
  {
    name: { common: "Australia", official: "Commonwealth of Australia" },
    cca3: "AUS",
    cca2: "AU",
    capital: ["Canberra"],
    region: "Oceania",
    subregion: "Australia and New Zealand",
    population: 25687041,
    area: 7692024,
    borders: [],
    languages: { eng: "English" },
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } },
    timezones: ["UTC+08:00", "UTC+09:30", "UTC+10:00"],
    tld: [".au"],
    flags: {
      png: "https://flagcdn.com/w320/au.png",
      svg: "https://flagcdn.com/au.svg"
    }
  },
  {
    name: { common: "India", official: "Republic of India" },
    cca3: "IND",
    cca2: "IN",
    capital: ["New Delhi"],
    region: "Asia",
    subregion: "Southern Asia",
    population: 1380004385,
    area: 3287590,
    borders: ["BGD", "BTN", "CHN", "MMR", "NPL", "PAK"],
    languages: { hin: "Hindi", eng: "English" },
    currencies: { INR: { name: "Indian rupee", symbol: "₹" } },
    timezones: ["UTC+05:30"],
    tld: [".in"],
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg"
    }
  },
  {
    name: { common: "China", official: "People's Republic of China" },
    cca3: "CHN",
    cca2: "CN",
    capital: ["Beijing"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 1402112000,
    area: 9706961,
    borders: ["AFG", "BTN", "IND", "KAZ", "KGZ", "LAO", "MNG", "MMR", "NPL", "PRK", "RUS", "TJK", "VNM"],
    languages: { cmn: "Mandarin" },
    currencies: { CNY: { name: "Renminbi", symbol: "¥" } },
    timezones: ["UTC+08:00"],
    tld: [".cn"],
    flags: {
      png: "https://flagcdn.com/w320/cn.png",
      svg: "https://flagcdn.com/cn.svg"
    }
  },
  {
    name: { common: "Brazil", official: "Federative Republic of Brazil" },
    cca3: "BRA",
    cca2: "BR",
    capital: ["Brasília"],
    region: "Americas",
    subregion: "South America",
    population: 212559409,
    area: 8515767,
    borders: ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
    languages: { por: "Portuguese" },
    currencies: { BRL: { name: "Brazilian real", symbol: "R$" } },
    timezones: ["UTC-02:00", "UTC-03:00", "UTC-04:00", "UTC-05:00"],
    tld: [".br"],
    flags: {
      png: "https://flagcdn.com/w320/br.png",
      svg: "https://flagcdn.com/br.svg"
    }
  },
  {
    name: { common: "Russia", official: "Russian Federation" },
    cca3: "RUS",
    cca2: "RU",
    capital: ["Moscow"],
    region: "Europe",
    subregion: "Eastern Europe",
    population: 144104080,
    area: 17098246,
    borders: ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"],
    languages: { rus: "Russian" },
    currencies: { RUB: { name: "Russian ruble", symbol: "₽" } },
    timezones: ["UTC+03:00", "UTC+04:00", "UTC+05:00", "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+09:00", "UTC+10:00", "UTC+11:00", "UTC+12:00"],
    tld: [".ru"],
    flags: {
      png: "https://flagcdn.com/w320/ru.png",
      svg: "https://flagcdn.com/ru.svg"
    }
  },
  {
    name: { common: "South Africa", official: "Republic of South Africa" },
    cca3: "ZAF",
    cca2: "ZA",
    capital: ["Pretoria", "Cape Town", "Bloemfontein"],
    region: "Africa",
    subregion: "Southern Africa",
    population: 59308690,
    area: 1221037,
    borders: ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
    languages: { eng: "English", afr: "Afrikaans", xho: "Xhosa", zul: "Zulu" },
    currencies: { ZAR: { name: "South African rand", symbol: "R" } },
    timezones: ["UTC+02:00"],
    tld: [".za"],
    flags: {
      png: "https://flagcdn.com/w320/za.png",
      svg: "https://flagcdn.com/za.svg"
    }
  },
  {
    name: { common: "Egypt", official: "Arab Republic of Egypt" },
    cca3: "EGY",
    cca2: "EG",
    capital: ["Cairo"],
    region: "Africa",
    subregion: "Northern Africa",
    population: 102334403,
    area: 1002450,
    borders: ["ISR", "LBY", "SDN"],
    languages: { ara: "Arabic" },
    currencies: { EGP: { name: "Egyptian pound", symbol: "E£" } },
    timezones: ["UTC+02:00"],
    tld: [".eg"],
    flags: {
      png: "https://flagcdn.com/w320/eg.png",
      svg: "https://flagcdn.com/eg.svg"
    }
  },
  {
    name: { common: "Nigeria", official: "Federal Republic of Nigeria" },
    cca3: "NGA",
    cca2: "NG",
    capital: ["Abuja"],
    region: "Africa",
    subregion: "Western Africa",
    population: 206139587,
    area: 923768,
    borders: ["BEN", "CMR", "CHA", "NER"],
    languages: { eng: "English" },
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
    timezones: ["UTC+01:00"],
    tld: [".ng"],
    flags: {
      png: "https://flagcdn.com/w320/ng.png",
      svg: "https://flagcdn.com/ng.svg"
    }
  },
  {
    name: { common: "Argentina", official: "Argentine Republic" },
    cca3: "ARG",
    cca2: "AR",
    capital: ["Buenos Aires"],
    region: "Americas",
    subregion: "South America",
    population: 45195777,
    area: 2780400,
    borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
    languages: { spa: "Spanish" },
    currencies: { ARS: { name: "Argentine peso", symbol: "$" } },
    timezones: ["UTC-03:00"],
    tld: [".ar"],
    flags: {
      png: "https://flagcdn.com/w320/ar.png",
      svg: "https://flagcdn.com/ar.svg"
    }
  },
  {
    name: { common: "Mexico", official: "United Mexican States" },
    cca3: "MEX",
    cca2: "MX",
    capital: ["Mexico City"],
    region: "Americas",
    subregion: "North America",
    population: 128932753,
    area: 1964375,
    borders: ["BLZ", "GTM", "USA"],
    languages: { spa: "Spanish" },
    currencies: { MXN: { name: "Mexican peso", symbol: "$" } },
    timezones: ["UTC-06:00", "UTC-07:00", "UTC-08:00"],
    tld: [".mx"],
    flags: {
      png: "https://flagcdn.com/w320/mx.png",
      svg: "https://flagcdn.com/mx.svg"
    }
  },
  {
    name: { common: "Turkey", official: "Republic of Turkey" },
    cca3: "TUR",
    cca2: "TR",
    capital: ["Ankara"],
    region: "Asia",
    subregion: "Western Asia",
    population: 84339067,
    area: 783562,
    borders: ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
    languages: { tur: "Turkish" },
    currencies: { TRY: { name: "Turkish lira", symbol: "₺" } },
    timezones: ["UTC+03:00"],
    tld: [".tr"],
    flags: {
      png: "https://flagcdn.com/w320/tr.png",
      svg: "https://flagcdn.com/tr.svg"
    }
  },
  {
    name: { common: "Italy", official: "Italian Republic" },
    cca3: "ITA",
    cca2: "IT",
    capital: ["Rome"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 59554023,
    area: 301340,
    borders: ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
    languages: { ita: "Italian" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".it"],
    flags: {
      png: "https://flagcdn.com/w320/it.png",
      svg: "https://flagcdn.com/it.svg"
    }
  },
  {
    name: { common: "Spain", official: "Kingdom of Spain" },
    cca3: "ESP",
    cca2: "ES",
    capital: ["Madrid"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 47351595,
    area: 505992,
    borders: ["AND", "FRA", "GIB", "PRT", "MAR"],
    languages: { spa: "Spanish", cat: "Catalan", glg: "Galician", eus: "Basque" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".es"],
    flags: {
      png: "https://flagcdn.com/w320/es.png",
      svg: "https://flagcdn.com/es.svg"
    }
  },
  {
    name: { common: "South Korea", official: "Republic of Korea" },
    cca3: "KOR",
    cca2: "KR",
    capital: ["Seoul"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 51780579,
    area: 100210,
    borders: ["PRK"],
    languages: { kor: "Korean" },
    currencies: { KRW: { name: "South Korean won", symbol: "₩" } },
    timezones: ["UTC+09:00"],
    tld: [".kr"],
    flags: {
      png: "https://flagcdn.com/w320/kr.png",
      svg: "https://flagcdn.com/kr.svg"
    }
  },
  {
    name: { common: "New Zealand", official: "New Zealand" },
    cca3: "NZL",
    cca2: "NZ",
    capital: ["Wellington"],
    region: "Oceania",
    subregion: "Australia and New Zealand",
    population: 5084300,
    area: 268021,
    borders: [],
    languages: { eng: "English", mri: "Māori" },
    currencies: { NZD: { name: "New Zealand dollar", symbol: "$" } },
    timezones: ["UTC+12:00"],
    tld: [".nz"],
    flags: {
      png: "https://flagcdn.com/w320/nz.png",
      svg: "https://flagcdn.com/nz.svg"
    }
  },
  {
    name: { common: "Switzerland", official: "Swiss Confederation" },
    cca3: "CHE",
    cca2: "CH",
    capital: ["Bern"],
    region: "Europe",
    subregion: "Western Europe",
    population: 8636896,
    area: 41285,
    borders: ["AUT", "FRA", "DEU", "ITA", "LIE"],
    languages: { deu: "German", fra: "French", ita: "Italian", roh: "Romansh" },
    currencies: { CHF: { name: "Swiss franc", symbol: "Fr." } },
    timezones: ["UTC+01:00"],
    tld: [".ch"],
    flags: {
      png: "https://flagcdn.com/w320/ch.png",
      svg: "https://flagcdn.com/ch.svg"
    }
  },
  {
    name: { common: "Sweden", official: "Kingdom of Sweden" },
    cca3: "SWE",
    cca2: "SE",
    capital: ["Stockholm"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 10353442,
    area: 450295,
    borders: ["FIN", "NOR"],
    languages: { swe: "Swedish" },
    currencies: { SEK: { name: "Swedish krona", symbol: "kr" } },
    timezones: ["UTC+01:00"],
    tld: [".se"],
    flags: {
      png: "https://flagcdn.com/w320/se.png",
      svg: "https://flagcdn.com/se.svg"
    }
  },
  {
    name: { common: "Norway", official: "Kingdom of Norway" },
    cca3: "NOR",
    cca2: "NO",
    capital: ["Oslo"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 5379855,
    area: 323802,
    borders: ["FIN", "SWE", "RUS"],
    languages: { nob: "Norwegian Bokmål", nno: "Norwegian Nynorsk" },
    currencies: { NOK: { name: "Norwegian krone", symbol: "kr" } },
    timezones: ["UTC+01:00"],
    tld: [".no"],
    flags: {
      png: "https://flagcdn.com/w320/no.png",
      svg: "https://flagcdn.com/no.svg"
    }
  },
  {
    name: { common: "Netherlands", official: "Kingdom of the Netherlands" },
    cca3: "NLD",
    cca2: "NL",
    capital: ["Amsterdam"],
    region: "Europe",
    subregion: "Western Europe",
    population: 17441139,
    area: 41850,
    borders: ["BEL", "DEU"],
    languages: { nld: "Dutch" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".nl"],
    flags: {
      png: "https://flagcdn.com/w320/nl.png",
      svg: "https://flagcdn.com/nl.svg"
    }
  },
  {
    name: { common: "Belgium", official: "Kingdom of Belgium" },
    cca3: "BEL",
    cca2: "BE",
    capital: ["Brussels"],
    region: "Europe",
    subregion: "Western Europe",
    population: 11555997,
    area: 30528,
    borders: ["FRA", "DEU", "LUX", "NLD"],
    languages: { nld: "Dutch", fra: "French", deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".be"],
    flags: {
      png: "https://flagcdn.com/w320/be.png",
      svg: "https://flagcdn.com/be.svg"
    }
  },
  {
    name: { common: "Singapore", official: "Republic of Singapore" },
    cca3: "SGP",
    cca2: "SG",
    capital: ["Singapore"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 5685807,
    area: 710,
    borders: [],
    languages: { eng: "English", msa: "Malay", zho: "Chinese", tam: "Tamil" },
    currencies: { SGD: { name: "Singapore dollar", symbol: "$" } },
    timezones: ["UTC+08:00"],
    tld: [".sg"],
    flags: {
      png: "https://flagcdn.com/w320/sg.png",
      svg: "https://flagcdn.com/sg.svg"
    }
  },
  {
    name: { common: "Kazakhstan", official: "Republic of Kazakhstan" },
    cca3: "KAZ",
    cca2: "KZ",
    capital: ["Astana"],
    region: "Asia",
    subregion: "Central Asia",
    population: 18754440,
    area: 2724900,
    borders: ["CHN", "KGZ", "RUS", "TJK", "UZB"],
    languages: { kaz: "Kazakh", rus: "Russian" },
    currencies: { KZT: { name: "Kazakhstani tenge", symbol: "₸" } },
    timezones: ["UTC+05:00", "UTC+06:00"],
    tld: [".kz"],
    flags: {
      png: "https://flagcdn.com/w320/kz.png",
      svg: "https://flagcdn.com/kz.svg"
    }
  },
  {
    name: { common: "Kyrgyzstan", official: "Kyrgyz Republic" },
    cca3: "KGZ",
    cca2: "KG",
    capital: ["Bishkek"],
    region: "Asia",
    subregion: "Central Asia",
    population: 6591600,
    area: 199951,
    borders: ["CHN", "KAZ", "TJK", "UZB"],
    languages: { kir: "Kyrgyz", rus: "Russian" },
    currencies: { KGS: { name: "Kyrgyzstani som", symbol: "с" } },
    timezones: ["UTC+06:00"],
    tld: [".kg"],
    flags: {
      png: "https://flagcdn.com/w320/kg.png",
      svg: "https://flagcdn.com/kg.svg"
    }
  },
  {
    name: { common: "Tajikistan", official: "Republic of Tajikistan" },
    cca3: "TJK",
    cca2: "TJ",
    capital: ["Dushanbe"],
    region: "Asia",
    subregion: "Central Asia",
    population: 9537645,
    area: 143100,
    borders: ["AFG", "CHN", "KGZ", "UZB"],
    languages: { tgk: "Tajik", rus: "Russian" },
    currencies: { TJS: { name: "Tajikistani somoni", symbol: "ЅМ" } },
    timezones: ["UTC+05:00"],
    tld: [".tj"],
    flags: {
      png: "https://flagcdn.com/w320/tj.png",
      svg: "https://flagcdn.com/tj.svg"
    }
  },
  {
    name: { common: "Turkmenistan", official: "Turkmenistan" },
    cca3: "TKM",
    cca2: "TM",
    capital: ["Ashgabat"],
    region: "Asia",
    subregion: "Central Asia",
    population: 6031187,
    area: 488100,
    borders: ["AFG", "IRN", "KAZ", "UZB"],
    languages: { tuk: "Turkmen" },
    currencies: { TMT: { name: "Turkmenistani manat", symbol: "m" } },
    timezones: ["UTC+05:00"],
    tld: [".tm"],
    flags: {
      png: "https://flagcdn.com/w320/tm.png",
      svg: "https://flagcdn.com/tm.svg"
    }
  },
  {
    name: { common: "Afghanistan", official: "Islamic Emirate of Afghanistan" },
    cca3: "AFG",
    cca2: "AF",
    capital: ["Kabul"],
    region: "Asia",
    subregion: "Southern Asia",
    population: 38928341,
    area: 652230,
    borders: ["CHN", "IRN", "PAK", "TJK", "TKM", "UZB"],
    languages: { prs: "Dari", pus: "Pashto" },
    currencies: { AFN: { name: "Afghan afghani", symbol: "؋" } },
    timezones: ["UTC+04:30"],
    tld: [".af"],
    flags: {
      png: "https://flagcdn.com/w320/af.png",
      svg: "https://flagcdn.com/af.svg"
    }
  },
  {
    name: { common: "Pakistan", official: "Islamic Republic of Pakistan" },
    cca3: "PAK",
    cca2: "PK",
    capital: ["Islamabad"],
    region: "Asia",
    subregion: "Southern Asia",
    population: 220892331,
    area: 881913,
    borders: ["AFG", "CHN", "IND", "IRN"],
    languages: { urd: "Urdu", eng: "English" },
    currencies: { PKR: { name: "Pakistani rupee", symbol: "₨" } },
    timezones: ["UTC+05:00"],
    tld: [".pk"],
    flags: {
      png: "https://flagcdn.com/w320/pk.png",
      svg: "https://flagcdn.com/pk.svg"
    }
  },
  {
    name: { common: "Bangladesh", official: "People's Republic of Bangladesh" },
    cca3: "BGD",
    cca2: "BD",
    capital: ["Dhaka"],
    region: "Asia",
    subregion: "Southern Asia",
    population: 164689383,
    area: 147570,
    borders: ["IND", "MMR"],
    languages: { ben: "Bengali" },
    currencies: { BDT: { name: "Bangladeshi taka", symbol: "৳" } },
    timezones: ["UTC+06:00"],
    tld: [".bd"],
    flags: {
      png: "https://flagcdn.com/w320/bd.png",
      svg: "https://flagcdn.com/bd.svg"
    }
  },
  {
    name: { common: "Saudi Arabia", official: "Kingdom of Saudi Arabia" },
    cca3: "SAU",
    cca2: "SA",
    capital: ["Riyadh"],
    region: "Asia",
    subregion: "Western Asia",
    population: 34813867,
    area: 2149690,
    borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
    languages: { ara: "Arabic" },
    currencies: { SAR: { name: "Saudi riyal", symbol: "ر.س" } },
    timezones: ["UTC+03:00"],
    tld: [".sa"],
    flags: {
      png: "https://flagcdn.com/w320/sa.png",
      svg: "https://flagcdn.com/sa.svg"
    }
  },
  {
    name: { common: "Malaysia", official: "Malaysia" },
    cca3: "MYS",
    cca2: "MY",
    capital: ["Kuala Lumpur"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 32365998,
    area: 330803,
    borders: ["BRN", "IDN", "THA"],
    languages: { msy: "Malay", eng: "English" },
    currencies: { MYR: { name: "Malaysian ringgit", symbol: "RM" } },
    timezones: ["UTC+08:00"],
    tld: [".my"],
    flags: {
      png: "https://flagcdn.com/w320/my.png",
      svg: "https://flagcdn.com/my.svg"
    }
  },
  {
    name: { common: "Indonesia", official: "Republic of Indonesia" },
    cca3: "IDN",
    cca2: "ID",
    capital: ["Jakarta"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 273523621,
    area: 1904569,
    borders: ["TLS", "MYS", "PNG"],
    languages: { ind: "Indonesian" },
    currencies: { IDR: { name: "Indonesian rupiah", symbol: "Rp" } },
    timezones: ["UTC+07:00", "UTC+08:00", "UTC+09:00"],
    tld: [".id"],
    flags: {
      png: "https://flagcdn.com/w320/id.png",
      svg: "https://flagcdn.com/id.svg"
    }
  },
  {
    name: { common: "Thailand", official: "Kingdom of Thailand" },
    cca3: "THA",
    cca2: "TH",
    capital: ["Bangkok"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 69799978,
    area: 513120,
    borders: ["MMR", "KHM", "LAO", "MYS"],
    languages: { tha: "Thai" },
    currencies: { THB: { name: "Thai baht", symbol: "฿" } },
    timezones: ["UTC+07:00"],
    tld: [".th"],
    flags: {
      png: "https://flagcdn.com/w320/th.png",
      svg: "https://flagcdn.com/th.svg"
    }
  },
  {
    name: { common: "Vietnam", official: "Socialist Republic of Vietnam" },
    cca3: "VNM",
    cca2: "VN",
    capital: ["Hanoi"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 97338583,
    area: 331212,
    borders: ["KHM", "CHN", "LAO"],
    languages: { vie: "Vietnamese" },
    currencies: { VND: { name: "Vietnamese đồng", symbol: "₫" } },
    timezones: ["UTC+07:00"],
    tld: [".vn"],
    flags: {
      png: "https://flagcdn.com/w320/vn.png",
      svg: "https://flagcdn.com/vn.svg"
    }
  },
  {
    name: { common: "Philippines", official: "Republic of the Philippines" },
    cca3: "PHL",
    cca2: "PH",
    capital: ["Manila"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 109581085,
    area: 300000,
    borders: [],
    languages: { eng: "English", fil: "Filipino" },
    currencies: { PHP: { name: "Philippine peso", symbol: "₱" } },
    timezones: ["UTC+08:00"],
    tld: [".ph"],
    flags: {
      png: "https://flagcdn.com/w320/ph.png",
      svg: "https://flagcdn.com/ph.svg"
    }
  },
  {
    name: { common: "United Arab Emirates", official: "United Arab Emirates" },
    cca3: "ARE",
    cca2: "AE",
    capital: ["Abu Dhabi"],
    region: "Asia",
    subregion: "Western Asia",
    population: 9890400,
    area: 83600,
    borders: ["OMN", "SAU"],
    languages: { ara: "Arabic" },
    currencies: { AED: { name: "United Arab Emirates dirham", symbol: "د.إ" } },
    timezones: ["UTC+04:00"],
    tld: [".ae"],
    flags: {
      png: "https://flagcdn.com/w320/ae.png",
      svg: "https://flagcdn.com/ae.svg"
    }
  },
  {
    name: { common: "Ukraine", official: "Ukraine" },
    cca3: "UKR",
    cca2: "UA",
    capital: ["Kyiv"],
    region: "Europe",
    subregion: "Eastern Europe",
    population: 44134693,
    area: 603500,
    borders: ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
    languages: { ukr: "Ukrainian" },
    currencies: { UAH: { name: "Ukrainian hryvnia", symbol: "₴" } },
    timezones: ["UTC+02:00"],
    tld: [".ua"],
    flags: {
      png: "https://flagcdn.com/w320/ua.png",
      svg: "https://flagcdn.com/ua.svg"
    }
  },
  {
    name: { common: "Poland", official: "Republic of Poland" },
    cca3: "POL",
    cca2: "PL",
    capital: ["Warsaw"],
    region: "Europe",
    subregion: "Eastern Europe",
    population: 37950802,
    area: 312679,
    borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
    languages: { pol: "Polish" },
    currencies: { PLN: { name: "Polish złoty", symbol: "zł" } },
    timezones: ["UTC+01:00"],
    tld: [".pl"],
    flags: {
      png: "https://flagcdn.com/w320/pl.png",
      svg: "https://flagcdn.com/pl.svg"
    }
  },
  {
    name: { common: "Austria", official: "Republic of Austria" },
    cca3: "AUT",
    cca2: "AT",
    capital: ["Vienna"],
    region: "Europe",
    subregion: "Central Europe",
    population: 8901064,
    area: 83871,
    borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+01:00"],
    tld: [".at"],
    flags: {
      png: "https://flagcdn.com/w320/at.png",
      svg: "https://flagcdn.com/at.svg"
    }
  },
  {
    name: { common: "Portugal", official: "Portuguese Republic" },
    cca3: "PRT",
    cca2: "PT",
    capital: ["Lisbon"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 10305564,
    area: 92090,
    borders: ["ESP"],
    languages: { por: "Portuguese" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+00:00"],
    tld: [".pt"],
    flags: {
      png: "https://flagcdn.com/w320/pt.png",
      svg: "https://flagcdn.com/pt.svg"
    }
  },
  {
    name: { common: "Greece", official: "Hellenic Republic" },
    cca3: "GRC",
    cca2: "GR",
    capital: ["Athens"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 10718565,
    area: 131957,
    borders: ["ALB", "BGR", "MKD", "TUR"],
    languages: { ell: "Greek" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+02:00"],
    tld: [".gr"],
    flags: {
      png: "https://flagcdn.com/w320/gr.png",
      svg: "https://flagcdn.com/gr.svg"
    }
  },
  {
    name: { common: "Finland", official: "Republic of Finland" },
    cca3: "FIN",
    cca2: "FI",
    capital: ["Helsinki"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 5530719,
    area: 338424,
    borders: ["NOR", "SWE", "RUS"],
    languages: { fin: "Finnish", swe: "Swedish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+02:00"],
    tld: [".fi"],
    flags: {
      png: "https://flagcdn.com/w320/fi.png",
      svg: "https://flagcdn.com/fi.svg"
    }
  },
  {
    name: { common: "Denmark", official: "Kingdom of Denmark" },
    cca3: "DNK",
    cca2: "DK",
    capital: ["Copenhagen"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 5831404,
    area: 43094,
    borders: ["DEU"],
    languages: { dan: "Danish" },
    currencies: { DKK: { name: "Danish krone", symbol: "kr" } },
    timezones: ["UTC+01:00"],
    tld: [".dk"],
    flags: {
      png: "https://flagcdn.com/w320/dk.png",
      svg: "https://flagcdn.com/dk.svg"
    }
  },
  {
    name: { common: "Ireland", official: "Republic of Ireland" },
    cca3: "IRL",
    cca2: "IE",
    capital: ["Dublin"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 4994724,
    area: 70273,
    borders: ["GBR"],
    languages: { eng: "English", gle: "Irish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    timezones: ["UTC+00:00"],
    tld: [".ie"],
    flags: {
      png: "https://flagcdn.com/w320/ie.png",
      svg: "https://flagcdn.com/ie.svg"
    }
  },
  {
    name: { common: "Morocco", official: "Kingdom of Morocco" },
    cca3: "MAR",
    cca2: "MA",
    capital: ["Rabat"],
    region: "Africa",
    subregion: "Northern Africa",
    population: 36910558,
    area: 446550,
    borders: ["DZA", "ESP"],
    languages: { ara: "Arabic", ber: "Berber" },
    currencies: { MAD: { name: "Moroccan dirham", symbol: "د.م." } },
    timezones: ["UTC+01:00"],
    tld: [".ma"],
    flags: {
      png: "https://flagcdn.com/w320/ma.png",
      svg: "https://flagcdn.com/ma.svg"
    }
  },
  {
    name: { common: "Kenya", official: "Republic of Kenya" },
    cca3: "KEN",
    cca2: "KE",
    capital: ["Nairobi"],
    region: "Africa",
    subregion: "Eastern Africa",
    population: 53771300,
    area: 580367,
    borders: ["ETH", "KEN", "SOM", "SSD", "TZA", "UGA"],
    languages: { eng: "English", swa: "Swahili" },
    currencies: { KES: { name: "Kenyan shilling", symbol: "Sh" } },
    timezones: ["UTC+03:00"],
    tld: [".ke"],
    flags: {
      png: "https://flagcdn.com/w320/ke.png",
      svg: "https://flagcdn.com/ke.svg"
    }
  },
  {
    name: { common: "Ethiopia", official: "Federal Democratic Republic of Ethiopia" },
    cca3: "ETH",
    cca2: "ET",
    capital: ["Addis Ababa"],
    region: "Africa",
    subregion: "Eastern Africa",
    population: 114963583,
    area: 1104300,
    borders: ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
    languages: { amh: "Amharic" },
    currencies: { ETB: { name: "Ethiopian birr", symbol: "Br" } },
    timezones: ["UTC+03:00"],
    tld: [".et"],
    flags: {
      png: "https://flagcdn.com/w320/et.png",
      svg: "https://flagcdn.com/et.svg"
    }
  },
  {
    name: { common: "Ghana", official: "Republic of Ghana" },
    cca3: "GHA",
    cca2: "GH",
    capital: ["Accra"],
    region: "Africa",
    subregion: "Western Africa",
    population: 31072945,
    area: 238533,
    borders: ["BFA", "CIV", "TGO"],
    languages: { eng: "English" },
    currencies: { GHS: { name: "Ghanaian cedi", symbol: "₵" } },
    timezones: ["UTC+00:00"],
    tld: [".gh"],
    flags: {
      png: "https://flagcdn.com/w320/gh.png",
      svg: "https://flagcdn.com/gh.svg"
    }
  },
  {
    name: { common: "Colombia", official: "Republic of Colombia" },
    cca3: "COL",
    cca2: "CO",
    capital: ["Bogotá"],
    region: "Americas",
    subregion: "South America",
    population: 50882884,
    area: 1141748,
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    languages: { spa: "Spanish" },
    currencies: { COP: { name: "Colombian peso", symbol: "$" } },
    timezones: ["UTC-05:00"],
    tld: [".co"],
    flags: {
      png: "https://flagcdn.com/w320/co.png",
      svg: "https://flagcdn.com/co.svg"
    }
  },
  {
    name: { common: "Peru", official: "Republic of Peru" },
    cca3: "PER",
    cca2: "PE",
    capital: ["Lima"],
    region: "Americas",
    subregion: "South America",
    population: 32971846,
    area: 1285216,
    borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
    languages: { spa: "Spanish", que: "Quechua", aym: "Aymara" },
    currencies: { PEN: { name: "Peruvian sol", symbol: "S/." } },
    timezones: ["UTC-05:00"],
    tld: [".pe"],
    flags: {
      png: "https://flagcdn.com/w320/pe.png",
      svg: "https://flagcdn.com/pe.svg"
    }
  },
  {
    name: { common: "Chile", official: "Republic of Chile" },
    cca3: "CHL",
    cca2: "CL",
    capital: ["Santiago"],
    region: "Americas",
    subregion: "South America",
    population: 19116209,
    area: 756102,
    borders: ["ARG", "BOL", "PER"],
    languages: { spa: "Spanish" },
    currencies: { CLP: { name: "Chilean peso", symbol: "$" } },
    timezones: ["UTC-04:00", "UTC-06:00"],
    tld: [".cl"],
    flags: {
      png: "https://flagcdn.com/w320/cl.png",
      svg: "https://flagcdn.com/cl.svg"
    }
  }
];
