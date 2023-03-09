
const { pathAbsolute, pathExist, pathIsFile, pathIsFolder, isFileMd, findLink, statusLink, readAllFiles, hasDuplicates } = require('./api.js');
const fs = require('fs'); //manejo de archivos
const path = require('path');


const mdLinks = (pathReceived, options) => {
  return new Promise((resolve, reject) => {

    // convertir a ruta absoluta
    const pathResult = pathAbsolute(pathReceived);
    //  console.log(pathResult);
    if (pathExist(pathResult)) {
      //console.log('existe');
      if (pathIsFile(pathResult)) {
        //  console.log ('es un archvio');
        if (isFileMd(pathResult)) {
          // console.log('es un archivo markdown')
          // busca si hay links, si encuentra muestra....
          switch (options) {
            case "validateTrue":
              statusLink(pathResult).then((result) => { resolve(result) })
                .catch((error) => { reject(error) })
              // console.log("validateTrue");
              break;
            case "validateFalse":
              findLink(pathResult).then((result) => { resolve(result) })
                .catch((error) => { reject(error) })
              // console.log(urls);
              break;
          }
        }
      } else if (pathIsFolder(pathResult)) {
        console.log('es un directorio');
         readAllFiles(pathResult).then((result) => {
       //  console.log(result)

        
       findLink(result).then((res)=>{console.log(res)
      })

        })
        .catch((error) => { reject(error) })

        //recursividad
      }
    } else {
      reject("No existe la ruta ingresada");
    }
  })
}



module.exports = {
  mdLinks
};
