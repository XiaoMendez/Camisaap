const Camiseta = require("../modelos/CamisetaEsquema");

// Obtener todas las camisetas
exports.obtenerCamisetas = async (req, res) => {
  try {
    const camisetas = await Camiseta.find();
    res.json(camisetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener camisetas' });
  }
};

// Obtener una camiseta por ID
exports.obtenerCamisetaxID = async (req, res) => {
  try {
    const camiseta = await Camiseta.findById(req.params.id);
    if (!camiseta) {
      return res.status(404).json({ error: 'Camiseta no encontrada' });
    }
    res.json(camiseta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener camiseta' });
  }
};

// Crear una nueva camiseta
exports.crearCamiseta = async (req, res) => {
  try {
    const { torso, mangaIzquierda, mangaDerecha, cuelloizq, cuelloder } = req.body;

    const nuevaCamiseta = new Camiseta({
      creador: req.usuarioId || "Anónimo",
      torsoColor: torso,
      mangaIzqColor: mangaIzquierda,
      mangaDerColor: mangaDerecha,
      cuelloColor: `${cuelloizq}-${cuelloder}`
    });

    const guardada = await nuevaCamiseta.save();
    res.status(201).json(guardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear camiseta', detalle: error.message });
  }
};

// Actualizar una camiseta
exports.modificarCamiseta = async (req, res) => {
  try {
    const datos = req.body;
    const camisetaActualizada = await Camiseta.findByIdAndUpdate(req.params.id, datos, { new: true });
    if (!camisetaActualizada) {
      return res.status(404).json({ error: 'Camiseta no encontrada' });
    }
    res.json(camisetaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar camiseta' });
  }
};

// Eliminar una camiseta
exports.eliminarCamiseta = async (req, res) => {
  try {
    const camisetaEliminada = await Camiseta.findByIdAndDelete(req.params.id);
    if (!camisetaEliminada) {
      return res.status(404).json({ error: 'Camiseta no encontrada' });
    }
    res.json({ message: 'Camiseta eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar camiseta' });
  }
};
