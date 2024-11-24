import 'dotenv/config'; // Cargar variables del archivo .env

export default {
  development: {
    username: process.env.DB_USER,       // Usuario de la base de datos
    password: process.env.DB_PASSWORD,   // Contraseña del usuario
    database: process.env.DB_NAME,       // Nombre de la base de datos
    host: process.env.DB_HOST,           // Dirección del host (Neon)
    dialect: "postgres",                 // Tipo de base de datos (PostgreSQL)
    dialectOptions: {
      ssl: {
        require: true,                   // Neon requiere conexiones SSL
        rejectUnauthorized: false        // Permite certificados sin verificar
      }
    }
  },
  test: {
    username: process.env.DB_USER,       // Se puede usar la misma config
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: process.env.DB_USER,       // Configuración para producción
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};

