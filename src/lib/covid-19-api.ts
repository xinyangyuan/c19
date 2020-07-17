import axios from "axios";

enum Status {
  Confirmed = "confirmed",
  Recovered = "recovered",
  Death = "deaths",
}

interface GlobalSummary {
  NewConfirmed: string;
  TotalConfirmed: string;
  NewDeaths: string;
  TotalDeaths: string;
  NewRecovered: string;
  TotalRecovered: string;
}

interface CountrySummary {
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

export class COVID19API {
  // Class Constructor:
  constructor(private baseUrl = "https://api.covid19api.com/") {}

  // Method: get COVID-19 daily-updated summary
  async getSummary() {
    const { data } = await axios.get<{
      Global: GlobalSummary;
      Countries: CountrySummary[];
      Date: string;
    }>(this.baseUrl + "summary");
    return data;
  }

  // Method: get COVID-19 data by country
  async getCountry() {
    // const {data} = await axios.get
  }
}
