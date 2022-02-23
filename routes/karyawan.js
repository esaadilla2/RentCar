const express = require(`express`)
const app = express()

app.use(express(json))

let karyawanController = require("../controllers/karyawanController")

app.get("/", karyawanController.getData)
app.post("/", karyawanController.addData)
app.put("/:id_karyawan", karyawanController.updateData)
app.delete("/:id_karyawan", karyawanController.deleteData)

module.exports = app