import path from "path";
import { fileURLToPath } from "url";

export const CONFIG_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "./config.json"
);

export const DEFAULT_CONFIG = {
  ASSETS_DIR: path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "../assets/assets.json"
  ),
};
