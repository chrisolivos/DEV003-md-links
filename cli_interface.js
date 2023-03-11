const { mdLinks } = require('./md-links.js');
const inquirer = require('inquirer');
const colors = require('colors/safe');


inquirer
  .prompt([
    {
      type:'input',
      name: 'path',
      message: colors.magenta('Ingresa ruta del directorio o del archivo: '),
    },
    {
    type: 'rawlist',
    name: 'options',
    message: 'Seleccione una opcion',
    choices: [
      {
        value:'1',
        name: colors.green(`Validate:True`)
      },
      {
        value:'2',
        name:colors.green(`Validate:False`)
      },
      {
        value:'3',
        name:colors.green(`Stats`)
      },
      {
        value:'4',
        name:colors.green(`Stats  Validate`)
      },
      {
        value:'0',
        name:colors.green(`Salir`)
      }    
  ]
}
  ]
)
 

  .then(answers => {
 //   console.info('Answer:', answers.path);
 //   console.info('opciones:', answers.options);
//  inquirer.prompt(()=> {
//   console.log(respuestas);
// });
    switch (answers.options) {
      case '1':
        mdLinks(answers.path, 'validateTrue').then((result) => {
           console.log(result)
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
        case '2':
          mdLinks(answers.path, 'validateFalse').then((result) => {
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
        case '3':
          mdLinks(answers.path, 'validateTrue').then((result) => {
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
        break;
        case '4':
          mdLinks(answers.path, 'validateTrue').then((result) => {
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
            console.log('Total: ', result.length)
            console.log('Borken: ', broken.length)
        })
            .catch((error) => { console.log(error) })
        break;
      case '0':
        process.off
        break;
    }
  });

  // const options=[{
  //   type: 'checkbox',
  //   name: 'options',
  //   message: 'Seleccione una opcion',
  //   choices: [
  //     {
  //       value:'1',
  //       name:`${'1.'}Validate:True`
  //     },
  //     {
  //       value:'2',
  //       name:`${'2.'}Validate:False`
  //     },
  //     {
  //       value:'3',
  //       name:`${'3.'}Stats`
  //     },
  //     {
  //       value:'4',
  //       name:`${'4.'}Stats  Validate`
  //     }
  //   ],
  // }]

  // const inquirerMenu = async ()=>{
  //   console.clear();
  //   console.log('===================='.green)
  //   console.log('Seleccione una opción'.magenta)
  //   console.log('===================='.green)
  //   const {options} = await inquirer.prompt(preguntas)
  //   return options;

  // }


// const pausa= async()=>{
//   const question = [
//   {
//     type: 'input',
//     name: 'enter',
//     message: `Presione ${'enter'.green} para continuar`
//   }
// ]
// console.log('\n');
// await inquirer.prompt(question)
// }

  // module.exports={
  //   inquirerMenu,
  //   pausa
  // }