
import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';

describe( 'save-file.use-case',() => {

  const defaultDst = 'outputs';
  const defaultName = 'table';
  const sampleContent = 'test content\n';
  const custom_dest = 'custom-dest';
  const custom_name = 'custom-name';

  afterEach( () => {
    fs.rmSync( defaultDst, { force: true, recursive: true });  
    fs.rmSync( custom_dest, { force: true, recursive: true });  
  });

  it('should save file with default values', () => {

    // Preparation
    const saveFile = new SaveFile();
    const options = { fileContent: sampleContent };
    // Stimulation
    const isSaved = saveFile.execute( options );
    // Assertion
    expect( isSaved ).toBeTruthy();
    const defaultFullPath = `${defaultDst}/${defaultName}.txt`;  
    expect( fs.existsSync( defaultFullPath ) ).toBeTruthy();
    const fileContent = fs.readFileSync( defaultFullPath, { encoding: 'utf8' });
    expect( fileContent ).toContain( sampleContent );
    
  });

  it('should save file with custom values',() => {
    
    // Preparation
    const options = {
      fileContent: sampleContent,
      destination: custom_dest,
      filename: custom_name,
    };
    const saveFile = new SaveFile();
    // Stimulation
    const isSaved = saveFile.execute ( options );
    // Assertion
    expect( isSaved ).toBeTruthy();
    const defaultFullPath = `${custom_dest}/${custom_name}.txt`;  
    expect( fs.existsSync( defaultFullPath ) ).toBeTruthy();
    const fileContent = fs.readFileSync( defaultFullPath, { encoding: 'utf8' });
    expect( fileContent ).toContain( sampleContent );
    
  });
  
  it('should return false if the directory can not be created', () => {
    // Preparation
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync');
    mkdirSpy.mockImplementationOnce( () => {
      throw new Error ('Jest says that the directory can not be created');
    });
    const saveFile = new SaveFile();
    // Stimulation
    const isSaved = saveFile.execute ({ fileContent: sampleContent });
    // Assertion
    expect( isSaved ).toBeFalsy();
    
  });

  it( 'should return false if the file can not be created',() => {
    // Preparation

    const writeFileSpy = jest.spyOn(fs, 'writeFileSync');
    writeFileSpy.mockImplementationOnce( () => {
      throw new Error ('Jest says that the file can not be writen');
    });
    
    const saveFile = new SaveFile();
    // Stimulation
    const isSaved = saveFile.execute ({ fileContent: sampleContent });
    // Assertion
    expect( isSaved ).toBeFalsy();
  });

});














// End
