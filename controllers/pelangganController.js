let modelPelanggan = require("../models/index").pelanggan

const {request, response} = require("express");

exports.getData = async (request, response) => {
    let dataPelanggan = await modelPelanggan.findAll()
    return response.json(dataPelanggan)
}

exports.addData = (request, response) => {
    let newPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak: request.body.kontak
    }

    modelPelanggan.create(newPelanggan)
    .then(result => {
        return response.json({
            message: `Data pelanggan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.updateData = (request, response) => {
    let id = request.params.id_pelanggan
    let dataPelanggan = {
        nama_pelanggan: request.body.nama_pelanggan,
        alamat_pelanggan: request.body.alamat_pelanggan,
        kontak: request.body.kontak
    }

    modelPelanggan.update(dataPelanggan, {where: {id_pelanggan: id}})
    .then(result => {
        return response.json({
            message: `Data pelanggan berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })

}

exports.deleteData = (request, response) => {
    let id = request.params.id_pelanggan
    
    modelPelanggan.destroy({where: {id_pelanggan: id}})
    .then(result => {
        return response.json({
            message: `Data pelanggan berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}