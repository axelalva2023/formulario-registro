import { Schema, model } from "mongoose";

const productoShema = Schema({
    nombre: String,
    contenido: String,
    edad: Number,
    pose: String
})


export const productoModel = model("urgido", productoShema)