const uuid = require('uuid');
const path = require('path');
const { Topiary, Topiary_info } = require('../models/models');
const ApiError = require('../error/ApiError');

class TopiaryController {
    async create(req, res, next) {
        try {
            const { name, price, hitId, categoryId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".png";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            if(info) {
                info = JSON.parse(info);
                info.forEach(info_topy => Topiary_info.create({
                    title: info_topy.title, 
                    description: info_topy.description,
                    topiaryId: topiary.id
                }))
            }

            const topiary = await Topiary.create({ name, price, hitId, categoryId, img: fileName });
            return res.json(topiary);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let { hitId, categoryId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 8;
        let offset = page * limit - limit;
        let topiariyes;
        if(!hitId && !categoryId) {
            topiariyes = await Topiary.findAndCountAll({limit, offset});
        }

        if(hitId && !categoryId) {
            topiariyes = await Topiary.findAndCountAll({where: {hitId}, limit, offset});
        }

        if(!hitId && categoryId) {
            topiariyes = await Topiary.findAndCountAll({where: {categoryId}, limit, offset});
        }

        if(hitId && categoryId) {
            topiariyes = await Topiary.findAndCountAll({where: {hitId, categoryId}, limit, offset});
        }
        return res.json(topiariyes);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const topiary = await Topiary.findOne({
            where: {id},
            include: [{model: Topiary_info, as: 'info'}]
        })
        return res.json(topiary);
    }
}

module.exports = new TopiaryController();