import { Command } from "commander";
import { loadConfig, saveConfig } from "../config/config.js";

const configProgram = new Command("set");

configProgram
  .command("openai")
  .argument("<configValue>", "Value of the config")
  .action(async (value) => {
    const config = await loadConfig();
    config.OPEN_AI_API_KEY = value;
    await saveConfig(config);
  });

export default configProgram;
