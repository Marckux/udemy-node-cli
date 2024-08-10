
interface Options {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options: Options) => string;
}


export class CreateTable {
  constructor() {
  }
  execute({ base, limit=10 }: Options) {
    let outputMessage: string = '';
    for (let i: number = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;

  }
}
