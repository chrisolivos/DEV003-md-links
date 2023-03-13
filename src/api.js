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
        return true;
    }
}
//console.log('es .md? ', isFileMd())


//const statusLink = ((linkArray = ['http://algo.com/2/3/', 'http://google.com/', 'https://api.discogs.com/artists/100/releasesv']) => {
const findLink = (pathReceived) => {
    return new Promise((resolve, reject) => {
        //     console.log('ruta recibida',pathReceived);
        //  if(pathReceived.length<2){
        fs.readFile(pathReceived, 'utf-8', (error, data) => { 
            if (error) {
                //console.log("Entra a excep");
                // return reject({ Error: `Error al leer archivo ${error}` });
                //resolve({ Error: 'Error al leer archivo' });
                let links = [];
                resolve(links);

            } else {
                const regExp = /\!?\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm;
                const found = data.match(regExp);
             //   if(!found =='null'){
                //console.log("entra no es null",found);
                if (found !== null) {
                    let links = [];
                    
                    for (let i = 0; i < found.length; i++) {
                        let start = found[i].indexOf('[');
                        let end = found[i].indexOf(']');
                        const obj = {
                            href: found[i].substring(end + 2, found[i].length - 1),
                            text: found[i].substring(start + 1, end),
                            file: pathReceived // ruta del archivo
                        }
                        //  console.log(obj);  
                        links.push(obj);
                    }
                     
                     resolve(links)
                } else {
                    //console.log("entra es null");
                    
                    //reject({ error: 'No contiene urls' })
                    let links = [];
                    //links = '[{href:no encontrado}]';
                    resolve(links);
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
   // console.log(pathReceived);
    return new Promise((resolve, reject) => {
        findLink(pathReceived).then((resultArray) => {
            let arrayPromiseFetch = [];
            resultArray.forEach((links) => {
                const promiseFetch = fetch(links.href);
                arrayPromiseFetch.push(promiseFetch);

            })

            Promise.allSettled(arrayPromiseFetch).then((result) => {
                let okresult = '';
                for (let i = 0; i < result.length; i++) {
                    if (result[i].status = 'fullfiled') {
                        // console.log('status: ', result[i].value.status, result[i].value.ok)
                        result[i].value.ok ? okresult = 'ok' : okresult = 'fail';
                        //console.log(res.status);
                        resultArray[i].status = result[i].value.status;
                        resultArray[i].ok = okresult;

                    } else {
                        console.log('error', result[i].reason.cause)
                        okresult = 'fail';
                        // resultArray[i].status = result[i].reason.cause;
                        resultArray[i].status = '404';
                        resultArray[i].ok = okresult;
                    }

                }

                resolve(resultArray)
                //console.log(resultArray);
            })
        }
        ).catch((error) => {
            //reject({error: "Error en catch" });
           // console.log(`Error al leer archivo ${error}`);
           console.log('Error al leer archivo');
        })

    })

}


const readAllFiles = (path, arrayOfFiles = []) => {
    return new Promise((resolve, reject) => {
        const files = fs.readdirSync(path)
        files.forEach(file => {
            const stat = fs.statSync(`${path}/${file}`)
            if (stat.isDirectory()) {
                readAllFiles(`${path}/${file}`, arrayOfFiles)
            } else if (file.includes('.md')) {
                //	arrayOfFiles.push(`${path}/${file}`)
                const convertAbsolute = pathAbsolute(`${path}/${file}`)
                arrayOfFiles.push(convertAbsolute)

            }
        });
        resolve(arrayOfFiles)
       // console.log(arrayOfFiles)
    })
}
//console.log(readAllFiles('./markdown/'))


module.exports = {
    pathAbsolute,
    pathExist,
    pathIsFile,
    pathIsFolder,
    isFileMd,
    findLink,
    statusLink,
    readAllFiles
};


