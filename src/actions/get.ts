import chalk from "chalk";
import { Command } from "commander";
import inquirer from "inquirer";

import API, { Region, Column, SummaryMap } from "../lib/api";
import fuzzyMatchRegion from "../utils/match-region";
import {
  writeLine,
  writeGreeting,
  writeCountrySummary,
  writeCountrySummaries,
  writeGlobalSummary,
} from "../utils/writer";

/**
 * Show summary report by interactively asking user.
 */

const getInteractive = async (summaries: SummaryMap, date: Date) => {
  // Show greetings
  writeLine();
  writeGreeting();

  // Show global overview summary
  writeGlobalSummary(summaries[Region.global], date);
  writeLine();

  // Show overview of countires/regions (top 5) with the most new confirmed cases
  const countriesWithMostConfirmedCases = Object.values(summaries)
    .sort((regionA, regionB) => +regionB[Column.new_cases] - +regionA[Column.new_cases])
    .slice(1, 6);
  writeCountrySummaries(countriesWithMostConfirmedCases, date);
  writeLine();

  // Interactive prompt
  inquirer.registerPrompt("autocomplete", require("inquirer-autocomplete-prompt"));
  const { check, region }: { check: boolean; region: string } = await inquirer.prompt([
    {
      type: "confirm",
      name: "check",
      message: "Do you want to check report for a specific country/region?",
      default: false,
    },
    {
      type: "autocomplete",
      name: "region",
      message: "Which country/region do you want to check?",
      when: (response) => response.check,
      source: (answers: string, input: string) =>
        fuzzyMatchRegion(input).map((el) => `${el.original.name} (${el.original.iso3})`),
    },
  ]);

  // Show country/region summary
  if (check) {
    console.log(region);
    const iso = /\((.*?)\)/.exec(region) as RegExpExecArray;
    const summary = summaries[iso[1]];

    if (summary) {
      writeCountrySummary(summary);
    } else {
      console.log("No data available.");
    }
  }
};

/**
 * Show summary report based on user specified arguments & options.
 */

const getArgParse = (
  regions: string[],
  summaries: SummaryMap,
  all: boolean,
  global: boolean,
  date: Date
) => {
  // Show greetings
  writeLine();
  writeGreeting();

  // Show global summary
  if (global) {
    writeGlobalSummary(summaries[Region.global], date);
    writeLine();
  }

  // Show all region summaries
  if (all) {
    writeCountrySummaries(Object.values(summaries), date);
  }

  //   Show countries/regions summaries
  if (regions.length !== 0) {
    // filter countries/regions by user input arguments
    const matchedRegions: { region: string; iso3: string }[] = [];
    const unknownRegions: { region: string }[] = [];

    for (let region of regions) {
      const fuzzyResults = [
        fuzzyMatchRegion(region),
        fuzzyMatchRegion(region, "iso2"),
        fuzzyMatchRegion(region, "iso3"),
      ]
        .flat()
        .filter((result) => result !== undefined)
        .sort((resultA, resultB) =>
          // (1) sort by score
          // (2) if scores are euqal, prefer shorter region name
          resultB.score - resultA.score === 0
            ? resultA.original.name.length - resultB.original.name.length
            : resultB.score - resultA.score
        );

      if (fuzzyResults.length && fuzzyResults[0].score > 1000) {
        matchedRegions.push({ region, iso3: fuzzyResults[0].original.iso3 });
      } else {
        unknownRegions.push({ region });
      }
    }

    // show summaries
    const matchedInputRegionString = matchedRegions.map(({ region }) => region).join(",");
    const unknowInputRegionString = unknownRegions.map(({ region }) => region).join(",");

    if (matchedRegions.length) {
      const unmatchedRegionString = unknowInputRegionString
        ? `; unknown: ${chalk.underline(unknowInputRegionString)}`
        : "";
      console.log(
        `Country Overview (found: ${
          chalk.underline(matchedInputRegionString) + unmatchedRegionString
        }):`
      );
      matchedRegions.forEach(({ iso3 }) => writeCountrySummary(summaries[iso3]));
    }

    // show unknow input arguments
    if (!matchedRegions.length && unknownRegions.length) {
      console.log("Unknown Input Country/Region: " + chalk.underline(unknowInputRegionString));
    }
  }
};

/**
 * Get command handler
 */

const get = async (args: string[], cmd: Command) => {
  // Unpack options
  const { global, all } = cmd;
  const regions = args
    .map((arg) => arg.toLowerCase().split(","))
    .reduce((acc, nxt) => [...acc, ...nxt], []);

  // Fetch data from API
  const api = new API();
  const summaries = await api.fetch();
  const date = api.updatedDate as Date;

  // Interactive or ArgParse Mode
  if (!process.argv[2]) {
    getInteractive(summaries, date);
  } else {
    getArgParse(regions, summaries, all, global, date);
  }
};

export { get };
