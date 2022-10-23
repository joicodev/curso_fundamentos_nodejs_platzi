//no se hace, ya que process pertenece los modulos globales, que ya vienen con node
//const process = require('process');
process.on('beforeExit', () => {
  console.log("El proceso va a terminar");
});

process.on('exit', () => {
  console.log('El proceso terminó.');
  setTimeout(() => {
    console.log('este mensaje es invisible');
}, 500);
});

/*process.on('uncaughtException', (err, origen) => {
  console.log("Vaya se nos olvidó capturar un error!");
  console.error(err)
});*/

// para promesas que no se han capturado
process.on('uncaughtRejection', (err, origen) => {
  console.error('se nos olvido captura el error');
  console.error(err);
});

setTimeout(() => {
  console.log('este mensaje es totalmente visible');
}, 500);


/*
⚠️ Atención uncaughtException no esta diseñado para remplazar el manejo de errores que debería de tener tu aplicación y debería ser tu 
últmo recurso para tratar de manejar errores⚠️

Hago este aporte porque tal vez muchos tengan la misma idea y lo vi en los comentarios. uncaughtException es un 
mecanismo crudo para manejar errores. Sobreescribira la manera por default en que Node maneja un error que no tiene ningun 
catch de errores. Tratar de resumir normamlente una uncaught exception puede corromper completamete tu programa. 
Su uso correcto es hacer operaciones sincronas para limpiar recursos antes de apagar el proceso. No resumir el programa.
documentación oficial: https://platzi.com/clases/1759-fundamentos-node/25204-process/%5Burl%5D(https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly)
*/