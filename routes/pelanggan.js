const express = require(`express`)
const app = express()

app.use(express(json))

let pelangganController = require("../controllers/pelangganController")

app.get("/", pelangganController.getData)
app.post("/", pelangganController.addData)
app.put("/:id_pelanggan", pelangganController.updateData)
app.delete("/:id_pelanggan", pelangganController.deleteData)

module.exports = app