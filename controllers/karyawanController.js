let modelKaryawan = require("../models/index").karyawan

const {request, response} = require("express");
const md5 = require("md5")

exports.getData = async (request, response) => {
    let dataKaryawan = await modelKaryawan.findAll()
    return response.json(dataKaryawan)
}

exports.addData = (request, response) => {
    let newKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelKaryawan.create(newKaryawan)
    .then(result => {
        return response.json({
            message: `Data karyawan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updateData = (request, response) => {
    let id = request.params.id_karyawan
    let dataKaryawan = {
        nama_karyawan: request.body.nama_karyawan,
        alamat_karyawan: request.body.alamat_karyawan,
        username: request.body.username,
        password: md5(request.body.password)
    }

    modelKaryawan.update(dataKaryawan, {where: {id_karyawan: id}})
    .then(result => {
        return response.json({
            message: `Data karyawan berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteData = (request, response) => {
    let id = request.params.id_karyawan

    modelKaryawan.destroy({where : {id_karyawan: id}})
    .then(result => {
        return response.json({
            message: `Data karyawan berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}