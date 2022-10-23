const { exec, spawn } = require("child_process");

/*exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(error);
    return false;
  }

  console.log(stdout);
});

exec('node globals.js', (err, stdout, stderr) => {
  if (err) {
    console.error(error);
    return false;
  }

  console.log(stdout);
});*/

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', (data) => {
  console.log("data: ", data.toString());
  console.log("Está muerto?? ", proceso.killed);
});

proceso.on("exit", () => {
  console.log("El proceso terminó");
});