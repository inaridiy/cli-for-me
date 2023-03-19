import { CONFIG_DIR, DEFAULT_CONFIG } from "../constants.js";
import { promises as fs } from "fs";

export interface Config {
  OPEN_AI_API_KEY: string;
  ASSETS_DIR: string;
}

export const loadConfig = async (): Promise<Config> => {
  const configJSON = await fs.readFile(CONFIG_DIR, "utf8").catch(() => "{}");
  const config = JSON.parse(configJSON);
  return { ...DEFAULT_CONFIG, ...config };
};

export const saveConfig = async (config: Config) => {
  const configString = JSON.stringify(config, null, 2);
  await fs.writeFile(CONFIG_DIR, configString);
  return config;
};
