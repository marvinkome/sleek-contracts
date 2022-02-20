import fs from "fs";
import { artifacts } from "hardhat";

export function saveFrontendFiles(artifact: string) {
  // eslint-disable-next-line node/no-path-concat
  const abiDir = __dirname + "/../dist";
  if (!fs.existsSync(abiDir)) fs.mkdirSync(abiDir);

  const { abi } = artifacts.readArtifactSync(artifact);

  fs.writeFileSync(
    `${abiDir}/${artifact}.json`,
    JSON.stringify(
      {
        abi,
      },
      null,
      2
    )
  );
}
