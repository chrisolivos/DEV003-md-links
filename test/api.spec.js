const { pathAbsolute, pathExist, pathIsFile, pathIsFolder, isFileMd, findLink, statusLink, readAllFiles } = require('../src/api.js');
const filePath = 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebamd.md'
const filePath2 = 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md'
const filePathArray =
[
  'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebamd.md', 
  'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md'
]
const directoryPath = 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\'
const link = '[Node.js](httpfilePath2s://nodejs.org/)'
// const linkArray = 
// [{
//   'https://nodejs.org/',
// }]

const linksValidateFalse =
  [{
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md'
  }]

const linksValidateTrue =
  [{
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md',
    status: 200,
    ok: 'ok'
  }
  ]

// const arrayFiles=[{
//   'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\prueba1\\pruebaTest.md',
// }]

const linkArray = ['http://algo.com/2/3/', 'http://google.com/', 'https://api.discogs.com/artists/100/releasesv']

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


// describe('read directories', () => {
//   it('should find files in a directory', () => {
//     expect(readAllFiles('./markdwon')).toMatchObject(arrayFiles)
//   })
// });

describe('function return if is markdown file', () => {
  it('should be a function', () => {
    expect(typeof isFileMd).toBe('function');
  });

  it('should return true, if is markdown file', () => {
    expect(isFileMd('markdown.md')).toBeTruthy();
  });
});


describe('function return links', () => {
  it('should be a function', () => {
    expect(typeof findLink).toBe('function');
  });

  it('should return array (href,text,file)', () => {

    findLink(filePath2).then((result) => {
      return expect(result).toEqual(linksValidateFalse);
    })
  });

  it('should reject promise', () => {
    return (findLink('./pruebamd.md')).catch((error) => {
      expect(error).toBe([])
    })
  })


  it('should match with regex', async () => {
    await findLink(filePath2).then(() => {
      // console.log('========================>', filePath2)
      const regex = /\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm
      // const found = result.match(regexp)
      // console.log('found:', found)
      expect(link).toMatch(regex)
    })
  })

  it('should be an empty array', () => {
    findLink(filePath).then((result) => {

      expect(result).toMatchObject([])
    })
  })


})

/*********FETCH*********** */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: './texto.md',
    status: 200,
    ok: 'ok'
  })
})

describe('function return links', () => {
  it('should be a function', () => {
    expect(typeof statusLink).toBe('function');
  })

  it('shuld return links with http request', () => {
  // statusLink(linksValidateFalse).then((data) => {

      statusLink(filePath2).then(() => {
        // return findLink(filePath2).then((data) => {
        // })
        expect(findLink()).toHaveBeenCalled();
        })
      // const data =statusLink([])
      //expect(data).toEqual(linksValidateTrue)
    //  expect(data.ok).toBe('ok')
    })

    it('should reject promise', () => {
      return (statusLink('./pruebamd.md')).catch((error) => {
        expect(error).toBe(new Error('Error al leer archivo'))
      })
    })

  })
//})




describe('readAllFiles with path directory Prueba1', () => {
  it('should return an array of md files', () => {

    const arrayFilesMd = []
    expect(readAllFiles(directoryPath, arrayFilesMd)).toContain(filePathArray)

  })
})


// describe('readAllFiles with path directory-test', () => {
//   it('should return an array of md files', () => {
//     const pathTest = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test'
//     const arrayFilesMd = []
//     expect(api.readAllFiles(pathTest, arrayFilesMd)).toContain('C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test\\directory-test-4\\README.md')
//   })
// })

  //  return expect(Promise.reject(new Error('Error al leer archivo'))).rejects.toThrow(
  //   'No contiene urls',
  // );
  //  await expect(statusLink('errorarchivo.md')).rejects.toThrow({error: 'Error al leer archivo'});
  //await expect(statusLink('errorarchivo')).rejects.toMatch({error: 'Error al leer archivo'});
  //});

