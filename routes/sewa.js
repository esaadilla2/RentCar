const express = require(`express`)
const app = express()

app.use(express(json))

let sewaController = require("../controllers/sewaController")

app.get("/", sewaController.getData)
app.post("/", sewaController.addData)
app.put("/:id_sewa", sewaController.updateData)
app.delete("/:id_sewa", sewaController.deleteData)

module.exports = app