import chalk from "chalk";
import figlet, { fonts } from "figlet";
import { Command } from "commander";

import { COVID19API } from "../lib/covid-19-api";
import formatNumber from "../utils/format-number";

const getSummary = async (cmd: Command) => {
  // unpack options
  const { country: countryList, global, all, head } = cmd;

  // fetch data from API
  let {
    Global: globalData,
    Countries: countriesData,
    Date: date,
  } = await new COVID19API().getSummary();

  // show figlet
  if (!process.argv[2]) {
    console.log(figlet.textSync("COVID-19", "Slant"));
  }

  // print global summary
  if (global) {
    console.log("");
    console.log(`Global Summary (updated at ${new Date(date).toLocaleString()}):`);
    console.log(
      `Total Confirmed Cases: ${chalk.redBright(formatNumber(globalData.TotalConfirmed))}` +
        ` | New Confirmed Cases: ${chalk.redBright(formatNumber(globalData.NewConfirmed))}` +
        ` | Total Recovered: ${chalk.cyanBright(formatNumber(globalData.TotalRecovered))}`
    );
  }

  // filter countries by user provided --country option
  if (!all && countryList) {
    countriesData = countriesData.filter((country) => {
      return (
        countryList.includes(country.Country.toLowerCase()) ||
        countryList.includes(country.Slug.toLowerCase()) ||
        countryList.includes(country.CountryCode.toLowerCase())
      );
    });
  }

  // sort and truncate countries
  if (!countryList) {
    countriesData.sort((countryA, countryB) => +countryB.TotalConfirmed - +countryA.TotalConfirmed); // descending orderBy totalConfirmed
    countriesData = countriesData.slice(0, head);
  }

  // print country summary
  console.log("");
  console.log(`Country Overview:`);
  countriesData.forEach((countryData) => {
    console.log(
      `Country: ${chalk.whiteBright(countryData.Country)} (${countryData.CountryCode})` +
        ` | Total Confirmed Cases: ${chalk.redBright(formatNumber(countryData.TotalConfirmed))}` +
        ` | New Confirmed Cases: ${chalk.redBright(formatNumber(countryData.NewConfirmed))}` +
        ` | Total Recovered: ${chalk.cyanBright(formatNumber(countryData.TotalRecovered))}`
    );
  });
  console.log("");
};

const getCountry = (countryName: string, cmd: Command) => {
  console.log(cmd);
};

export { getSummary, getCountry };
