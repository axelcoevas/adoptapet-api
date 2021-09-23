const mongoose = require('mongoose');
const Solicitud = mongoose.model('Solicitud');

// CRUD

function crearSolicitud(req, res, next) {
  var solicitud = new Solicitud(req.body);
  solicitud.save()
    .then(solicitud => {
      res.status(200).send(solicitud);
    })
    .catch(next);
}

function obtenerSolicitud(req, res, next) {
  if (req.params.id) {
    Solicitud.findById(req.params.id)
      .then(solicitud => {
        res.send(solicitud);
      })
      .catch(next);
  } else {
    Solicitud.find()
      .then(solicitudes => {
        res.send(solicitudes);
      })
      .catch(next);
  }
}

function modificarSolicitud(req, res, next) {
  Solicitud.findById(req.params.id)
    .then(solicitud => {
      if (!solicitud) return res.sendStatus(401);
      let nuevaInfo = req.body;
      solicitud = { ...solicitud, ...nuevaInfo };
      mascota.save();
    })
    .catch(next);
}

function eliminarSolicitud(req, res) {
  Solicitud.findOneAndDelete({ _id: req.params.id }).then(r => {
    res.status(200).send(`Solicitud ${req.params.id} eliminada: ${r}`);
  });
}

function count(req, res, next) {
  var idMascota = req.params.idMascota;
  Mascota.aggregate([
    {
      '$match': {
        'categoria': idMascota
      }
    },
    {
      '$count': 'total'
    }
  ]).then(r => {
    res.status(200).send(r);
  }).catch(next);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
  count
};

