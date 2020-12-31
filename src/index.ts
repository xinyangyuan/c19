#!/usr/bin/env node
import commander from "commander";

import createGetCommand from "./commands/get";
import createCountriesCommand from "./commands/countries";
import pkg from "../package.json";

const program = new commander.Command();

program
  .name(pkg.name)
  .version(pkg.version)
  .description(pkg.description)
  .addCommand(createGetCommand(), { isDefault: true })
  .addCommand(createCountriesCommand())
  .parse(process.argv);
