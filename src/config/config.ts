import { CONFIG_DIR } from "../constants.js";
import { promises as fs } from "fs";

export interface Config {
  OPEN_AI_API_KEY: string;
}

export const loadConfig = async (): Promise<Config> => {
  const config = await fs.readFile(CONFIG_DIR, "utf8").catch(() => "{}");
  return JSON.parse(config) as Config;
};

export const saveConfig = async (config: Config) => {
  const configString = JSON.stringify(config, null, 2);
  await fs.writeFile(CONFIG_DIR, configString);
  return config;
};
