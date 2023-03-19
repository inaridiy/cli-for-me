import { program } from "commander";
import configProgram from "./commands/config.js";

program.name("MY CLI").version("0.0.1").description("CLI for me.");

program.addCommand(configProgram);

program.parse(process.argv);
