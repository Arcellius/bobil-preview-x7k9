// ============================================================
// Bobil & Campingvogn Database — Testdata
// ============================================================

const manufacturers = [
  {
    id: "hymer",
    name: "Hymer",
    slug: "hymer",
    country: "Tyskland",
    website_url: "https://www.hymer.com/no/nb",
    logo_url: "https://www.hymer.com/no/nb/-/media/hymer/logos/hymer-logo.svg",
    description: "HYMER er en av Europas ledende produsenter av bobiler og campingvogner, grunnlagt i 1957 i Bad Waldsee, Tyskland."
  },
  {
    id: "adria",
    name: "Adria",
    slug: "adria",
    country: "Slovenia",
    website_url: "https://no.adria-mobil.com",
    logo_url: "https://no.adria-mobil.com/assets/images/adria-logo.svg",
    description: "Adria Mobil er en slovensk produsent av bobiler og campingvogner, grunnlagt i 1965. Kjent for innovativt design og god verdi."
  }
];

const modelSeries = [
  // --- HYMER ---
  {
    id: "hymer-venture-s",
    manufacturer_id: "hymer",
    name: "Venture S",
    full_name: "HYMER Venture S",
    slug: "hymer-venture-s",
    vehicle_type: "bobil",
    category: "delintegrert",
    description: "Venture S kombinerer luksuriøst interiør med kompakt design. Perfekt for par som ønsker komfort uten å gå på kompromiss med kjøreegenskapene.",
    source_url: "https://www.hymer.com/no/nb/bobiler/hymer-venture-s",
    badge: null,
    price_from_nok: 3288000,
    hero_image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80"
  },
  {
    id: "hymer-b-klasse-masterline",
    manufacturer_id: "hymer",
    name: "B-Klasse MasterLine I",
    full_name: "HYMER B-Klasse MasterLine I",
    slug: "hymer-b-klasse-masterline",
    vehicle_type: "bobil",
    category: "helintegrert",
    description: "Flaggskipet i HYMER-familien. B-Klasse MasterLine I er en helintegrert bobil som setter standarden for komfort og kvalitet på veien.",
    source_url: "https://www.hymer.com/no/nb/bobiler/hymer-b-klasse-masterline",
    badge: null,
    price_from_nok: 2306000,
    hero_image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80"
  },
  {
    id: "hymer-b-ml-blackline",
    manufacturer_id: "hymer",
    name: "B-ML I BlackLine",
    full_name: "HYMER B-ML I BlackLine",
    slug: "hymer-b-ml-blackline",
    vehicle_type: "bobil",
    category: "helintegrert",
    description: "En eksklusiv spesialutgave av B-Klasse MasterLine med mørkt eksteriør og premium interiør. Begrenset opplag.",
    source_url: "https://www.hymer.com/no/nb/bobiler/hymer-b-ml-i-blackline",
    badge: "Special Edition",
    price_from_nok: 2546000,
    hero_image: "https://images.unsplash.com/photo-1543796076-c2eab763a4ce?w=800&q=80"
  },
  {
    id: "hymer-exsis-i",
    manufacturer_id: "hymer",
    name: "Exsis-i",
    full_name: "HYMER Exsis-i",
    slug: "hymer-exsis-i",
    vehicle_type: "bobil",
    category: "helintegrert",
    description: "Lett og smidig helintegrert bobil. Exsis-i veier under 3,5 tonn og kan kjøres med vanlig førerkort klasse B.",
    source_url: "https://www.hymer.com/no/nb/bobiler/hymer-exsis-i",
    badge: "Under 3,5t",
    price_from_nok: 1890000,
    hero_image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
  },
  {
    id: "hymer-tramp-s",
    manufacturer_id: "hymer",
    name: "Tramp S",
    full_name: "HYMER Tramp S",
    slug: "hymer-tramp-s",
    vehicle_type: "bobil",
    category: "delintegrert",
    description: "Allsidig delintegrert bobil med romslig planløsning. Tramp S byr på mye plass til en overkommelig pris.",
    source_url: "https://www.hymer.com/no/nb/bobiler/hymer-tramp-s",
    badge: null,
    price_from_nok: 1450000,
    hero_image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&q=80"
  },
  {
    id: "hymer-free-s",
    manufacturer_id: "hymer",
    name: "Free S",
    full_name: "HYMER Free S",
    slug: "hymer-free-s",
    vehicle_type: "campervan",
    category: "van",
    description: "Kompakt campervan basert på Mercedes Sprinter. Free S er perfekt for aktive reisende som vil ha frihet uten å ofre komfort.",
    source_url: "https://www.hymer.com/no/nb/campervans/hymer-free-s",
    badge: null,
    price_from_nok: 1180000,
    hero_image: "https://images.unsplash.com/photo-1533745848184-3db07256e163?w=800&q=80"
  },
  // --- ADRIA ---
  {
    id: "adria-supersonic",
    manufacturer_id: "adria",
    name: "Supersonic",
    full_name: "Adria Supersonic",
    slug: "adria-supersonic",
    vehicle_type: "bobil",
    category: "helintegrert",
    description: "Adrias toppmodell. Supersonic tilbyr premium komfort med integrert førerkabin og romslige planløsninger.",
    source_url: "https://no.adria-mobil.com/bobiler/supersonic",
    badge: "Toppmodell",
    price_from_nok: 2150000,
    hero_image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
  },
  {
    id: "adria-sonic",
    manufacturer_id: "adria",
    name: "Sonic",
    full_name: "Adria Sonic",
    slug: "adria-sonic",
    vehicle_type: "bobil",
    category: "delintegrert",
    description: "Romslig delintegrert bobil med smarte løsninger. Sonic byr på god plass og moderne design til en konkurransedyktig pris.",
    source_url: "https://no.adria-mobil.com/bobiler/sonic",
    badge: null,
    price_from_nok: 1650000,
    hero_image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
  },
  {
    id: "adria-matrix",
    manufacturer_id: "adria",
    name: "Matrix",
    full_name: "Adria Matrix",
    slug: "adria-matrix",
    vehicle_type: "bobil",
    category: "delintegrert",
    description: "Kompakt og smart delintegrert bobil. Matrix er designet for aktive familier som trenger fleksible løsninger.",
    source_url: "https://no.adria-mobil.com/bobiler/matrix",
    badge: null,
    price_from_nok: 1250000,
    hero_image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
  },
  {
    id: "adria-compact",
    manufacturer_id: "adria",
    name: "Compact",
    full_name: "Adria Compact",
    slug: "adria-compact",
    vehicle_type: "campervan",
    category: "delintegrert",
    description: "Adrias kompakte campervan. Compact gir deg alt du trenger for helgetur eller lengre reiser i et håndterbart format.",
    source_url: "https://no.adria-mobil.com/campervans/compact",
    badge: "Bestselger",
    price_from_nok: 980000,
    hero_image: "https://images.unsplash.com/photo-1586842379511-b81e1e0f1ae2?w=800&q=80"
  }
];

const modelVariants = [
  // HYMER Venture S variants
  { id: "vs-580", model_series_id: "hymer-venture-s", name: "580", full_name: "HYMER Venture S 580", price_nok: 3288000, length_mm: 6490, width_mm: 2350, height_mm: 2950, max_weight_kg: 4100, sleeping_places: 2, seating_places: 4, bed_type: "Tverrstilt dobbeltseng", chassis: "Mercedes-Benz Sprinter", engine: "2.2 CDI", horsepower: 170, transmission: "Automat" },
  { id: "vs-600", model_series_id: "hymer-venture-s", name: "600", full_name: "HYMER Venture S 600", price_nok: 3388000, length_mm: 6990, width_mm: 2350, height_mm: 2950, max_weight_kg: 4250, sleeping_places: 3, seating_places: 4, bed_type: "Enkeltsenger bak + senkeseng", chassis: "Mercedes-Benz Sprinter", engine: "2.2 CDI", horsepower: 170, transmission: "Automat" },
  { id: "vs-645", model_series_id: "hymer-venture-s", name: "645", full_name: "HYMER Venture S 645", price_nok: 3490000, length_mm: 7400, width_mm: 2350, height_mm: 2950, max_weight_kg: 4400, sleeping_places: 4, seating_places: 4, bed_type: "Queenseng + senkeseng", chassis: "Mercedes-Benz Sprinter", engine: "2.2 CDI", horsepower: 170, transmission: "Automat" },

  // HYMER B-Klasse MasterLine variants
  { id: "bml-780", model_series_id: "hymer-b-klasse-masterline", name: "780", full_name: "HYMER B-Klasse ML I 780", price_nok: 2306000, length_mm: 7890, width_mm: 2350, height_mm: 3050, max_weight_kg: 4430, sleeping_places: 4, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 180, transmission: "Automat" },
  { id: "bml-890", model_series_id: "hymer-b-klasse-masterline", name: "890", full_name: "HYMER B-Klasse ML I 890", price_nok: 2490000, length_mm: 8990, width_mm: 2350, height_mm: 3050, max_weight_kg: 5200, sleeping_places: 4, seating_places: 4, bed_type: "Queenseng + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 180, transmission: "Automat" },

  // HYMER Exsis-i variants
  { id: "ex-580", model_series_id: "hymer-exsis-i", name: "580", full_name: "HYMER Exsis-i 580", price_nok: 1890000, length_mm: 5990, width_mm: 2300, height_mm: 2880, max_weight_kg: 3500, sleeping_places: 2, seating_places: 4, bed_type: "Tverrstilt dobbeltseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 140, transmission: "Manuell" },
  { id: "ex-670", model_series_id: "hymer-exsis-i", name: "670", full_name: "HYMER Exsis-i 670", price_nok: 2050000, length_mm: 6990, width_mm: 2300, height_mm: 2880, max_weight_kg: 3500, sleeping_places: 3, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 140, transmission: "Manuell" },

  // HYMER Tramp S variants
  { id: "ts-585", model_series_id: "hymer-tramp-s", name: "585", full_name: "HYMER Tramp S 585", price_nok: 1450000, length_mm: 5990, width_mm: 2350, height_mm: 2950, max_weight_kg: 3500, sleeping_places: 2, seating_places: 4, bed_type: "Tverrstilt dobbeltseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 140, transmission: "Manuell" },
  { id: "ts-695", model_series_id: "hymer-tramp-s", name: "695", full_name: "HYMER Tramp S 695", price_nok: 1580000, length_mm: 6990, width_mm: 2350, height_mm: 2950, max_weight_kg: 3800, sleeping_places: 4, seating_places: 4, bed_type: "Queenseng + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 140, transmission: "Manuell" },

  // HYMER Free S variants
  { id: "fs-600", model_series_id: "hymer-free-s", name: "600", full_name: "HYMER Free S 600", price_nok: 1180000, length_mm: 5930, width_mm: 2050, height_mm: 2650, max_weight_kg: 3500, sleeping_places: 2, seating_places: 4, bed_type: "Senkeseng", chassis: "Mercedes-Benz Sprinter", engine: "2.2 CDI", horsepower: 140, transmission: "Manuell" },

  // HYMER B-ML BlackLine variants
  { id: "bbl-780", model_series_id: "hymer-b-ml-blackline", name: "780", full_name: "HYMER B-ML I BlackLine 780", price_nok: 2546000, length_mm: 7890, width_mm: 2350, height_mm: 3050, max_weight_kg: 4430, sleeping_places: 4, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet", horsepower: 180, transmission: "Automat" },

  // ADRIA Supersonic variants
  { id: "ss-780", model_series_id: "adria-supersonic", name: "780 SL", full_name: "Adria Supersonic 780 SL", price_nok: 2150000, length_mm: 7820, width_mm: 2330, height_mm: 3020, max_weight_kg: 4400, sleeping_places: 4, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 180, transmission: "Automat" },
  { id: "ss-880", model_series_id: "adria-supersonic", name: "880 SL", full_name: "Adria Supersonic 880 SL", price_nok: 2350000, length_mm: 8820, width_mm: 2330, height_mm: 3020, max_weight_kg: 5000, sleeping_places: 4, seating_places: 4, bed_type: "Queenseng + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 180, transmission: "Automat" },

  // ADRIA Sonic variants
  { id: "so-700", model_series_id: "adria-sonic", name: "700 DC", full_name: "Adria Sonic 700 DC", price_nok: 1650000, length_mm: 7390, width_mm: 2330, height_mm: 2980, max_weight_kg: 4250, sleeping_places: 4, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 160, transmission: "Manuell" },
  { id: "so-600", model_series_id: "adria-sonic", name: "600 SC", full_name: "Adria Sonic 600 SC", price_nok: 1550000, length_mm: 6590, width_mm: 2330, height_mm: 2980, max_weight_kg: 3800, sleeping_places: 2, seating_places: 4, bed_type: "Tverrstilt dobbeltseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 160, transmission: "Manuell" },

  // ADRIA Matrix variants
  { id: "mx-600", model_series_id: "adria-matrix", name: "600 DT", full_name: "Adria Matrix 600 DT", price_nok: 1250000, length_mm: 6590, width_mm: 2330, height_mm: 2940, max_weight_kg: 3500, sleeping_places: 4, seating_places: 5, bed_type: "Tverrstilt dobbeltseng + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 140, transmission: "Manuell" },
  { id: "mx-670", model_series_id: "adria-matrix", name: "670 DC", full_name: "Adria Matrix 670 DC", price_nok: 1350000, length_mm: 7260, width_mm: 2330, height_mm: 2940, max_weight_kg: 3800, sleeping_places: 4, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 140, transmission: "Manuell" },

  // ADRIA Compact variants
  { id: "cp-plus", model_series_id: "adria-compact", name: "Plus SL", full_name: "Adria Compact Plus SL", price_nok: 980000, length_mm: 5990, width_mm: 2050, height_mm: 2600, max_weight_kg: 3500, sleeping_places: 2, seating_places: 4, bed_type: "Senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 140, transmission: "Manuell" },
  { id: "cp-supreme", model_series_id: "adria-compact", name: "Supreme DL", full_name: "Adria Compact Supreme DL", price_nok: 1080000, length_mm: 6360, width_mm: 2050, height_mm: 2600, max_weight_kg: 3500, sleeping_places: 3, seating_places: 4, bed_type: "Enkeltsenger + senkeseng", chassis: "Fiat Ducato", engine: "2.2 Multijet III", horsepower: 140, transmission: "Manuell" },
];

// Export for use in the app
window.APP_DATA = { manufacturers, modelSeries, modelVariants };
