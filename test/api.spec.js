const { pathAbsolute, pathExist, pathIsFile, pathIsFolder, isFileMd, findLink } = require('../src/api.js');
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

// const arrayFiles=[
//   'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\markdown.md',
//   'C:\\Users\\spsa\\Desktop\\Laboratoria\\Projects\\DEV003-md-links\\markdown\\readmeprueba.md'
  
// ]

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


// describe('function return state of links', () => {
//   it('should be a function', () => {
//     expect(typeof statusLink).toBe('function');
//   });

//   it('should return array (href,text,file)', async() => {
//     return await statusLink(filePath2).then((data) => {
//       expect(data).toEqual(linksValidateTrue);
//     })
//     //  statusLink(filePath2).then((result) => {
//     // Promise.allSettled(findLink(result)).then((data)=>{
//     //   expect(data).resolves.toEqual(linksValidateTrue);
//     // })

//     // //  return expect(Promise.resolve(statusLink(filePath2))).resolves.toEqual(linksValidateTrue);
//     // })
//     // await expect(statusLink(filePath2)).resolves.not.toThrow();

//   });


//})

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


  it('should match with regex', async() => {
  await  findLink(filePath2).then(() => {
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



  //  return expect(Promise.reject(new Error('Error al leer archivo'))).rejects.toThrow(
  //   'No contiene urls',
  // );
  //  await expect(statusLink('errorarchivo.md')).rejects.toThrow({error: 'Error al leer archivo'});
  //await expect(statusLink('errorarchivo')).rejects.toMatch({error: 'Error al leer archivo'});
  //});

