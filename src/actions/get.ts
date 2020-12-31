import chalk from "chalk";
import figlet from "figlet";
import { Command } from "commander";
import inquirer from "inquirer";
import fuzzy from "fuzzy";

import countryList, { Country } from "../lib/countries";
import formatNumber from "../utils/format-number";
import { COVID19API, GlobalSummary, CountrySummary } from "../lib/covid-19-api";

/**
 * Utility writer function, print a new empty line
 */

const writeLine = () => {
  console.log("");
};

/**
 * Utility writer function, print a figlet gretting
 */

const writeGreeting = () => {
  console.log(figlet.textSync("COVID-19", "Slant"));
};

/**
 * Utility writer function, print global summary
 */

const writeGlobalSummary = (date: string, summary: GlobalSummary) => {
  console.log(`Global Summary (updated at ${new Date(date).toLocaleString()}):`);
  console.log(
    `Total Confirmed Cases: ${chalk.redBright(formatNumber(summary.TotalConfirmed))}` +
      ` | New Confirmed Cases: ${chalk.redBright(formatNumber(summary.NewConfirmed))}` +
      ` | Total Recovered: ${chalk.cyanBright(formatNumber(summary.TotalRecovered))}`
  );
};

/**
 * Utility writer function, print multiple country summaries
 */

const writeCountrySummaries = (date: string, summaries: CountrySummary[]) => {
  console.log(`Global Overview: (updated at ${new Date(date).toLocaleString()}):`);
  summaries.forEach((summary) => writeCountrySummary(summary));
};

/**
 * Utility writer function, print summary for a specific country
 */

const writeCountrySummary = (summary: CountrySummary) => {
  console.log(
    `Country: ${chalk.whiteBright(summary.Country)} (${summary.CountryCode})` +
      ` | Total Confirmed Cases: ${chalk.redBright(formatNumber(summary.TotalConfirmed))}` +
      ` | New Confirmed Cases: ${chalk.redBright(formatNumber(summary.NewConfirmed))}` +
      ` | Total Recovered: ${chalk.cyanBright(formatNumber(summary.TotalRecovered))}`
  );
};

/**
 * Fuzzy search function over a list of countries based on user input
 */

const searchCountry = (input: string, countries: Country[]) => {
  input = input || "";

  const options = {
    pre: "<",
    post: ">",
    extract: (country: Country) => country.name,
  };

  const fuzzyResult = fuzzy.filter(input, countries, options);

  return fuzzyResult.map((el: fuzzy.FilterResult<Country>) => el.original);
};

/**
 * Show summary report by interactively asking user.
 */

const getInteractive = (
  globalSummary: GlobalSummary,
  countrySummaries: CountrySummary[],
  date: string
) => {
  // Show greetings
  writeLine();
  writeGreeting();

  // Show global overview summary
  writeGlobalSummary(date, globalSummary);
  writeLine();

  // Show overview of countires (top 5) with the most total confirmed cases
  const countriesWithMostConfirmedCases: CountrySummary[] = countrySummaries
    .sort((countryA, countryB) => +countryB.TotalConfirmed - +countryA.TotalConfirmed)
    .slice(0, 5);

  writeCountrySummaries(date, countriesWithMostConfirmedCases);
  writeLine();

  // Interactive prompt
  inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "check",
        message: "Do you want to check report for a specific country/region?",
        default: false,
      },
      {
        type: "autocomplete",
        name: "country",
        message: "Which country/region do you want to check?",
        when: (response) => response.check,
        source: (answers: string, input: string) => {
          const reportedCountries = countrySummaries.map((summary) => summary.Country);
          const filteredCountryList = countryList.filter(({ name }) =>
            reportedCountries.includes(name)
          );
          return searchCountry(input, filteredCountryList);
        },
      },
    ])
    .then(({ check, country }) => {
      if (check) {
        const countrySummary = countrySummaries.filter((summary) => summary.Country === country)[0];
        writeCountrySummary(countrySummary);
      }
    });
};

/**
 * Show summary report based on user specified arguments & options.
 */

const getArgParse = (
  countries: string[],
  all: boolean,
  global: boolean,
  globalSummary: GlobalSummary,
  countrySummaries: CountrySummary[],
  date: string
) => {
  // Show greetings
  writeLine();
  writeGreeting();

  // show global summary
  if (global) {
    writeGlobalSummary(date, globalSummary);
    writeLine();
  }

  // show country summary
  // filter countries by user input arguments
  if (!all && countries.length !== 0) {
    countrySummaries = countrySummaries.filter((summary) => {
      return (
        countries.includes(summary.Country.toLowerCase()) ||
        countries.includes(summary.Slug.toLowerCase()) ||
        countries.includes(summary.CountryCode.toLowerCase())
      );
    });
  }

  // sort and truncate countries
  if (countries.length === 0) {
    // descending orderBy totalConfirmed
    countrySummaries.sort(
      (countryA, countryB) => +countryB.TotalConfirmed - +countryA.TotalConfirmed
    );
    countrySummaries = countrySummaries.slice(0, 5);
  }

  // print country summary
  console.log(`Country Overview (for ${countries}):`);
  countrySummaries.forEach((summary) => writeCountrySummary(summary));
  writeLine();
};

/**
 * Get command handler
 */

const get = async (args: string[], cmd: Command) => {
  // Unpack options
  const { global, all } = cmd;
  const countries = args
    .map((arg) => arg.toLowerCase().split(","))
    .reduce((acc, nxt) => [...acc, ...nxt], []);

  // Fetch data from API
  const api = new COVID19API();
  const { Global: globalSummary, Countries: countrySummaries, Date: date } = await api.fetch();

  // Interactive or ArgParse Mode
  if (!process.argv[2]) {
    getInteractive(globalSummary, countrySummaries, date);
  } else {
    getArgParse(countries, all, global, globalSummary, countrySummaries, date);
  }
};

export { get };
