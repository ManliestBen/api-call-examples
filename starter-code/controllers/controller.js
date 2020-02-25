const axios = require('axios');

module.exports = {
    pokeView,
    nasaView,
    chartView,
}

function pokeView(req, res) {
    res.render('pokeapi');
}

function nasaView(req, res) {
    res.render('nasaapi');
}

function chartView(req, res) {
    res.render('chartapi');
}