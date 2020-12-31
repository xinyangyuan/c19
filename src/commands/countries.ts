import commander from "commander";
import { listCountries } from "../actions/countries";

const createCommand = () => {
  const countries = new commander.Command("countries");

  countries
    .alias("c")
    .description("Show the list of reported countries")
    .action(() => listCountries());

  return countries;
};

export default createCommand;
