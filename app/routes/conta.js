const express = require('express'),
    router = express.Router()
    contaCtrl = require('../controllers/conta');

router.get('/agenda', contaCtrl.getAgenda);
router.get('/minha-conta', contaCtrl.getMinhaConta);

module.exports = router;