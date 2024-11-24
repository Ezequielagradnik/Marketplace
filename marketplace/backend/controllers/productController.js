import { Product } from '../models';

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, description, price, imageUrl, userId } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price, imageUrl, userId });
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
