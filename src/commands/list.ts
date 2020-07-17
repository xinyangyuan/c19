import commander from "commander";
import { listCountries } from "../actions/list";

const createCommand = () => {
  const list = new commander.Command("list").alias("l").description("Show specified resource");

  list
    .command("countries")
    .aliases(["country", "c"])
    .description("Show all queryable countries")
    .action(() => listCountries());

  return list;
};

export default createCommand;
