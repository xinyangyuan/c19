import chalk from "chalk";
import { table, getBorderCharacters } from "table";
import countries from "../lib/countries";

const listCountries = () => {
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
        ["NAME", "SLUG", "ISO2"],
        ...countries.map((country) => [
          country.name,
          chalk.whiteBright(country.slug),
          country.iso2,
        ]),
      ],
      options
    )
  );
};

export { listCountries };
