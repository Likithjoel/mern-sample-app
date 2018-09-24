'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {user} = require('./userEntity');
const userCtrl = require('./userController');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

router.get('/getServerInfo',userCtrl.getServerInfo);
router.get('/writeConfigFile',userCtrl.writeConfigFile);

// router.post('/testTool',userCtrl.testTool);

// router.post('/login',userCtrl.login);
// router.post('/addUser',userCtrl.addUser);
// router.post('/ChangePassword',userCtrl.ChangePassword);
// router.post('/viewUser',userCtrl.viewUser);
// router.post('/userPasswordChange',userCtrl.userPasswordChange);
module.exports = router;
