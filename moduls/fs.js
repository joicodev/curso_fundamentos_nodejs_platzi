const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, content, cb) {
  fs.writeFile(ruta, content, (err) => {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

leer(__dirname + "/archivo.txt", console.log);
escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo!", () => {});
borrar(__dirname + "/archivo1.txt", console.log);