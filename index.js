const mongoose = require('mongoose');
const express = require('express');
const routes = require("./rutas/rutasUsuario");
const routesCamiseta = require("./rutas/rutasCamiseta");
const app = express();
const path = require('path');
const verificarToken = require("./seguridad/auth");

const mongoURI = "mongodb+srv://2021073:Xiao2008@cluster0.1nx3vt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoURI, options)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Middleware JSON (debe ir antes que las rutas)
app.use(express.json());

// Servir archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"))
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registro.html"))
});

app.get("/camiseta", verificarToken, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "camiseta.html"))
});

// Rutas API (una sola vez, después del JSON)
app.use("/api/usuarios", routes);
app.use("/api/camisetas", routesCamiseta);

// Evitar error de favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Ruta raíz -> Redirige a la API
app.get("/", (req, res) => {
  res.redirect("/api/usuarios");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en http://localhost:${PORT}`);
});
