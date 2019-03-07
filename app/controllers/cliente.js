exports.getClientes = (req, res, next) => {
    res.render('cliente/clientes', {
        pageTitle: 'Banco de Clientes',
        path: '/clientes'
    })
}

exports.novoCliente = (req, res, next) => {
    res.render('cliente/novo-cliente', {
        pageTitle: 'Novo cliente',
        path: '/clientes'
    })
}

exports.editarCliente = (req, res, next) => {
    res.render('cliente/editar-cliente', {
        pageTitle: 'Editando Cliente',
        path: '/clientes'
    })
}

exports.informacoesCliente = (req, res, next) => {
    res.render('cliente/informacoes-cliente', {
        pageTitle: 'Informações de Cliente',
        path: '/clientes'
    })
}