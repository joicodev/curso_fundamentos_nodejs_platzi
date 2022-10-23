const fs = require('fs').promises;

const readFile = async (route, fileName) => {
  return await fs.readFile(`${route}/${fileName}`, {encoding: 'utf8'});
};

const writeFile = async (route, fileName, content) => {
  return await fs.writeFile(`${route}/${fileName}`, content);
};

const deleteFile = async (route, fileName) => {
  return await fs.unlink(`${route}/${fileName}`);
};

const writeNewDataFile = async (newData) => {
  writeFile(__dirname, "archivo1.txt", `${newData} + NUEVA DATA`).then((data) => {
    console.log(`🔥 File has be writed`);
    deleteBeforeCreated();
  }).catch((err) => {
    console.error(`🥺 Error to writeFile file:\n${err}`);
  });
}

const deleteBeforeCreated = () => {
  setTimeout(() => {
    deleteFile(__dirname, "archivo1.txt").then((data) => {
      console.log(`🔥 File has be deleted`);
    }).catch((err) => {
      console.error(`🥺 Error to delete file:\n${err}`);
    });
  }, 2000);
}

const main = () => {
  readFile(__dirname, "archivo.txt").then((data) => {
    console.log(`🔥Data readed file:\n${data}`);
    writeNewDataFile(data);
  }).catch((err) => {
    console.error(`🥺 Error to read file:\n${err}`);
  });
}

main();