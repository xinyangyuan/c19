import axios from "axios";

/**
 * Type Definitions (Aliases)
 */

type ISO = string;
type Summary = string[];
type SummaryMap = { [ISO: string]: Summary };
enum Region {
  global = "OWID_WRL",
}
enum Column {
  iso_code,
  continent,
  location,
  total_cases,
  new_cases,
  new_cases_smoothed,
  total_deaths,
  new_deaths,
  new_deaths_smoothed,
  total_cases_per_million,
  new_cases_per_million,
  new_cases_smoothed_per_million,
  total_deaths_per_million,
  new_deaths_per_million,
  new_deaths_smoothed_per_million,
  reproduction_rate,
  icu_patients,
  icu_patients_per_million,
  hosp_patients,
  hosp_patients_per_million,
  weekly_icu_admissions,
  weekly_icu_admissions_per_million,
  weekly_hosp_admissions,
  weekly_hosp_admissions_per_million,
  new_tests,
  total_tests,
  total_tests_per_thousand,
  new_tests_per_thousand,
  new_tests_smoothed,
  new_tests_smoothed_per_thousand,
  positive_rate,
  tests_per_case,
  tests_units,
  total_vaccinations,
  total_vaccinations_per_hundred,
  stringency_index,
  population,
  population_density,
  median_age,
  aged_65_older,
  aged_70_older,
  gdp_per_capita,
  extreme_poverty,
  cardiovasc_death_rate,
  diabetes_prevalence,
  female_smokers,
  male_smokers,
  handwashing_facilities,
  hospital_beds_per_thousand,
  life_expectancy,
  human_development_index,
}

/**
 * API Class
 */

class API {
  /**
   * Class Attributes
   */

  static readonly baseURL =
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/";

  /**
   * Instance Attributes
   */

  private _URL: string;
  private _isFetched: boolean = false;
  private _fileFormat: "csv" | "json" | "xlsx" = "csv";
  private _rawData: string | undefined;
  private _data: SummaryMap | undefined;
  private _updatedDate: Date | undefined;

  /**
   * Constructor
   */

  constructor() {
    this._URL = API.baseURL + "latest/owid-covid-latest." + this._fileFormat;
  }

  /**
   * Getters
   */

  get URL() {
    return this._URL;
  }

  get isFetched() {
    return this._isFetched;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  get rawData() {
    if (!this._isFetched) {
      return null;
    } else {
      return this._rawData as string;
    }
  }

  get data() {
    if (!this._isFetched) {
      return null;
    } else {
      return this._data as SummaryMap;
    }
  }

  get updatedDate() {
    if (!this._isFetched) {
      return null;
    } else {
      return this._updatedDate as Date;
    }
  }

  /**
   * Methods
   */

  latest() {
    this._URL = API.baseURL + "latest/owid-covid-latest." + this._fileFormat;
    this._isFetched = false;
  }

  csv() {
    this._fileFormat = "csv";
  }

  json() {
    this._fileFormat = "json";
  }

  xlsx() {
    this._fileFormat = "xlsx";
  }

  async fetch() {
    // Fetch data
    const [{ data }, { data: updatedTimestamp }] = await Promise.all([
      axios.get<string>(this.URL),
      axios.get<string>(API.baseURL + "owid-covid-data-last-updated-timestamp.txt"),
    ]);

    // Store data
    this._isFetched = true;
    this._updatedDate = new Date(updatedTimestamp);
    this._rawData = data;
    this._data = data
      .split("\n") // split lines of csv file
      .slice(1) // remove first (heading) line
      .filter((row: string) => row.length) // remove empty row
      .map((row: string) => row.split(",")) // split each colmn of each data row
      .reduce((acc: SummaryMap, row: Summary) => {
        return { ...acc, [row[Column.iso_code]]: row };
      }, {});

    // Return data
    return this._data;
  }

  /**
   * Static Methods
   */

  static async fetchData() {
    return await new API().fetch();
  }
}

/**
 * API Data Column
 */

export default API;
export { Summary, SummaryMap, ISO, Region, Column };
