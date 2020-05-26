const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const passport = require('passport');


/* GET users listing. */
router.get('/login',userController.login);
router.post('/login',passport.authenticate('local'),userController.loginpost)
router.post('/register',userController.registerpost)
router.get('/logout',userController.logout)

module.exports = router;
