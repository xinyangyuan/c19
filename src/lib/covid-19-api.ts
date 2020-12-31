import axios from "axios";

export enum Status {
  Confirmed = "confirmed",
  Recovered = "recovered",
  Death = "deaths",
}

export interface GlobalSummary {
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
}

export interface CountrySummary {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
  Date: string;
}

/**
 * API Class
 */

export class COVID19API {
  // Class Constructor:
  constructor(private baseUrl = "https://api.covid19api.com/") {}

  // Method: get COVID-19 daily-updated summary
  async fetch() {
    const { data } = await axios.get<{
      Global: GlobalSummary;
      Countries: CountrySummary[];
      Date: string;
    }>(this.baseUrl + "summary");
    return data;
  }
}
