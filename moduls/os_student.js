// El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.
const os = require('os');
const SIZE = 1024;

console.log("hostname:", os.hostname());//  Voy a saber el hostname de la máquina
console.log("tmpdir:", os.tmpdir())//-->Me muestra los directorios temporales, temproales una imagen que voy a procesar
console.log("homedir:", os.homedir()) // Me permite saber cual es el directorio raíz
console.log("ARCH:", os.arch()); //----> Me devuelve la arquitecura de mi OS
console.log("platform:", os.platform());//---> Me dice en qué plataforma estoy
console.table(os.cpus()) // ---> podemos acceder a la información de las cpus de mi pc.
console.table(os.networkInterfaces()) // Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber  IPVX
console.table(os.cpus());
console.log("constants:", os.constants);//--->  Me muestran todos los errores de sistema.


//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log("freemem:", os.freemem());// ---> Me dice en bytes la memoria libre que tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log("totalmem:", gb(os.totalmem())); // ---> Me muestra la memoria disponible del pc.

function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
