"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const args_plugin_1 = require("./config/plugins/args.plugin");
const { base, limit, show } = args_plugin_1.yarg;
let data = "";
let i;
data += "======================\n";
data += `     Tabla del ${base}\n`;
data += "======================\n";
for (i = 1; i <= limit; i++) {
    data += (`${base} x ${i} = ${base * i}\n`);
}
const dir = './outputs';
const path = `${dir}/tabla-${base}.txt`;
if (!(0, fs_1.existsSync)(dir)) {
    (0, fs_1.mkdirSync)(dir, { recursive: true });
}
console.log(`filename: ${path}\n`);
if (show) {
    console.log(data);
}
(0, fs_1.writeFileSync)(path, data);
console.log("File saved\n");
