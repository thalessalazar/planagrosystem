exports.getAgenda = (req, res, next) => {
    res.render('conta/agenda', {
        pageTitle: 'Minha Agenda',
        path: '/agenda'
    })
}

exports.getMinhaConta = (req, res, next) => {
    res.render('conta/minha-conta', {
        pageTitle: 'Minha Agenda',
        path: '/conta'
    })
}