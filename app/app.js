const bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    express = require('express'),
    app = express(),
    path = require('path'),
    flash = require('connect-flash');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(bodyParser.urlencoded({
    extended: false
}));

//routing files
const propiedadesRoutes = require('./routes/propiedade'),
    clienteRoutes = require('./routes/cliente'),
    contaRoutes = require('./routes/conta'),
    authRoutes = require('./routes/auth'),
    cobrancaRoutes = require('./routes/cobranca'),
    vendaRoutes = require('./routes/venda'),
    remainderRoutes = require('./routes/remainder');

app.use(express.static(path.join(__dirname, 'public')));
app.use(authRoutes);
app.use(propiedadesRoutes);
app.use(clienteRoutes);
app.use(vendaRoutes);
app.use(cobrancaRoutes);
app.use(contaRoutes);
app.use(remainderRoutes);

app.listen(3000);