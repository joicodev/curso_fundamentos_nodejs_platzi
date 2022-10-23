console.log("recibe cualquier tipo y lo muestra en el consola.");
console.info("es equivalente a log pero es usado para informar.");
console.error("es equivalente a log pero es usado para errores.");
console.warn("es equivalente a log pero es usado para warning.");
//console.table ---> "muestra una tabla a partir de un objeto."
console.table([{
  a: 1,
  b: "Z"
}, {
  a: 2,
  b: "Otra letra"
}]);

console.group("Conversación:");
console.group("Roimer:");
console.log("Hola como estas?");
console.group("Peraza:");
console.log("Hola bien y tu?");
console.groupEnd(); // Finaliza la agrupación.

console.count("inicia un contador autoincremental.");
console.count("inicia un contador autoincremental.");
console.count("inicia un contador autoincremental.");
console.countReset("inicia un contador autoincremental."); // reinicia el contador a 0.
//console.time: inicia un cronometro en ms.
//console.timeEnd: Finaliza el cronometro.
//console.clear: Limpia la consola.