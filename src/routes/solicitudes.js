var router = require('express').Router();

var {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
  count
} = require('../controllers/solicitudes');

router.get('/', obtenerSolicitud);
router.get('/:id', obtenerSolicitud);
router.post('/', crearSolicitud);
router.put('/:id', modificarSolicitud);
router.delete('/:id', eliminarSolicitud);
router.delete('count/:idMascota', count);

module.exports = router;
