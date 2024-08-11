"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
const save_file_use_case_1 = require("../domain/use-cases/save-file.use-case");
class ServerApp {
    static run({ base, limit, showTable, destination, filename }) {
        console.log('Server running...');
        const fileContent = new create_table_use_case_1.CreateTable().execute({ base, limit });
        const wasCreated = new save_file_use_case_1.SaveFile().execute({ fileContent, destination, filename });
        if (wasCreated)
            console.log('File Created!');
        if (showTable)
            console.log(fileContent);
    }
}
exports.ServerApp = ServerApp;
