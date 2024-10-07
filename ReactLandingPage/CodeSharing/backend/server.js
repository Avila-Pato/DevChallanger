const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Configurar el servidor
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',  // Permitir solicitudes desde cualquier origen
}));


mongoose.connect('mongodb://localhost:27017/note-code', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir el esquema de la base de datos
const snippetSchema = new mongoose.Schema({
  uniqueId: String,
  code: String,
});

const Snippet = mongoose.model('Snippet', snippetSchema);

// Ruta para guardar el código compartido
app.post('/api/share', async (req, res) => {
  const { code } = req.body;
  const uniqueId = uuidv4();
  const snippet = new Snippet({ uniqueId, code });
  await snippet.save();
  res.json({ uniqueId });
});

// Ruta para recuperar el código usando uniqueId
app.get('/api/snippet/:uniqueId', async (req, res) => {
  const { uniqueId } = req.params;
  const snippet = await Snippet.findOne({ uniqueId });
  if (snippet) {
    res.json({ code: snippet.code });
  } else {
    res.status(404).json({ error: 'Snippet no encontrado' });
  }
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
