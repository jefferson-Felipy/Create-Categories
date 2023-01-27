const express = require('express');
const Cat = express.Router();
const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model('categorias')

//Rota responsável por exibir o formulário de categorias_
Cat.get('/Fomulario',(req,res) => res.render('categorys/FormCats'));

//Rota responável por cadastrar as categorias no banco de dados_
Cat.post('/cadastro',(req,res) => {
    let erros = [];

    if(req.body.name == '' || typeof req.body.name == undefined || req.body.name == null){
        erros.push({texto: 'Nome incorreto!'});
    }
    if(req.body.slug == '' || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: 'Slug incorreto!'});
    }
    if(erros.lenght > 0){
        res.render('categorys/FormCats',{erros:erros});
    }
    else{
        const newCategoria = {
            name: req.body.name,
            slug: req.body.slug
        }
    
        new Category(newCategoria).save().then(() => {
            req.flash("success_msg","Sucesso ao salvar categoria");
            res.redirect('/');
        }).catch(err => {
            req.flash("erro_msg","error ao salvar categoria: "+err);
            res.redirect('/');
        });
    }
});

module.exports = Cat;