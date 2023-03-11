#!/usr/bin/env node

const { mdLinks } = require('./md-links.js');
const [, , , argumento1] = process.argv
const [, , , , argumento2] = process.argv
const [, validate] = argumento1.split(":")

let pathToEnter = process.argv[2]

const argumentValue = argumento1.substring(2, argumento1.search(':')).trim()

//console.log('posicion',argumentValue)
//if (!argumento1){console.log('Debe ingresar un parámetro')}

//console.log(process.argv.length)
//if (process.argv.length<6){
if (argumentValue === 'validate' || argumento1 === '--validate' && !argumento2) {
    // console.log('validate: ', validate)
    switch (validate) {
        case 'true':
            // console.log('validate true: ', validate)
            mdLinks(pathToEnter, 'validateTrue').then((result) => {
                // console.log(result)
                result.forEach((res) => {
                    href = res.href,
                        text = res.text,
                        file = res.file,
                        status = res.status,
                        ok = res.ok

                    if (href.length > 50) {
                        let hrefSmall = href.slice(0, 50) + '...';
                        console.log('href: ', hrefSmall);
                        console.log('text: ', text);
                        console.log('file: ', file);
                        console.log('status: ', status);
                        console.log('ok: ', ok);
                        console.log('=====================================');
                    }

                })


            })
                .catch((error) => { console.log(error) })
            break;
        case 'false':
            // console.log('validate false: ', validate)
            mdLinks(pathToEnter, 'validateFalse').then((result) => {
                //   console.log(result)
                result.forEach((res) => {
                    href = res.href,
                        text = res.text,
                        file = res.file

                    if (href.length > 50) {
                        let hrefSmall = href.slice(0, 50) + '...';
                        console.log('href: ', hrefSmall);
                        console.log('text: ', text);
                        console.log('file: ', file);
                        console.log('=====================================');
                    }

                })


            })
                .catch((error) => {
                    console.log(error)

                })
            break;

        default:
            //  console.log('no tiene valor: ', validate)
            console.log('no tiene parametros')

            break;
    }
}//else{console.log('parámetros incorrectos')}
if (argumento1 === '--stats' && !argumento2) {
    // console.log('argumento stats: ', argumento1)
    mdLinks(pathToEnter, 'validateTrue').then((result) => {
        //  console.log(result) 
        const arrayUnique = []
        result.forEach((element) => {
            if (!arrayUnique.includes(element.href)) {
                arrayUnique.push(element.href)
            }
        })
        console.log('Unique: ', arrayUnique.length)
        console.log('Total: ', result.length)

    })
        .catch((error) => { console.log(error) })
}
if (argumento1 === '--stats' && argumento2 === '--validate' || argumento1 === '--validate' && argumento2 === '--stats') {
   // console.log('stats - validate: ', argumento1, argumento2)
    mdLinks(pathToEnter, 'validateTrue').then((result) => {
        //console.log(result) 
        //recorro el resultado
        // cuento los 404
        let broken = []
        result.forEach(element => {
            //console.log(element.status)
            if (element.status === 404) {
                broken.push(element.status)
            }

        });
        const arrayUnique = []
        result.forEach((element) => {
            if (!arrayUnique.includes(element.href)) {
                arrayUnique.push(element.href)
            }
        })
        console.log('Total: ', result.length)
        console.log('Unique: ', arrayUnique.length)
        console.log('Borken: ', broken.length)
    })
        .catch((error) => { console.log(error) })

}
// }else{
//    console.log('parametros incorrectos')
// }

// /*parametros:
// --validate:true
// --validate:false
// --stats
// --stats --validate
//= --validate --stats
// */


