import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('base', {
    alias: 'b',
    type: 'number',
    demandOption: true,
    description: 'The base for the multiplication table',
  })
  .option('limit', {
    alias: 'l',
    type: 'number',
    default: 10,
    description: 'The limit of the multiplication table',
  })
  .option('show', {
    alias: 's',
    type: 'boolean',
    default: false,
    description: 'Show the table',
  })
  .option('destination', {
    alias: 'd',
    type: 'string',
    default: 'outputs',
    description: 'The folder where the file will be stored',
  })
  .option('name', {
    alias: 'n',
    type: 'string',
    default: 'table',
    description: 'The name of the the file',
  })
  .check((yarg) => {
    if (yarg.base < 1 || yarg.limit < 1) {
      throw new Error ('Base and limit should be greater or equal to 1');
    }
    return true;
  })
  .parseSync();


