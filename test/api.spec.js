const {pathAbsolute,pathExist,pathIsFile,pathIsFolder,isFileMd} = require('../api.js');

describe('function return path absolute', () => {
        it('should be a function', () => {
          expect(typeof pathAbsolute).toBe('function');
        });
      
        it ('should return true, if the path is absolute', () => {
          expect (pathAbsolute(__dirname)).toBeTruthy(); 
        });
});

describe('function return if path exits', () => {
    it('should be a function', () => {
      expect(typeof pathExist).toBe('function');
    });
  
    it ('should return true, if the path is absolute', () => {
    //  expect (pathExist('markdown.md')).toBeTruthy(); 
    expect (pathExist()).toBeTruthy(); 
    });

    // it ('should return false, if the path do not exist', () => {
    //     expect (isPathValid(`${__dirname}ss`)).toBeFalsy();
    //   });
});

describe('function return if is file', () => {
    it('should be a function', () => {
      expect(typeof pathIsFile).toBe('function');
    });
  
    it ('should return true, if is file', () => {
    expect (pathIsFile()).toBeTruthy(); 
    });
});

describe('function return if is folder', () => {
    it('should be a function', () => {
      expect(typeof pathIsFolder).toBe('function');
    });
  
    it ('should return true, if is folder', () => {
    expect (pathIsFolder()).toBeTruthy(); 
   // expect (pathIsFolder()).toBeFalsy();
    });
    // it ('should return false, if is file', () => {
    //     expect (pathIsFolder()).toBeFalsy();
    //   });

});

describe('function return if is markdown file', () => {
    it('should be a function', () => {
      expect(typeof isFileMd).toBe('function');
    });
  
    it ('should return true, if is markdown file', () => {
    expect (isFileMd()).toBeTruthy(); 
    });
});