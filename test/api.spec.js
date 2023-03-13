const { pathAbsolute, pathExist, pathIsFile, pathIsFolder, isFileMd, statusLink, findLink } = require('../api.js');
const filePath = 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebamd.md'
const filePath2 = 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md'
const link = '[Node.js](https://nodejs.org/)'

const linksValidateFalse = [{
  href: 'https://nodejs.org/',
  text: 'Node.js',
  file: 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md'
}]

const linksValidateTrue = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md',
    status: 200,
    ok: 'ok'
  }
]



describe('function return path absolute', () => {
  it('should be a function', () => {
    expect(typeof pathAbsolute).toBe('function');
  });

  it('should return true, if the path is absolute', () => {
    expect(pathAbsolute(__dirname)).toBeTruthy();
  });
});

describe('function return if path exits', () => {
  it('should be a function', () => {
    expect(typeof pathExist).toBe('function');
  });

  it('should return true, if the path exists', () => {
    expect(pathExist(filePath)).toBeTruthy();
  });

  // it ('should return false, if the path do not exist', () => {
  //     expect (isPathValid(`${__dirname}ss`)).toBeFalsy();
  //   });
});

describe('function return if is file', () => {
  it('should be a function', () => {
    expect(typeof pathIsFile).toBe('function');
  });

  it('should return true, if is file', () => {
    expect(pathIsFile(filePath)).toBeTruthy();
  });
});

describe('function return if is folder', () => {
  it('should be a function', () => {
    expect(typeof pathIsFolder).toBe('function');
  });

  it('should return true, if is folder', () => {
    expect(pathIsFolder('./markdown')).toBeTruthy();
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

  it('should return true, if is markdown file', () => {
    expect(isFileMd('markdown.md')).toBeTruthy();
  });
});


describe('function return state of links', () => {
  it('should be a function', () => {
    expect(typeof statusLink).toBe('function');
  });

  it('should return array (href,text,file)', () => {
    statusLink(filePath2).then(() => {

      // expect(data).resolves.toEqual(linksValidateTrue);
      return expect(Promise.resolve(statusLink(filePath2))).resolves.toEqual(linksValidateTrue);
    })
    // await expect(statusLink(filePath2)).resolves.not.toThrow();

  });

})

describe('function return links', () => {
  it('should be a function', () => {
    expect(typeof findLink).toBe('function');
  });

  it('should return array (href,text,file)', () => {

    findLink(filePath2).then(() => {
      return expect(Promise.resolve(findLink(filePath2))).resolves.toEqual(linksValidateFalse);
    })
  });

  it('should match with regex', () => {
    const regex = /\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm
    expect(link).toMatch(regex)
  })

/*/**/*/* */

  // it('should return an error',async () => {
  //    //await expect(findLink('errorarchivo.md')).rejects.toEqual({error: 'Error al leer archivo'});
  //     return expect(Promise.reject(new Error('Error al leer archivo'))).rejects.toThrow(
  //      'Error al leer archivo',
  //    );

  //  return expect(Promise.reject(new Error('Error al leer archivo'))).rejects.toThrow(
  //   'No contiene urls',
  // );
  //  await expect(statusLink('errorarchivo.md')).rejects.toThrow({error: 'Error al leer archivo'});
  //await expect(statusLink('errorarchivo')).rejects.toMatch({error: 'Error al leer archivo'});
  //});

})




