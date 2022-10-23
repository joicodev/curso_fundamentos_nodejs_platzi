const { createServer } = require('http');
const port = 3000;
function router(req, res) {
  console.log("Nueva petición!");
  console.log(req.url);
  switch (req.url) {
    case '/':
      res.end("<h1>Hola, bienvenido!</h1>");
      break;
    case '/hola':
      res.end("Hola, ya se usar HTTP con NodeJS");
      break;
    default:
      res.writeHead(404, { 'Content-type': 'text/html; charset=utf-8'});
      res.write("Error 404: No se lo que quieres!");
      res.end();
      break;
  }
}

const server = createServer(router);
server.listen(port, (err) => {
  if (err) {
    console.info("Could not stablish a connection to the server"); 
    console.error(err.message);
  } else {
    console.info(`Server started on port ${port}`);
  }
});