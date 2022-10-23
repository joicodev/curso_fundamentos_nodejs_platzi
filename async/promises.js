function saluda(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla......");
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

function falla() {
  return new Promise((resolve, reject) => {
    reject("Lanzando error al propósito!");
  });
}

console.log("Iniciando el proceso");
saluda("Roimer").then(hablar).then(adios).then((nombre) => {
  console.log("Terminado el proceso");
}).then(falla).catch((err) => {
  console.error("\n\nHa habido un error");
  console.error(err);
});