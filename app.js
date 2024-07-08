import config from "./.migpt.js";
import { MiGPT } from "./dist/index.mjs";

async function main() {
  const client = MiGPT.create(config);
  await client.start();
}

main();
