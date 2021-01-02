import commander from "commander";
import { listRegions } from "../actions/regions";

const createCommand = () => {
  const countries = new commander.Command("regions").alias("countries");

  countries
    .alias("c")
    .description("Show the list of reported countries/regions")
    .action(() => listRegions());

  return countries;
};

export default createCommand;
