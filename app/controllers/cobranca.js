exports.getCobrancas = (req, res, next) => {
    res.render('cobrancas/cobrancas', {
        pageTitle: 'Cobranças',
        path: '/cobrancas'
    })
}

exports.getNovaCobranca = (req, res, next) => {
    res.render('cobrancas/nova-cobranca', {
        pageTitle: 'Nova Cobrança',
        path: '/cobrancas'
    })
}