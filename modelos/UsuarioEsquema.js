const { Schema, model } = require('mongoose');

// Definir el esquema de Usuario
const usuarioSchema = new Schema({
  nombre: { type: String, required: true },                // Obligatorio
  email: { type: String, required: true, unique: true },   // Obligatorio y único
  clave: { type: String, required: true },                 // Contraseña
  fechaRegistro: { type: Date, default: Date.now }         // Fecha actual por defecto
});

// Crear el modelo
module.exports = model("Usuario" , usuarioSchema);

const express = require('express');
const app = express();

// Middleware para parsear JSON en las peticiones (body-parser integrado)
app.use(express.json());
