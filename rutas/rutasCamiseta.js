const express = require("express");
const router = express.Router();
const camisetaController = require("../Controladores/camisetaControlador");

// CRUD de camisetas
router.get("/", camisetaController.obtenerCamisetas);          // Obtener todas
router.get("/:id", camisetaController.obtenerCamisetaxID);     // Obtener una por ID
router.post("/", camisetaController.crearCamiseta);            // Crear
router.put("/:id", camisetaController.modificarCamiseta);      // Actualizar
router.delete("/:id", camisetaController.eliminarCamiseta);    // Eliminar

module.exports = router;
