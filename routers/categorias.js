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
    else if(req.body.slug == '' || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: 'Slug incorreto!'});
    }
    if(erros.length > 0){
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

//Rotas responsável por exibir o formulário de atualização dos dados das categorias_
Cat.get('/updateForm/:id',(req,res) => {
    Category.findOne({_id: req.params.id}).lean().then(category => {
        res.render('categorys/updateCats',{category:category});
    }).catch(err => {
        req.flash("error_msg","Error ao exibir informacoes da categoria!: "+err);
        res.redirect('/');
    });
});

//Rota responsável por salvar as alteracoes dos dados da categoria no banco de dados_
Cat.post('/atualizado',(req,res) => {
    let erros = [];

    if(req.body.name == '' || typeof req.body.name == undefined || req.body.name == null){
        erros.push({texto: 'Nome incorreto!'});
    }
    else if(req.body.slug == '' || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: 'Slug incorreto!'});
    }
    if(erros.length > 0){
        res.render('categorys/updateCats',{erros:erros});
    }
    else{
        Category.findOne({_id: req.body.id}).then(category => {
            category.name = req.body.name
            category.slug = req.body.slug

            category.save().then(() => {
                req.flash("success_msg","Sucesso ao editar categoria!");
                res.redirect('/');
            }).catch(err => {
                req.flash("error_msg","Error ao editar categoria!: "+err);
                res.redirect('/');
            });
        }).catch(err => {
            req.flash("error_msg","Error para editar as informacoes da categoria!: "+err);
            res.redirect('/');
        });
    }
});

//Rota responsável por deletar as categorias do banco de dados_
Cat.get('/deleteconfim/:id',(req,res) => {
    Category.findOne({_id: req.params.id}).lean().then(category => {
        if(category){
            res.render('categorys/DeleteCats',{category:category});
        }
    }).catch(err => {
        req.flash("error_msg","Error ao exibir informacoes da categoria!: "+err);
        res.redirect('/');
    });
});

Cat.get('/deletado/:id',(req,res) => {
    Category.deleteOne({_id: req.params.id}).then(() => {
        req.flash("success_msg","Sucesso ao deletar categoria!");
        res.redirect('/');
    }).catch(err => {
        req.flash("error_msg","Error ao deletar categoria!: "+err);
        res.redirect('/');        
    });
});

//Rota responável por listar as categorias na página de categorias_
Cat.get('/categorias',(req,res) => {
    Category.find().lean().sort({date: 'desc'}).then(categorys => {
        res.render('categorys/categorys',{categorys:categorys,tam:categorys.length});
    }).catch(err => {
        req.flash("error_msg","Error ao deletar categoria!: "+err);
        res.redirect('/');        
    });
});

module.exports = Cat;