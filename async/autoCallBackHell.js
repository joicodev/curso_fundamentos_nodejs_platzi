function inicio(callback){
  setTimeout(function(){
      console.log("1.-Abrir la puerta del auto")
      callback();
  },1000);

}


function entrar(callback){
  setTimeout(() => {
      console.log("2.-Entrando al auto");
      callback()
  }, 1000);
}

function cerrar(callback){
  setTimeout(() => {
      console.log("3.-Cerrar la puerta del auto");
      callback();
  }, 1000);
}

function encender(callback){
  setTimeout(() => {
      console.log("4.-Encender auto");
      callback();
  }, 1000);
}

function cinturon(callback){
  setTimeout(() => {
      console.log("5.-Ponerse cinturon de seguridad");
      callback();
  }, 1000);
}

function avanzar(callback){
  setTimeout(() => {
      console.log("6.-Poner en marcha el auto.....");
      callback();
  }, 1000);
}

function finalizado(){
  setTimeout(() => {
      console.log("7.-Proceso terminado con exito; usted sabra lo que hará con el auto que la fuerza lo acompañe :) ")
  }, 1000);
}

inicio(function(){
  entrar(function(){
      cerrar(function(){
          encender(function(){
              cinturon(function(){
                  avanzar(function(){
                      finalizado()
                  })
              })
          })
      })
  })
})
