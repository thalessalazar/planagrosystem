exports.getHome = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Início',
        path: '/home'
    })
}