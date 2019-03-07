const express = require('express'),
    router = express.Router()
    clienteCtrl = require('../controllers/cliente');

router.get('/clientes', clienteCtrl.getClientes);
router.get('/clientes/novo', clienteCtrl.novoCliente);
router.get('/clientes/editar', clienteCtrl.editarCliente);
router.get('/clientes/informacoes', clienteCtrl.informacoesCliente);

module.exports = router;