const express = require('express');
const app = express();
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const Cat = require('./routers/categorias');

//Model de categoria_
require('./models/Category');
const Category = mongoose.model('categorias');

//Configuração do session_
app.use(session({
    secret: '1234node',
    resave:true,
    saveUninitialized:true
}));

//Configuração do connect-flash
app.use(flash());

app.use((req,res,next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

//Configurando o Template Engine do Handlebars_
app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Configurando o Body-Parser_
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Configurando o Mongoose_
mongoose.connect('mongodb://localhost/categorys')
.then(() => console.log('Conexão com o banco de dados bem sucedida!'))
.catch(err => console.log('Erro ao se conectar com o banco de dados: '+err));

//Configurando os arquivos estáticos_
app.use(express.static(path.join(__dirname + '/public')));

//Configurando as Rotas_
app.get('/',(req,res) => {
    Category.find().lean().sort({date: 'desc'}).then(categorias => {
        res.render('home',{categorias:categorias});
    }).catch(err => {
        req.flash("error_msg","error ao exibir categorias: "+err);
        res.redirect('/');
    });
});

app.use('/categoria',Cat);

//Configurando o servidor express_
const PORT = 8081;
app.listen(PORT,(console.log('Servidor rodando na url: http://localhost/8081/')));