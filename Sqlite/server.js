const express = require("express");
const app = express();
const db = require("../db/cars")

app.use(express.json());

app.listen(3006, () => console.log("http://localhost:3006"));

app.post("/cars", async (req, res) => {
    console.log(req.body)
    const results = await db.createCar(req.body); // por algum motivo a request não envia dado nenhum aqui!
    res.status(201).json({id:results[0]})
})
app.get("/cars", async (req, res) => {
    const cars = await db.getAllCars();
    res.status(200).json({cars})
})

app.patch("/cars/:id", async (req, res) => {
    const id = await db.updateCar(req.params.id, req.body);
    res.status(200).json({id})
})

app.delete("/cars/:id", async (req, res) => {
    const id = await db.deleteCar(req.params.id);
    res.status(200).json({sucess: true})
})

app.get("/", (req, res) => {
    res.status(200).json({ sucess: true });
});
