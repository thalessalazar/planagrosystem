const express = require('express'),
    router = express.Router()
    propiedadeCtrl = require('../controllers/propiedade');

router.get('/propiedades', propiedadeCtrl.getPropiedades);
router.get('/propiedades/nova', propiedadeCtrl.novaPropiedade);
router.get('/propiedades/editar', propiedadeCtrl.editarPropiedade);
router.get('/propiedades/informacoes', propiedadeCtrl.informacoesPropiedade);

module.exports = router;