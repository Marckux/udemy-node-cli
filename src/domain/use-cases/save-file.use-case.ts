
import fs from 'fs';

export interface Options {
  fileContent: string;
  destination?: string;
  filename?: string;
}

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}
  execute ({ fileContent, destination='outputs', filename='table'}: Options): boolean {
    try {
      fs.mkdirSync(destination, {recursive: true});
      fs.writeFileSync(`${destination}/${filename}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
