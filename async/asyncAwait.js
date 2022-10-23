async function saluda(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

 async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla......");
      resolve();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await saluda("Roimer Peraza");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  adios(nombre);
}

main();