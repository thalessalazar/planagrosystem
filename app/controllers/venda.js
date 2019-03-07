exports.getVendas = (req, res, next) => {
    res.render('venda/vendas', {
        pageTitle: 'Cobranças',
        path: '/vendas'
    })
}

exports.getNovaVenda = (req, res, next) => {
    res.render('venda/nova-venda', {
        pageTitle: 'Nova Cobrança',
        path: '/vendas'
    })
}