
import { CreateTable } from '../../../src/domain/use-cases/create-table.use-case';

describe('create-table.use-case',() => {

  it('works',() => {
    expect(true).toBeTruthy();
  });

  it('should create table with default values',() => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base:2 });
    const nRows = table.split('\n').length;

    expect(nRows).toBe(10);
    expect(table).toContain('2 x 1 = 2');
    expect(table).toContain('2 x 10 = 20');
  });

  it('should create table with custom values',  () => {
    const options = { base:3, limit: 5 };
    const createTable = new CreateTable();
    const table = createTable.execute(options);
    const nRows = table.split('\n').length;

    expect(nRows).toBe(5);
    expect(table).toContain('3 x 1 = 3');
    expect(table).toContain('3 x 5 = 15');

  });

});
