// const myfunction = require('./md-links.js');
const { mdLinks } = require('./md-links.js');
// mdLinks('C:/Users/spsa/Desktop/Laboratoria/Projects/DEV003-MD-LINKS/').then((result)=>{console.log(result)})
mdLinks('markdown.md','validateTrue').then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })
    // setTimeout(()=>{
    //     resolve(
    
    
    //     )
    //     })
// const rptaSuma = myfunction.sumar(3,5);
//  myfunction.saludar;
//  console.log(myfunction.mensaje);
//  console.log('la suma es: ',rptaSuma);


// const os = require('os'); //manejo de datos del sistema

// let cpu= os.cpus();
// let sistema = os.platform();
// let usuario= os.hostname();
// let cpuString =JSON.stringify(cpu);
// console.log(cpu);
// console.log(sistema);
// console.log(usuario);
// const fs = require('fs'); //manejo de archivos

// fs.appendFile('crear_archivo_prueba.txt','cotenido del archivo',function(error){
//   if (error){
//     console.log('Erro al crear archivo');
//   }
// })
// fs.appendFile('datos_cpu.txt','recibe un objeto, hay que convertirlo a string: '+ JSON.stringify(cpu),function(error){
//   if (error){
//     console.log('Erro al crear archivo');
//   }
// })
// concatenando con string templates``
// fs.appendFile('stringTemplate.txt',`usando string tmeplates: ${cpuString} `,function(error){
//   if (error){
//     console.log('Erro al crear archivo');
//   }
// })
////***LEER ARCHIVO****/
// ('archivo a leer','le indicamos un formato legible',())
// ASIINCRONO
// fs.readFile('crear_archivo_prueba.txt','utf-8',(error,data)=>{
//   fs.readFile('README.md','utf-8',(error,data)=>{
//   if (error){
//     console.log(`Error al leer archivo ${error}`);
//   }else{
//     console.log(data)
//   }
// })
//SINCRONO
// fs.readFileSync('crear_archivo_prueba.txt','utf-8',(error,data)=>{
//   if (error){
//     console.log(`Error al leer archivo ${error}`);
//   }else{
//     console.log(data)
//   }
// })
//RENOMBRAR ARCHIVO
// fs.rename('crear_archivo_prueba.txt','archivo_renombrado.txt',(error)=>{
//   if (error) throw error;
//     console.log('Archivo renombrado!');
//   }
// )
// // AGREGAR CONTENIDO AL ARCHIVO
// // se coloca back slash (alt gr + ?) \n para que el nuevo texto aparesca en la isguiente linea
// fs.appendFile('archivo_renombrado.txt','\nNuevo texto',(error)=>{
//   if (error) console.log(`Error: ${error}`);
// })

//ELIMINAR

// fs.unlink('datos_cpu_borrar.txt', (error)=>{
// if (error) console.log(`Error: ${error}`);
// console.log('Elminado!');
// }
// )

// COPIAR UN ARCHIVO
//fs.createReadStream('datos_cpu.txt').pipe(fs.createWriteStream('datos_cpu_borrar.txt'));

//LEER CONTENIDO DE UNA DIRECTORIO (carpetas y archivos)
// fs.readdir('./',(error,files)=>{
//   files.forEach(files=>{console.log(files)});
// }
// )

//OBTENER LA EXTENSION DE UN ARCHIVO

// const path = require('path');

// console.log(path.extname('style.css')); // .css

// console.log(path.extname('image.png')); // .png

// console.log(path.extname('prettier.config.js')); // .js

// MANEJO DE RUTAS
//Para obtener la ruta absoluta del directorio
//console.log(__dirname);
// traae el nombre del archivo
// console.log(__filename);
/*Construcción de rutas
Para construir rutas y unir todos los segmentos empleando*/
// const path = require('path')
// const route = path.join(__dirname,'/foo', 'js', 'foo.js');
// console.log(route);

//LEER CONTENIDO DE UNA DIRECTORIO (carpetas y archivos)
// fs.readdir('./',(error,files)=>{
//   const path = require('path');
//   files.forEach(files=>{
//   //  console.log('file',files);
//  const extFile=path.extname(files);
// console.log('extension:',extFile);
//    if(extFile==='.md'){
//     // console.log('file:',files);
//       fs.readFile(files,'utf-8',(error,data)=>{
//           if (error){
//             console.log(`Error al leer archivo ${error}`);
//           }else{
//             console.log(data)
//           }
//        })
//    }
//   })
// })

