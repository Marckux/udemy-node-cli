import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { base, limit, show} = yarg;

let data: string = "";
let i:number;

data += "======================\n";
data += `     Tabla del ${base}\n`;
data += "======================\n";


for (i=1; i<=limit; i++) {
  data += (`${base} x ${i} = ${base*i}\n`);
}

const dir: string = './outputs';
const path: string = `${dir}/tabla-${base}.txt`;

if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

console.log(`filename: ${path}\n`);
if (show) {
  console.log(data);
}
writeFileSync(path, data);

console.log("File saved\n");
