const express = require(`express`)
const app = express()

app.use(express(json))

let mobilController = require("../controllers/mobilController")

app.get("/", mobilController.getData)
app.post("/", mobilController.addData)
app.put("/:id_mobil", mobilController.updateData)
app.delete("/:id_mobil", mobilController.deleteData)

module.exports = app