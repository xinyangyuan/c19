import chalk from "chalk";
import { table, getBorderCharacters } from "table";

import regions from "../lib/regions";

const listRegions = () => {
  const options = {
    border: getBorderCharacters(`void`),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1,
    },
    drawHorizontalLine: () => false,
  };

  console.log(
    table(
      [
        ["NAME", "ISO2", "ISO3"],
        ...regions.map((country) => [country.name, country.iso2, chalk.whiteBright(country.iso3)]),
      ],
      options
    )
  );
};

export { listRegions };
