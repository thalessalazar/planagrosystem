const express = require('express'),
    router = express.Router()
    remainderCtrl = require('../controllers/remainder');

router.get('/home', remainderCtrl.getHome);

module.exports = router;