
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
              statusLink(pathResult).then((result) => {
                resolve(result)
                // console.log(result)
              })
                .catch((error) => {
                  reject(error)
                })


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
        readAllFiles(pathResult).then((resultFiles) => {
          const statusLinkPromises = []
          resultFiles.forEach(element => {
            switch (options) {
              case 'validateTrue':
                statusLinkPromises.push(statusLink(element))
                break;
              case 'validateFalse':
                statusLinkPromises.push(findLink(element))
                break;
            }
          });
            Promise.all(statusLinkPromises).then((result)=>{
            const links=result.reduce((acc,val)=>acc.concat(val),[])
            resolve(links)
            })
            
        })
          .catch((error) => { reject(error) })

      }
    } else {
      reject("No existe la ruta ingresada");
    }
  })
}



module.exports = {
  mdLinks

};