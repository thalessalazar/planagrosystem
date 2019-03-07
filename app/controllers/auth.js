exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Entrar',
        path: '/login'
    })
}