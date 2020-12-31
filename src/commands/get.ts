import commander from "commander";
import { get as getAction } from "../actions/get";

const createCommand = () => {
  const get = new commander.Command("get");

  get
    .description("Get latest global COVID-19 report")
    .usage("[countries...] [options]")
    .arguments("[countries...]")
    .option("-a, --all", "Show all reported contries/regions")
    .option("-g, --global", "Show global summary", true)
    .action(async (args: string[], cmd) => await getAction(args, cmd));

  return get;
};

export default createCommand;
