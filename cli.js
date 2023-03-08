const { mdLinks } = require('./md-links.js');
//console.log(process.argv)

//const [,,path]=process.argv
const [, , , argumento1] = process.argv
const [, , , , argumento2] = process.argv
//console.log('argumento: ', argumento1)
let pathToEnter = process.argv[2]
//console.log('ruta',process.argv[2])
const [, validate] = argumento1.split(":")
//console.log('validate: ', validate)
//validate ? true : false
const argumentValue = argumento1.substring(2, argumento1.search(':')).trim()
//console.log('posicion',argumentValue)
//if (!argumento1){console.log('Debe ingresar un parámetro')}

//console.log(process.argv.length)
if (process.argv.length<6){
if (argumentValue === 'validate' || argumento1 === '--validate' && !argumento2) {
    // console.log('validate: ', validate)
    switch (validate) {
        case 'true':
           // console.log('validate true: ', validate)
            mdLinks(pathToEnter, 'validateTrue').then((result) => { console.log(result) })
               .catch((error) => { console.log(error) })
            break;
        case 'false':
           // console.log('validate false: ', validate)
            mdLinks(pathToEnter, 'validateFalse').then((result) => { console.log(result) })
            .catch((error) => { console.log(error) })
            break;
        default:
          //  console.log('no tiene valor: ', validate)
            console.log('no tiene parametros')
            break;
    }
}//else{console.log('parámetros incorrectos')}
if (argumento1 === '--stats' && !argumento2) {
    console.log('argumento stats: ', argumento1)
}
if (argumento1 === '--stats' && argumento2 === '--validate' || argumento1 === '--validate' && argumento2 === '--stats') {
    console.log('stats - validate: ', argumento1, argumento2)
}
}else{
   console.log('parametros incorrectos')
}

/*parametros:
--validate:true
--validate:false
--stats
--stats --validate = --validate --stats
*/