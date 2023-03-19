import { promises as fs } from "fs";
import fse from "fs-extra";
import path from "path";
import { Command } from "commander";
import { loadConfig } from "../config/config.js";

const createProgram = new Command("create");

createProgram.argument("<assetName>").action(async (assetName) => {
  const config = await loadConfig();
  const assets = await fs.readFile(config.ASSETS_DIR, "utf-8").then(JSON.parse);
  const assetData = assets[assetName];
  if (!assetData) throw new Error(`Asset ${assetName} not found.`);
  if (typeof assetData === "string") {
    await fse.copy(
      path.resolve(path.dirname(config.ASSETS_DIR), assetData),
      path.join(process.cwd(), path.basename(assetData))
    );
    return;
  }
});

export default createProgram;
