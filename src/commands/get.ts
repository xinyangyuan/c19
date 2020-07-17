import commander, { Command } from "commander";
import { getSummary, getCountry } from "../actions/get";

const countryList = (value: string, previous: string | string[]) => {
  return value.toLowerCase().split(",");
};

const createCommand = () => {
  const get = new commander.Command("get").alias("g").description("Get COVID-19 case data");

  get
    .command("summary", { isDefault: true })
    .alias("s")
    .description("Get latest daily updated COVID-19 summary")
    .option("-c, --country <names>", "Add specified countries in CSV format", countryList)
    .option("-g, --global", "Show global summary", true)
    .option("-a, --all", "Show all reported contries")
    .option("-H, --head [num]", "Show first num rows of country", "5")
    .action(async (cmd) => await getSummary(cmd));

  get
    .command("country <name>")
    .alias("c")
    .description("Get COVID-19 case data by country")
    .option("--latest", "Show latest updated data", true)
    .option("--dayone", "Show all data from first confirmed case")
    .action(async (countryName, cmd) => await getCountry(countryName, cmd));

  return get;
};

export default createCommand;
