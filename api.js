const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');


// devuelve la ruta como absoluta
const pathAbsolute = (pathReceived) => {

    return path.resolve(pathReceived);
}
// console.log('ruta absoluta: ',pathAbsolute())

// validar si exites la ruta
const pathExist = (pathReceived) => {
    if (fs.existsSync(pathReceived)) {
        return true;

    }
}
// console.log('existe archivo? ', pathExist())

// verificar si es archivo 
const pathIsFile = (pathReceived) => {
    if (fs.statSync(pathReceived).isFile()) {
        return true;

    }
}
//console.log('es archivo? ', pathIsFile())

// verificar si es carpeta  = './test'
//const pathIsFolder = (pathReceived='markdown.md')=>{
const pathIsFolder = (pathReceived) => {
    if (fs.statSync(pathReceived).isDirectory()) {
        return true;
        //  }else{
        //     return false;
    }
}
// console.log('es carpeta? ', pathIsFolder())

// verificar si el archivo es .md
const isFileMd = (pathReceived) => {
    const extFile = path.extname(pathReceived);
    if (extFile === '.md') {
        // leer el archivo, buscar link y agregarlos a un array
        return true;

    }
}
// funciona 
//console.log('es .md? ', isFileMd())

//si es carpeta verificar si esta vacia sino recorrer y buscar archivo .md

//si es archivo .md agregar a un array
const findLink = (pathReceived) => {
    return new Promise((resolve, reject) => {
        //   console.log('ruta recibida',pathReceived);
        fs.readFile(pathReceived, 'utf-8', (error, data) => {
            if (error) {
                return reject({ Error: `Error al leer archivo ${error}` });
            } else {
                const regExp = /\!?\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm;
                const found = data.match(regExp);

                if (found !== []) {
                    let links = [];
                    for (let i = 0; i < found.length; i++) {
                        let start = found[i].indexOf('[');
                        let end = found[i].indexOf(']');
                        const obj = {
                            href: found[i].substring(end + 2, found[i].length - 1),
                            text: found[i].substring(start + 1, end),
                            file: pathReceived // ruta del archivo, ruta absoluta debería ir acá

                        }
                        //  console.log(obj);  
                        links.push(obj);
                    }
                    //  const datos = obj;
                    //   console.log(links); // funciona
                    return resolve(links)
                } else {
                    return reject({ error: 'No contiene urls' })
                }
            }


        })

    })

}

//console.log('mostrar urls: ', findLink())



// https://github.com/chrisolivos/DEV003-md-links#readme 200
// https://api.discogs.com/artists/100/releasesv 404
// error https://otra-cosa.net/algun-doc.html
// https://jestjs.io/docs/es-ES/manual-mocks
// http://algo.com/2/3/
// http://google.com/

//const statusLink = ((linkArray = ['http://algo.com/2/3/', 'http://google.com/', 'https://api.discogs.com/artists/100/releasesv']) => {

const statusLink = (pathReceived) => {
    return new Promise((resolve, reject) => {
     //   let arrayStatusOk = [];
        findLink(pathReceived).then((resultArray) => {
            
            let arrayStatusOk = [];
            resultArray.forEach((links) => {
                fetch(links.href).then((res) => {
                    let okresult = '';
                    res.ok? okresult = 'ok' : okresult = 'fail';
                    // if (res.ok) {
                    //     okresult = 'ok';
                    // } else {
                    //     okresult = 'fail';
                    // }
                    //console.log(res.status); falta manejar la exception con el reject para codigo 500
                    const obj = {
                        //href: links.href,
                        //text: links.text,
                        //file: links.file,
                        ...links,
                        status: res.status,
                        ok: okresult
                    }
                    //  console.log(obj);  
                    arrayStatusOk.push(obj);
                   // console.log(arrayStatusOk);
                   
                })
            //    Promise.allSettled(arrayStatusOk).then((result)=>{ resolve(result)})
                 // console.log(arrayStatusOk);
                // return resolve(arrayStatusOk) 
            });

          //     return resolve( arrayStatusOk ); 
        })
       // reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
        // .catch((error) => {
        //  //   console.log('codigo de error: ',error.name) 
        //  console.log('codigo de error: ',error) 
        //  //    if (error.name === 'ENOTFOUND'){
        //    //     console.log('Url no encontrada')
        //    //  }
        
        // }) 


    })
}




module.exports = {
    pathAbsolute,
    pathExist,
    pathIsFile,
    pathIsFolder,
    isFileMd,
    findLink,
    statusLink
};


