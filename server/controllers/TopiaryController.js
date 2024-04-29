import { v4 as uuid } from 'uuid';
import path from 'path';
import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const { Product } = models;
const { Topiary_info } = models;

export const TopiaryController = {
  create: async (req, res, next) => {
    try {
      const { name, price_default, price, info } = req.body;
      const { img } = req.files;
      let fileName = uuid() + ".png";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const topiary = await Product.create({ name, price_default, price, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach(info_topy =>
          Topiary_info.create({
            title: info_topy.title,
            manufacturer: info_topy.manufacturer,
            material: info_topy.material,
            size: info_topy.size,
            weight: info_topy.weight,
            category: info_topy.category,
            action: info_topy.action,
            productId: topiary.id
          })
        );
      }

      return res.json(topiary);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  },

  getAll: async (req, res, next) => {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 8;
    let offset = page * limit - limit;
    let topiaries;
    try {
      topiaries = await Product.findAndCountAll({ limit, offset });
      return res.json(topiaries);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  },

  getOne: async (req, res, next) => {
    const { id } = req.params;
    try {
      const topiary = await Product.findOne({
        where: { id },
        include: [{ model: Topiary_info, as: 'info' }]
      });
      return res.json(topiary);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
};

export default TopiaryController;