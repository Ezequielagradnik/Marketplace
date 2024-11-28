'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Sequelize } from 'sequelize';
import config from '../config/config.js';

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // Define the environment
const dbConfig = config[env]; // Get the environment-specific config
const db = {};

// Initialize Sequelize with the configuration
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
  }
);

// Dynamically import all models in the directory
const loadModels = async () => {
  const files = fs.readdirSync(__dirname).filter(
    (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  );

  for (const file of files) {
    const filePath = pathToFileURL(path.join(__dirname, file)); // Convert to file:// URL
    const model = (await import(filePath)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
};

// Configure model associations if they exist
await loadModels();
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // Export Sequelize instance
db.Sequelize = Sequelize; // Export Sequelize class

export default db;
