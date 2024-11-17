// server.js
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.log('Error al conectar con MongoDB:', error));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');  // Agregado para cargar las variables de entorno

// Cargar las variables de entorno del archivo .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor Backend funcionando!');
});

// Conectar a la base de datos MongoDB usando la URI en .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.log('Error al conectar con MongoDB:', error));

// Puerto donde el servidor escuchará
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
