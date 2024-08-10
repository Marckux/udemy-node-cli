import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface Options {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  filename: string;
}

export class ServerApp {


  static run({ base, limit, showTable, destination, filename }: Options) {
    console.log('Server running...');
    const fileContent: string = new CreateTable().execute({ base, limit });
    const wasCreated: boolean = new SaveFile().execute({ fileContent, destination, filename });
    if (wasCreated) console.log('File Created!');
    if (showTable) console.log(fileContent);
  }
  
}
