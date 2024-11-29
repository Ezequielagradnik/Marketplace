import { Product } from '../models';
import user from '../models/user';

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => { 
  const {user_id} = req.params
  const { title, description, price, image_url } = req.body;
  try {
    const newProduct = await Product.create({ title, description, price, image_url, user_id });
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
