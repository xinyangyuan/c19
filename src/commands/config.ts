import commander from "commander";

const createCommand = () => {
  const config = new commander.Command("summary");

  config
    .description("set default country")
    .option("-c, --country <name of country>", "set default country")
    .action((cmd) => console.log("config"));

  return config;
};

export default createCommand;
