import express from "express";
import raizRouter from "./routes/raiz.routes.js"
import raizProductos from "./routes/productos.routes.js"
import __dirname from "./utils.js"
import handlebars from "express-handlebars"
import mongoose from "mongoose";
import cors from "cors";

const servidor = express();

servidor.use(cors());

const http = servidor.listen("3000", () => console.log("Corriendo servidor de manera exitosa")); mongoose.connect("mongodb://axelalva:AQY0efUw57tGflSJ@ac-5rdxobo-shard-00-00.bcryxcu.mongodb.net:27017,ac-5rdxobo-shard-00-01.bcryxcu.mongodb.net:27017,ac-5rdxobo-shard-00-02.bcryxcu.mongodb.net:27017/?ssl=true&replicaSet=atlas-1159a3-shard-0&authSource=admin&appName=Backend1", {dbName: "tienda"}).then(() => console.log("Conectado a Mongo"))

servidor.use(express.json());

servidor.use(express.static("C:/Users/Axel23/Desktop/frontend"));

servidor.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layout"
}))
servidor.set("view engine", "handlebars")
servidor.set("views", __dirname + "/views")

servidor.use(express.static(__dirname + "/public"));

servidor.use("/", raizRouter);

servidor.use("/productos", raizProductos)

