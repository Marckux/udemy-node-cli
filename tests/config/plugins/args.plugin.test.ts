
const originalArgv = process.argv;

const runCommand = async (args: string[]) => {
  process.argv = [ ...process.argv, ...args ];
  const { yarg } = await import('../../../src/config/plugins/args.plugin');
  return yarg;
}

describe ('args.plugin',() => {

  const correctBase = 5;
  const errorBase = -1;
  const correctLimit = 20;
  const errorLimit = 0;
  const defaultLimit = 10;
  const correctShow = true;
  const defaultShow = false;
  const exDst = 'sample-destination';
  const defaultDst = 'outputs';
  const exName = 'sample-name';
  const defaultName = 'table';

  afterEach( () => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  it( 'should get the default values',async () => {
    const yarg = await runCommand([ '--base', String(correctBase) ]);
    const { base, limit, show, destination, name } = yarg;
    expect( base ).toBe( correctBase );
    expect( limit ).toBe( defaultLimit );
    expect( show ).toBe( defaultShow );
    expect( destination ).toBe( defaultDst );
    expect( name ).toBe( defaultName);
  });

  it( 'should return configuration with custom values', async () => {
    const yarg = await runCommand([
      '--base', String(correctBase),
      '--limit', String(correctLimit),
      '--destination', exDst,
      '--show',
      '--name', exName
    ]);
    const { base, limit, show, destination, name } = yarg;
    expect( base ).toBe( correctBase );
    expect( limit ).toBe( correctLimit );
    expect( show ).toBe( correctShow );
    expect( destination ).toBe( exDst );
    expect( name ).toBe( exName );
  });

  it('Should throw an error if a invalid base is given', async () => {
    await expect(runCommand([ '--base', String( errorBase )])).rejects.toThrow();
  });

});








