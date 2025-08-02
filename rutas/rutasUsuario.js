const express = require("express");
const router = express.Router();
const usuarioController = require("../Controladores/usuarioControlador");

router.get("/", usuarioController.obtenerUsuario);          // Obtener todos
router.post("/login", usuarioController.login);             // Login (antes de las rutas dinámicas)
router.post("/", usuarioController.crearUsuario);           // Crear
router.put("/:id", usuarioController.modificarUsuario);     // Actualizar
router.delete("/:id", usuarioController.eliminarUsuario);   // Eliminar
router.get("/:id", usuarioController.obtenerUsuarioxID);    // Obtener uno por ID

module.exports = router;
