import { User } from '../models';

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = await User.create({ name, email, password, role });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
