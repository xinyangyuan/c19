#!/usr/bin/env node
import commander from "commander";

import createGetCommand from "./commands/get";
import createListCommand from "./commands/list";
import pkg from "../package.json";

const program = new commander.Command();

program
  .version(pkg.version)
  .addCommand(createGetCommand(), { isDefault: true })
  .addCommand(createListCommand())
  .parse(process.argv);
