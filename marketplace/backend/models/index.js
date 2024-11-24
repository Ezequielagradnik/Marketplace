'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import config from '../config/config.js';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // Define el entorno
const dbConfig = config[env]; // Obtiene la configuración del entorno
const db = {};

// Inicializa Sequelize con la configuración
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions
  }
);

// Lee todos los modelos en la carpeta y los inicializa
fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Configura las asociaciones entre modelos si existen
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // Exporta la instancia de Sequelize
db.Sequelize = Sequelize; // Exporta la clase Sequelize

export default db;
