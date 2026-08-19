import { Router } from "express";
import { productoModel } from "../model/productoModel.js"
const router = Router();

router.get("/", async(req, res) => {
    try{
        res.status(200).json(await productoModel.find({}))
    }catch(error){

    }
})

router.get("/:id", async(req, res) => {
    
})

router.post("/", async(req, res) => {
    const cuerpo = req.body
    try{
        res.status(200).json(await productoModel.insertOne(cuerpo))
    }catch(error){
        console.log("ERROR AL GUARDAR:", error);

        res.status(500).json({
            mensaje: "Error al guardar el producto",
            error: error.message
        });

    }
})

router.put("/:id", async(req, res) => {
    
})

router.delete("/:id", async(req, res) => {
    
})


export default router;