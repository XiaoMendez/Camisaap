const { Schema, model } = require('mongoose');

const CamisetaSchema = new Schema({
  creador: { type: String, required: true },
  torsoColor: { type: String, default: "#ffffff" },
  mangaIzqColor: { type: String, default: "#ffffff" },
  mangaDerColor: { type: String, default: "#ffffff" },
  cuelloColor: { type: String, default: "#ffffff" },
  fechaCreacion: { type: Date, default: Date.now },
  votos: { type: [String], default: [] },
  calificacion: { type: Number, default: 0 }
});

module.exports = model("Camiseta", CamisetaSchema);
