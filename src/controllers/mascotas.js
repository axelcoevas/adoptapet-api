const mongoose = require('mongoose');
const Mascota = mongoose.model('Mascota');

// CRUD

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body);
  mascota.save()
    .then(mascota => {
      res.status(200).send(mascota);
    })
    .catch(next);
}

function obtenerMascota(req, res, next) {
  if (req.params.id) {
    Mascota.findById(req.params.id)
      .then(mascota => {
        res.send(mascota);
      })
      .catch(next);
  } else {
    Mascota.find()
      .then(mascotas => {
        res.send(mascotas);
      })
      .catch(next);
  }
}

function modificarMascota(req, res, next) {
  Mascota.findById(req.params.id)
    .then(mascota => {
      if (!masctota) return res.sendStatus(401);
      let nuevaInfo = req.body;
      mascota = { ...mascota, ...nuevaInfo };
      mascota.save();
    })
    .then(updated => { res.status(200).json(updated.publicData()); })
    .catch(next);
}

function eliminarMascota(req, res) {
  Mascota.findOneAndDelete({ _id: req.params.id }).then(r => {
    res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });
}

function count(req, res, next) {
  var categoria = req.params.cat;
  Mascota.aggregate([
    {
      '$match': {
        'categoria': categoria
      }
    }, {
      '$count': 'total'
    }
  ]).then(r => {
    res.status(200).send(r);
  }).catch(next);
}

module.exports = {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  count
};















