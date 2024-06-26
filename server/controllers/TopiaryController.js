import { v4 as uuid } from 'uuid';
import path from 'path';
import models from '../models/models.js';
import ApiError from '../error/ApiError.js';

const { Product, Topiary_info } = models;

export const TopiaryController = {
  createInfo: async (req, res, next) => {
    const { topiaryId } = req.params;
    const infoData = req.body;

    try {
      const info = await Topiary_info.create({ ...infoData, productId: topiaryId });
      res.json(info);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      let fileName;
      let { name, price_default, price, info } = req.body;
      const { img } = req.files;
      if (img) {
        fileName = uuid() + ".png";
        const staticPath = '../server/static';
        img.mv(path.resolve(staticPath, fileName));
      } else {
        console.error('Файл изображения не был загружен');
      }
      const topiary = await Product.create({ name, price_default, price, img: fileName });

      if (info) {
        info = JSON.parse(info);
        const topiaryId = topiary.id;
        await Promise.all(info.map(async info_topy => {
          try {
            await Topiary_info.create({
              manufacturer: info_topy.manufacturer,
              material: info_topy.material,
              size: info_topy.size,
              weight: info_topy.weight,
              category: info_topy.category,
              productId: topiaryId
            });
          } catch (error) {
            console.error("Error creating Topiary_info:", error);
          }
        }));
      }

      return res.json(topiary);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const { name, price_default, price, info } = req.body;

    try {
      const updatedTopiary = await Product.update(
        { name, price_default, price },
        { where: { id } }
      );

      if (!updatedTopiary) {
        throw new Error('Товар не найден');
      }

      if (info) {
        const topiaryInfo = JSON.parse(info);
        await Topiary_info.destroy({ where: { productId: id } });
        await Topiary_info.bulkCreate(
          topiaryInfo.map(info_topy => ({ ...info_topy, productId: id }))
        );
      }

      return res.json({ message: 'Товар успешно обновлен' });
    } catch (error) {
      next(ApiError.internalServerError(error.message));
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        throw new Error('Товар не найден');
      }
      const productId = product.id;

      await Topiary_info.destroy({ where: { productId } });

      await Product.destroy({ where: { id } });

      return res.json({ message: 'Товар успешно удален' });
    } catch (error) {
      next(ApiError.internalServerError(error.message));
    }
  },

  getAll: async (req, res, next) => {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 24;
    let offset = page * limit - limit;
    let topiaries;
    try {
      topiaries = await Product.findAndCountAll({ limit, offset });
      return res.json(topiaries);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  },

  getLatestProducts: async (req, res, next) => {
    try {
      const latestProducts = await Product.findAll({
        order: [['createdAt', 'DESC']],
        limit: 5 
      });
  
      if (!latestProducts || latestProducts.length === 0) {
        throw new Error('Последние товары не найдены');
      }
  
      return res.json(latestProducts);
    } catch (error) {
      next(ApiError.internalServerError(error.message));
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