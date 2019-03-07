exports.editarPropiedade = (req, res, next) => {
    res.render('propiedade/editar-propiedade', {
        pageTitle: 'Editar Propiedade',
        path: '/propiedades'
    })
}

exports.novaPropiedade = (req, res, next) => {
    res.render('propiedade/nova-propiedade', {
        pageTitle: 'Nova Propiedade',
        path: '/propiedades'
    })
}

exports.getPropiedades = (req, res, next) => {
    res.render('propiedade/propiedades', {
        pageTitle: 'Banco de Propiedades',
        path: '/propiedades'
    })
}

exports.informacoesPropiedade = (req, res, next) => {
    res.render('propiedade/informacoes-propiedade', {
        pageTitle: 'Informações Propiedade',
        path: '/propiedades'
    })
}