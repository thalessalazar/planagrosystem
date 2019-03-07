const express = require('express'),
    router = express.Router()
    cobrancaCtrl = require('../controllers/cobranca');

router.get('/cobrancas', cobrancaCtrl.getCobrancas);
router.get('/cobrancas/nova', cobrancaCtrl.getNovaCobranca);

module.exports = router;