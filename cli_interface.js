const inquirer = require('inquirer');

inquirer
  .prompt([
    'Write the path',
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log('ruta');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });