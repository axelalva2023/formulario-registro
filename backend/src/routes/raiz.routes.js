import { Router } from "express";

const router = Router();

router.get("/", async(req, res) => {
    try{
        res.status(200).send("Hola desde la raiz");
    }catch(error){
        res.status(400).send("Error", error)
    }
})

router.post("/", async(req, res) => {
    const cuerpo = req.body
    console.log(cuerpo)
})

export default router;