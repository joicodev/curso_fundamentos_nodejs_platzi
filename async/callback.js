function saluda(nombre, callBack) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    callBack(nombre);
  }, 1000);
}

function adios(nombre, callBack) {
  setTimeout(() => {
    console.log("Adiós " + nombre);
    callBack();
  }, 1000);
}

saluda("Roimer", function (nameVar) {
  adios(nameVar, function () {
    console.log("Terminando proceso...");
  });
});

