const {Hits} = require('../models/models');
const ApiError = require('../error/ApiError');

class HitsController {
    async create(req, res) {
        const {name} = req.body;
        const hits = await Hits.create({name});
        return res.json(hits);
    }

    async getAll(req, res) {
        const hites = await Hits.findAll();
        return res.json(hites);
    }
}

module.exports = new HitsController();