import express from "express";
import ProcessosModel from "../models/processos.model.js";

const processosRoute = express.Router();

processosRoute.get('/all-process', async (req, res) => {
    try {
        const processos = await ProcessosModel.find();
        return res.status(200).json(processos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo não correu como o esperado!"});
    }
});

processosRoute.get('/one-process/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const processoUnico = await ProcessosModel.findById(id);

        if(!processoUnico){
            return res.status(404).json({msg: "Processo não encontrado"})
        };

        return res.status(200).json(processoUnico);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo não ocorreu como o esperado"})
    }
});

processosRoute.post('/create-process', async (req, res) =>{
    try {
        const newProcessos = await ProcessosModel.create(req.body);
        return res.status(201).json(newProcessos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo não correu como o esperado!"});
    }
});

processosRoute.delete("/delete/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const deleteProcessos = await ProcessosModel.findByIdAndDelete(id);
        return res.status(200).json(deleteProcessos);

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo não ocorreu como o esperado!"});
    }
});

processosRoute.put("/edit/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const updateProcesso = await ProcessosModel.findByIdAndUpdate(
            id,
            {...req.body},
            {new: true, runValidators: true}
        );
        return res.status(201).json(updateProcesso)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Algo não ocorreu como o esperado!"})
    }
})


export default processosRoute;