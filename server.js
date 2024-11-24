import express from 'express'; // Reemplaza require con import
import db from './models/index.js'; // Asegúrate de usar la extensión .js si es un archivo ES Module
import userRoutes from './routes/users.js'; // Agrega la extensión .js
import productRoutes from './routes/products.js'; // Agrega la extensión .js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Verifica la conexión a la base de datos y arranca el servidor
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
  });
