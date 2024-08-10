import { yarg } from './config/plugins/args.plugin'
import { ServerApp } from './presentation/server-app';

(async () => {
  await main();
})();

async function main() {
  const { base, limit, show:showTable, destination, name:filename } = yarg;
  ServerApp.run({ base, limit, showTable, destination, filename });
}
