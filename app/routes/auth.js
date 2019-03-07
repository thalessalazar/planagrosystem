const express = require('express'),
    router = express.Router()
    authCtrl = require('../controllers/auth');

router.get('/', authCtrl.getLogin);

module.exports = router;