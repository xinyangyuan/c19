import chalk from "chalk";
import figlet from "figlet";

import formatNumber from "../utils/format-number";
import { Summary, Column } from "../lib/api";

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

const writeGlobalSummary = (summary: Summary, date: Date) => {
  console.log(`Global Summary (updated at ${date.toLocaleString()}):`);
  console.log(
    `Total Confirmed Cases: ${chalk.redBright(formatNumber(summary[Column.total_cases]))}` +
      ` | New Confirmed Cases: ${chalk.redBright(formatNumber(summary[Column.new_cases]))}` +
      ` | Total People Vaccinated (per hundred): ${chalk.cyanBright(
        formatNumber(summary[Column.people_vaccinated]) +
          " (" +
          formatNumber(summary[Column.people_vaccinated_per_hundred]) +
          ")"
      )}`
  );
};

/**
 * Utility writer function, print multiple country/region summaries
 */

const writeCountrySummaries = (summaries: Summary[], date: Date) => {
  console.log(`Global Overview: (sort by new confirmed cases - updated at ${date.toLocaleString()}):`);
  summaries.forEach((summary) => writeCountrySummary(summary));
};

/**
 * Utility writer function, print summary for a specific country/region
 */

const writeCountrySummary = (summary: Summary) => {
  console.log(
    `Country/Region: ${chalk.whiteBright(summary[Column.location])} (${summary[Column.iso_code]})` +
      ` | Total Confirmed Cases: ${chalk.redBright(formatNumber(summary[Column.total_cases]))}` +
      ` | New Confirmed Cases: ${chalk.redBright(formatNumber(summary[Column.new_cases]))}` +
      ` | Total People Vaccinated (per hundred): ${chalk.cyanBright(
        formatNumber(summary[Column.people_vaccinated]) +
          " (" +
          formatNumber(summary[Column.people_vaccinated_per_hundred]) +
          ")"
      )}`
  );
};

export { writeLine, writeGreeting, writeGlobalSummary, writeCountrySummary, writeCountrySummaries };
