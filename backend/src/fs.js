import fs from "fs/promises"

const archivoNuevo = await fs.writeFile("archivito.txt", "Hola pepito", {encoding: "utf-8"});

const agregandoMasContenido = await fs.appendFile("archivito.txt", "lalalalala", {encoding: "utf-8"})

const contenidoLiteral = await fs.readFile("archivito.txt", {encoding: "utf-8"})

console.log(contenidoLiteral);

const deleteArchivo = await fs.unlink("archivito.txt")

