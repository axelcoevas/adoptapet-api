// Express
const express = require('express');
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

//Mongoose
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI);

mongoose.set("debug", true);

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');

require('./config/passport');

app.use('/v1', require('./routes'));

// Iniciando el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

