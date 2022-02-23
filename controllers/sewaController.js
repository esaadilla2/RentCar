let modelSewa = require("../models/index").sewa

const {request, response} = require("express");

exports.getData = async (request, response) => {
    let dataSewa = await modelSewa.findAll()
    return response.json(dataSewa)
}

exports.addData = (request, response) => {
    let newSewa = {
        id_mobil: request.body.id_mobil,
        id_karyawan: request.body.id_karyawan,
        id_pelanggan: request.body.id_pelanggan,
        tgl_sewa: request.body.tgl_sewa,
        tgl_kembali: request.body.tgl_kembali,
        total_bayar: request.body.total_bayar
    }

    modelSewa.create(newSewa)
    .then(result => {
        return response.json({
            message: `Data sewa berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updateData = (request, response) => {
    let id = request.params.id_sewa
    let dataSewa = {
        id_mobil: request.body.id_mobil,
        id_karyawan: request.body.id_karyawan,
        id_pelanggan: request.body.id_pelanggan,
        tgl_sewa: request.body.tgl_sewa,
        tgl_kembali: request.body.tgl_kembali,
        total_bayar: request.body.total_bayar
    }

    modelSewa.update(dataSewa, {where: {id_sewa: id}})
    .then(result => {
        return response.json({
            message: `Data sewa berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteData = (request, response) => {
    let id = request.params.id_sewa

    modelSewa.destroy({where: {id_sewa: id}})
    .then(result => {
        return response.json({
            message: `Data sewa berhasil dihapus`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}