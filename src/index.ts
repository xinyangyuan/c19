#!/usr/bin/env node
import commander from "commander";

import pkg from "../package.json";
import createGetCommand from "./commands/get";
import createRegionsCommand from "./commands/regions";


const program = new commander.Command();

program
  .name(pkg.name)
  .version(pkg.version)
  .description(pkg.description)
  .addCommand(createGetCommand(), { isDefault: true })
  .addCommand(createRegionsCommand())
  .parse(process.argv);
