const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const usersController = require('../controllers/users.controller');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup').post(validateBody(schemas.authSchema), usersController.signUp);

router.route('/signin').post(validateBody(schemas.authSchema), passportSignIn, usersController.signIn);

router.route('/secret').get(passportJWT, usersController.secret);

router.route('/userdata').get(passportJWT, usersController.getUserData);

module.exports = router;

