const express = require('express'),
    router = express.Router()
    vendaCtrl = require('../controllers/venda');

router.get('/vendas', vendaCtrl.getVendas);
router.get('/vendas/nova', vendaCtrl.getNovaVenda);

module.exports = router;