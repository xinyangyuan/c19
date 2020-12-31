interface Country {
  name: string;
  slug: string;
  iso2: string;
}

const countries: Country[] = [
  {
    name: "Barbados",
    slug: "barbados",
    iso2: "BB",
  },
  {
    name: "Gibraltar",
    slug: "gibraltar",
    iso2: "GI",
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    iso2: "LT",
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    iso2: "MY",
  },
  {
    name: "Nauru",
    slug: "nauru",
    iso2: "NR",
  },
  {
    name: "Palestinian Territory",
    slug: "palestine",
    iso2: "PS",
  },
  {
    name: "Qatar",
    slug: "qatar",
    iso2: "QA",
  },
  {
    name: "Solomon Islands",
    slug: "solomon-islands",
    iso2: "SB",
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    iso2: "LK",
  },
  {
    name: "Turks and Caicos Islands",
    slug: "turks-and-caicos-islands",
    iso2: "TC",
  },
  {
    name: "Vanuatu",
    slug: "vanuatu",
    iso2: "VU",
  },
  {
    name: "Wallis and Futuna Islands",
    slug: "wallis-and-futuna-islands",
    iso2: "WF",
  },
  {
    name: "Dominica",
    slug: "dominica",
    iso2: "DM",
  },
  {
    name: "Gambia",
    slug: "gambia",
    iso2: "GM",
  },
  {
    name: "Iran, Islamic Republic of",
    slug: "iran",
    iso2: "IR",
  },
  {
    name: "Namibia",
    slug: "namibia",
    iso2: "NA",
  },
  {
    name: "Tokelau",
    slug: "tokelau",
    iso2: "TK",
  },
  {
    name: "Guinea",
    slug: "guinea",
    iso2: "GN",
  },
  {
    name: "Morocco",
    slug: "morocco",
    iso2: "MA",
  },
  {
    name: "Tunisia",
    slug: "tunisia",
    iso2: "TN",
  },
  {
    name: "Azerbaijan",
    slug: "azerbaijan",
    iso2: "AZ",
  },
  {
    name: "Honduras",
    slug: "honduras",
    iso2: "HN",
  },
  {
    name: "Saint-Martin (French part)",
    slug: "saint-martin-french-part",
    iso2: "MF",
  },
  {
    name: "Chad",
    slug: "chad",
    iso2: "TD",
  },
  {
    name: "Christmas Island",
    slug: "christmas-island",
    iso2: "CX",
  },
  {
    name: "Costa Rica",
    slug: "costa-rica",
    iso2: "CR",
  },
  {
    name: "Bulgaria",
    slug: "bulgaria",
    iso2: "BG",
  },
  {
    name: "Denmark",
    slug: "denmark",
    iso2: "DK",
  },
  {
    name: "Malawi",
    slug: "malawi",
    iso2: "MW",
  },
  {
    name: "Nepal",
    slug: "nepal",
    iso2: "NP",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    iso2: "CH",
  },
  {
    name: "Canada",
    slug: "canada",
    iso2: "CA",
  },
  {
    name: "China",
    slug: "china",
    iso2: "CN",
  },
  {
    name: "Grenada",
    slug: "grenada",
    iso2: "GD",
  },
  {
    name: "Andorra",
    slug: "andorra",
    iso2: "AD",
  },
  {
    name: "Belgium",
    slug: "belgium",
    iso2: "BE",
  },
  {
    name: "Burkina Faso",
    slug: "burkina-faso",
    iso2: "BF",
  },
  {
    name: "Cayman Islands",
    slug: "cayman-islands",
    iso2: "KY",
  },
  {
    name: "Estonia",
    slug: "estonia",
    iso2: "EE",
  },
  {
    name: "Jersey",
    slug: "jersey",
    iso2: "JE",
  },
  {
    name: "Montserrat",
    slug: "montserrat",
    iso2: "MS",
  },
  {
    name: "Oman",
    slug: "oman",
    iso2: "OM",
  },
  {
    name: "Cameroon",
    slug: "cameroon",
    iso2: "CM",
  },
  {
    name: "Luxembourg",
    slug: "luxembourg",
    iso2: "LU",
  },
  {
    name: "Slovakia",
    slug: "slovakia",
    iso2: "SK",
  },
  {
    name: "Bosnia and Herzegovina",
    slug: "bosnia-and-herzegovina",
    iso2: "BA",
  },
  {
    name: "Moldova",
    slug: "moldova",
    iso2: "MD",
  },
  {
    name: "Brunei Darussalam",
    slug: "brunei",
    iso2: "BN",
  },
  {
    name: "Eritrea",
    slug: "eritrea",
    iso2: "ER",
  },
  {
    name: "Jordan",
    slug: "jordan",
    iso2: "JO",
  },
  {
    name: "Liberia",
    slug: "liberia",
    iso2: "LR",
  },
  {
    name: "Portugal",
    slug: "portugal",
    iso2: "PT",
  },
  {
    name: "Ukraine",
    slug: "ukraine",
    iso2: "UA",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    iso2: "ID",
  },
  {
    name: "Kenya",
    slug: "kenya",
    iso2: "KE",
  },
  {
    name: "Georgia",
    slug: "georgia",
    iso2: "GE",
  },
  {
    name: "Iceland",
    slug: "iceland",
    iso2: "IS",
  },
  {
    name: "Jamaica",
    slug: "jamaica",
    iso2: "JM",
  },
  {
    name: "Norfolk Island",
    slug: "norfolk-island",
    iso2: "NF",
  },
  {
    name: "French Southern Territories",
    slug: "french-southern-territories",
    iso2: "TF",
  },
  {
    name: "Guernsey",
    slug: "guernsey",
    iso2: "GG",
  },
  {
    name: "Paraguay",
    slug: "paraguay",
    iso2: "PY",
  },
  {
    name: "Tajikistan",
    slug: "tajikistan",
    iso2: "TJ",
  },
  {
    name: "US Minor Outlying Islands",
    slug: "us-minor-outlying-islands",
    iso2: "UM",
  },
  {
    name: "Uzbekistan",
    slug: "uzbekistan",
    iso2: "UZ",
  },
  {
    name: "American Samoa",
    slug: "american-samoa",
    iso2: "AS",
  },
  {
    name: "British Virgin Islands",
    slug: "british-virgin-islands",
    iso2: "VG",
  },
  {
    name: "Finland",
    slug: "finland",
    iso2: "FI",
  },
  {
    name: "Malta",
    slug: "malta",
    iso2: "MT",
  },
  {
    name: "Botswana",
    slug: "botswana",
    iso2: "BW",
  },
  {
    name: "Israel",
    slug: "israel",
    iso2: "IL",
  },
  {
    name: "Saint Lucia",
    slug: "saint-lucia",
    iso2: "LC",
  },
  {
    name: "Spain",
    slug: "spain",
    iso2: "ES",
  },
  {
    name: "Argentina",
    slug: "argentina",
    iso2: "AR",
  },
  {
    name: "Congo (Kinshasa)",
    slug: "congo-kinshasa",
    iso2: "CD",
  },
  {
    name: "Réunion",
    slug: "réunion",
    iso2: "RE",
  },
  {
    name: "Saint-Barthélemy",
    slug: "saint-barthélemy",
    iso2: "BL",
  },
  {
    name: "Zambia",
    slug: "zambia",
    iso2: "ZM",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    iso2: "BH",
  },
  {
    name: "Chile",
    slug: "chile",
    iso2: "CL",
  },
  {
    name: "Uruguay",
    slug: "uruguay",
    iso2: "UY",
  },
  {
    name: "Yemen",
    slug: "yemen",
    iso2: "YE",
  },
  {
    name: "Austria",
    slug: "austria",
    iso2: "AT",
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    iso2: "BD",
  },
  {
    name: "Italy",
    slug: "italy",
    iso2: "IT",
  },
  {
    name: "Micronesia, Federated States of",
    slug: "micronesia",
    iso2: "FM",
  },
  {
    name: "Puerto Rico",
    slug: "puerto-rico",
    iso2: "PR",
  },
  {
    name: "Tuvalu",
    slug: "tuvalu",
    iso2: "TV",
  },
  {
    name: "ALA Aland Islands",
    slug: "ala-aland-islands",
    iso2: "AX",
  },
  {
    name: "Afghanistan",
    slug: "afghanistan",
    iso2: "AF",
  },
  {
    name: "Cambodia",
    slug: "cambodia",
    iso2: "KH",
  },
  {
    name: "Sao Tome and Principe",
    slug: "sao-tome-and-principe",
    iso2: "ST",
  },
  {
    name: "Korea (North)",
    slug: "korea-north",
    iso2: "KP",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    iso2: "NZ",
  },
  {
    name: "Turkey",
    slug: "turkey",
    iso2: "TR",
  },
  {
    name: "Greenland",
    slug: "greenland",
    iso2: "GL",
  },
  {
    name: "Hungary",
    slug: "hungary",
    iso2: "HU",
  },
  {
    name: "Australia",
    slug: "australia",
    iso2: "AU",
  },
  {
    name: "India",
    slug: "india",
    iso2: "IN",
  },
  {
    name: "San Marino",
    slug: "san-marino",
    iso2: "SM",
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    iso2: "GB",
  },
  {
    name: "Comoros",
    slug: "comoros",
    iso2: "KM",
  },
  {
    name: "Mauritania",
    slug: "mauritania",
    iso2: "MR",
  },
  {
    name: "Benin",
    slug: "benin",
    iso2: "BJ",
  },
  {
    name: "Côte d'Ivoire",
    slug: "cote-divoire",
    iso2: "CI",
  },
  {
    name: "Guadeloupe",
    slug: "guadeloupe",
    iso2: "GP",
  },
  {
    name: "Heard and Mcdonald Islands",
    slug: "heard-and-mcdonald-islands",
    iso2: "HM",
  },
  {
    name: "Kiribati",
    slug: "kiribati",
    iso2: "KI",
  },
  {
    name: "Mali",
    slug: "mali",
    iso2: "ML",
  },
  {
    name: "Northern Mariana Islands",
    slug: "northern-mariana-islands",
    iso2: "MP",
  },
  {
    name: "Palau",
    slug: "palau",
    iso2: "PW",
  },
  {
    name: "Myanmar",
    slug: "myanmar",
    iso2: "MM",
  },
  {
    name: "Somalia",
    slug: "somalia",
    iso2: "SO",
  },
  {
    name: "Trinidad and Tobago",
    slug: "trinidad-and-tobago",
    iso2: "TT",
  },
  {
    name: "Turkmenistan",
    slug: "turkmenistan",
    iso2: "TM",
  },
  {
    name: "French Guiana",
    slug: "french-guiana",
    iso2: "GF",
  },
  {
    name: "Lao PDR",
    slug: "lao-pdr",
    iso2: "LA",
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    iso2: "AE",
  },
  {
    name: "Albania",
    slug: "albania",
    iso2: "AL",
  },
  {
    name: "Ireland",
    slug: "ireland",
    iso2: "IE",
  },
  {
    name: "Burundi",
    slug: "burundi",
    iso2: "BI",
  },
  {
    name: "Cape Verde",
    slug: "cape-verde",
    iso2: "CV",
  },
  {
    name: "Greece",
    slug: "greece",
    iso2: "GR",
  },
  {
    name: "Guam",
    slug: "guam",
    iso2: "GU",
  },
  {
    name: "Guatemala",
    slug: "guatemala",
    iso2: "GT",
  },
  {
    name: "Korea (South)",
    slug: "korea-south",
    iso2: "KR",
  },
  {
    name: "Niger",
    slug: "niger",
    iso2: "NE",
  },
  {
    name: "Panama",
    slug: "panama",
    iso2: "PA",
  },
  {
    name: "Saint Helena",
    slug: "saint-helena",
    iso2: "SH",
  },
  {
    name: "Viet Nam",
    slug: "vietnam",
    iso2: "VN",
  },
  {
    name: "Saint Kitts and Nevis",
    slug: "saint-kitts-and-nevis",
    iso2: "KN",
  },
  {
    name: "Seychelles",
    slug: "seychelles",
    iso2: "SC",
  },
  {
    name: "Timor-Leste",
    slug: "timor-leste",
    iso2: "TL",
  },
  {
    name: "Bouvet Island",
    slug: "bouvet-island",
    iso2: "BV",
  },
  {
    name: "El Salvador",
    slug: "el-salvador",
    iso2: "SV",
  },
  {
    name: "Russian Federation",
    slug: "russia",
    iso2: "RU",
  },
  {
    name: "Slovenia",
    slug: "slovenia",
    iso2: "SI",
  },
  {
    name: "French Polynesia",
    slug: "french-polynesia",
    iso2: "PF",
  },
  {
    name: "Hong Kong, SAR China",
    slug: "hong-kong-sar-china",
    iso2: "HK",
  },
  {
    name: "Madagascar",
    slug: "madagascar",
    iso2: "MG",
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    iso2: "NG",
  },
  {
    name: "Samoa",
    slug: "samoa",
    iso2: "WS",
  },
  {
    name: "British Indian Ocean Territory",
    slug: "british-indian-ocean-territory",
    iso2: "IO",
  },
  {
    name: "Equatorial Guinea",
    slug: "equatorial-guinea",
    iso2: "GQ",
  },
  {
    name: "Holy See (Vatican City State)",
    slug: "holy-see-vatican-city-state",
    iso2: "VA",
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    iso2: "RW",
  },
  {
    name: "Saint Vincent and Grenadines",
    slug: "saint-vincent-and-the-grenadines",
    iso2: "VC",
  },
  {
    name: "Virgin Islands, US",
    slug: "virgin-islands",
    iso2: "VI",
  },
  {
    name: "Congo (Brazzaville)",
    slug: "congo-brazzaville",
    iso2: "CG",
  },
  {
    name: "Guyana",
    slug: "guyana",
    iso2: "GY",
  },
  {
    name: "Haiti",
    slug: "haiti",
    iso2: "HT",
  },
  {
    name: "Marshall Islands",
    slug: "marshall-islands",
    iso2: "MH",
  },
  {
    name: "Singapore",
    slug: "singapore",
    iso2: "SG",
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    iso2: "BT",
  },
  {
    name: "Ghana",
    slug: "ghana",
    iso2: "GH",
  },
  {
    name: "Mozambique",
    slug: "mozambique",
    iso2: "MZ",
  },
  {
    name: "Antigua and Barbuda",
    slug: "antigua-and-barbuda",
    iso2: "AG",
  },
  {
    name: "Cocos (Keeling) Islands",
    slug: "cocos-keeling-islands",
    iso2: "CC",
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    iso2: "CY",
  },
  {
    name: "Latvia",
    slug: "latvia",
    iso2: "LV",
  },
  {
    name: "Lebanon",
    slug: "lebanon",
    iso2: "LB",
  },
  {
    name: "Cook Islands",
    slug: "cook-islands",
    iso2: "CK",
  },
  {
    name: "Isle of Man",
    slug: "isle-of-man",
    iso2: "IM",
  },
  {
    name: "Libya",
    slug: "libya",
    iso2: "LY",
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    iso2: "NL",
  },
  {
    name: "New Caledonia",
    slug: "new-caledonia",
    iso2: "NC",
  },
  {
    name: "Niue",
    slug: "niue",
    iso2: "NU",
  },
  {
    name: "Thailand",
    slug: "thailand",
    iso2: "TH",
  },
  {
    name: "Egypt",
    slug: "egypt",
    iso2: "EG",
  },
  {
    name: "Faroe Islands",
    slug: "faroe-islands",
    iso2: "FO",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    slug: "south-georgia-and-the-south-sandwich-islands",
    iso2: "GS",
  },
  {
    name: "Algeria",
    slug: "algeria",
    iso2: "DZ",
  },
  {
    name: "Brazil",
    slug: "brazil",
    iso2: "BR",
  },
  {
    name: "Central African Republic",
    slug: "central-african-republic",
    iso2: "CF",
  },
  {
    name: "Czech Republic",
    slug: "czech-republic",
    iso2: "CZ",
  },
  {
    name: "Ecuador",
    slug: "ecuador",
    iso2: "EC",
  },
  {
    name: "Gabon",
    slug: "gabon",
    iso2: "GA",
  },
  {
    name: "Zimbabwe",
    slug: "zimbabwe",
    iso2: "ZW",
  },
  {
    name: "Peru",
    slug: "peru",
    iso2: "PE",
  },
  {
    name: "Saint Pierre and Miquelon",
    slug: "saint-pierre-and-miquelon",
    iso2: "PM",
  },
  {
    name: "Republic of Kosovo",
    slug: "kosovo",
    iso2: "XK",
  },
  {
    name: "Tonga",
    slug: "tonga",
    iso2: "TO",
  },
  {
    name: "South Sudan",
    slug: "south-sudan",
    iso2: "SS",
  },
  {
    name: "Colombia",
    slug: "colombia",
    iso2: "CO",
  },
  {
    name: "Germany",
    slug: "germany",
    iso2: "DE",
  },
  {
    name: "Lesotho",
    slug: "lesotho",
    iso2: "LS",
  },
  {
    name: "Falkland Islands (Malvinas)",
    slug: "falkland-islands-malvinas",
    iso2: "FK",
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    iso2: "SA",
  },
  {
    name: "Aruba",
    slug: "aruba",
    iso2: "AW",
  },
  {
    name: "Swaziland",
    slug: "swaziland",
    iso2: "SZ",
  },
  {
    name: "United States of America",
    slug: "united-states",
    iso2: "US",
  },
  {
    name: "Antarctica",
    slug: "antarctica",
    iso2: "AQ",
  },
  {
    name: "Cuba",
    slug: "cuba",
    iso2: "CU",
  },
  {
    name: "Monaco",
    slug: "monaco",
    iso2: "MC",
  },
  {
    name: "Serbia",
    slug: "serbia",
    iso2: "RS",
  },
  {
    name: "Anguilla",
    slug: "anguilla",
    iso2: "AI",
  },
  {
    name: "Maldives",
    slug: "maldives",
    iso2: "MV",
  },
  {
    name: "Romania",
    slug: "romania",
    iso2: "RO",
  },
  {
    name: "Uganda",
    slug: "uganda",
    iso2: "UG",
  },
  {
    name: "Japan",
    slug: "japan",
    iso2: "JP",
  },
  {
    name: "Belarus",
    slug: "belarus",
    iso2: "BY",
  },
  {
    name: "France",
    slug: "france",
    iso2: "FR",
  },
  {
    name: "Western Sahara",
    slug: "western-sahara",
    iso2: "EH",
  },
  {
    name: "Iraq",
    slug: "iraq",
    iso2: "IQ",
  },
  {
    name: "Norway",
    slug: "norway",
    iso2: "NO",
  },
  {
    name: "Philippines",
    slug: "philippines",
    iso2: "PH",
  },
  {
    name: "Bahamas",
    slug: "bahamas",
    iso2: "BS",
  },
  {
    name: "Dominican Republic",
    slug: "dominican-republic",
    iso2: "DO",
  },
  {
    name: "Macao, SAR China",
    slug: "macao-sar-china",
    iso2: "MO",
  },
  {
    name: "Bermuda",
    slug: "bermuda",
    iso2: "BM",
  },
  {
    name: "Pakistan",
    slug: "pakistan",
    iso2: "PK",
  },
  {
    name: "Pitcairn",
    slug: "pitcairn",
    iso2: "PN",
  },
  {
    name: "Tanzania, United Republic of",
    slug: "tanzania",
    iso2: "TZ",
  },
  {
    name: "Bolivia",
    slug: "bolivia",
    iso2: "BO",
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    iso2: "KZ",
  },
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    iso2: "KG",
  },
  {
    name: "Taiwan, Republic of China",
    slug: "taiwan",
    iso2: "TW",
  },
  {
    name: "Armenia",
    slug: "armenia",
    iso2: "AM",
  },
  {
    name: "Svalbard and Jan Mayen Islands",
    slug: "svalbard-and-jan-mayen-islands",
    iso2: "SJ",
  },
  {
    name: "Sweden",
    slug: "sweden",
    iso2: "SE",
  },
  {
    name: "Togo",
    slug: "togo",
    iso2: "TG",
  },
  {
    name: "Fiji",
    slug: "fiji",
    iso2: "FJ",
  },
  {
    name: "Martinique",
    slug: "martinique",
    iso2: "MQ",
  },
  {
    name: "Montenegro",
    slug: "montenegro",
    iso2: "ME",
  },
  {
    name: "Suriname",
    slug: "suriname",
    iso2: "SR",
  },
  {
    name: "Venezuela (Bolivarian Republic)",
    slug: "venezuela",
    iso2: "VE",
  },
  {
    name: "Angola",
    slug: "angola",
    iso2: "AO",
  },
  {
    name: "Macedonia, Republic of",
    slug: "macedonia",
    iso2: "MK",
  },
  {
    name: "Mauritius",
    slug: "mauritius",
    iso2: "MU",
  },
  {
    name: "Mayotte",
    slug: "mayotte",
    iso2: "YT",
  },
  {
    name: "Senegal",
    slug: "senegal",
    iso2: "SN",
  },
  {
    name: "South Africa",
    slug: "south-africa",
    iso2: "ZA",
  },
  {
    name: "Syrian Arab Republic (Syria)",
    slug: "syria",
    iso2: "SY",
  },
  {
    name: "Liechtenstein",
    slug: "liechtenstein",
    iso2: "LI",
  },
  {
    name: "Netherlands Antilles",
    slug: "netherlands-antilles",
    iso2: "AN",
  },
  {
    name: "Croatia",
    slug: "croatia",
    iso2: "HR",
  },
  {
    name: "Djibouti",
    slug: "djibouti",
    iso2: "DJ",
  },
  {
    name: "Mexico",
    slug: "mexico",
    iso2: "MX",
  },
  {
    name: "Belize",
    slug: "belize",
    iso2: "BZ",
  },
  {
    name: "Guinea-Bissau",
    slug: "guinea-bissau",
    iso2: "GW",
  },
  {
    name: "Mongolia",
    slug: "mongolia",
    iso2: "MN",
  },
  {
    name: "Poland",
    slug: "poland",
    iso2: "PL",
  },
  {
    name: "Ethiopia",
    slug: "ethiopia",
    iso2: "ET",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    iso2: "KW",
  },
  {
    name: "Nicaragua",
    slug: "nicaragua",
    iso2: "NI",
  },
  {
    name: "Papua New Guinea",
    slug: "papua-new-guinea",
    iso2: "PG",
  },
  {
    name: "Sierra Leone",
    slug: "sierra-leone",
    iso2: "SL",
  },
  {
    name: "Sudan",
    slug: "sudan",
    iso2: "SD",
  },
];

export default countries;
export { Country };
