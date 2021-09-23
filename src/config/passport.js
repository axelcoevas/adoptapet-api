const passport = require('passport');
const LocalStrategy = require('passport').Strategy;
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Usuario.findOne({ email: email })
    .then(function (user) {
      if (!user || !user.validarPassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
      }
      return done(null, user);
    })
    .catch(next);
}));