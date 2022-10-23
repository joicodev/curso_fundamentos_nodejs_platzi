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

function hablar(callBackSpeak) {
  setTimeout(() => {
    console.log("Bla bla bla......");
    callBackSpeak();
  }, 1000);
}

function conversacion(nombre, veces, callBack) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callBack);
    });
  } else {
    adios(nombre, callBack);
  }
}

// ----------------------------------------------------------------

saluda("Roimer", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Terminando proceso...");
  });
});