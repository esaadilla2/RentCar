let modelMobil = require("../models/index").mobil

const {request, response} = require("express");

exports.getData = async (request, response) => {
    let dataMobil = await modelMobil.findAll()
    return response.json(dataMobil)
}

exports.addData = (request, response) => {
    
}

exports.updateData = (request,response) => {

}

exports.deleteData = (request, response) => {

}