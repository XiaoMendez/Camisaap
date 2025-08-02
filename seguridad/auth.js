// Middleware para verificar JWT
const jwt = require('jsonwebtoken');
const SECRET = 'SECRETO_SUPER_SEGUR0'; // Idealmente ponlo en una variable de entorno

function verificarToken(req, res, next) {
  const token =
    req.query.token ||
    (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);

  if (!token) {
    return res.status(403).json({ error: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET); // Verifica y decodifica el token
    req.usuarioId = decoded.id;               // Guardamos el id en la request
    next();                                   // Token válido, continuar
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
}

module.exports = verificarToken;