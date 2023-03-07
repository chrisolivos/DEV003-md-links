const {searchMdLinks} = require('../md-links.js');



describe('mdLinks', () => {

  // it('should...', () => {
  //   console.log('FIX ME!');

  // it('Debería devolver una promesa', () => {
  //   expect(searchMdLinks()).toBe(typeof Promise)
  // });

  it('Debería rechazar la promesa si no existe el path', () =>{
   return searchMdLinks('/prueba/pathnoexiste.md').catch((error)=>{
    expect(error).toBe('El path no existe');
   })
  })

});
