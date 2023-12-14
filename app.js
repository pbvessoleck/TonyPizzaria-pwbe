/************************************************************
 * Objetivo: Desenvolver uma API para o site Tony Pizzaria
 * Data: 13/12/2023
 * Autor: Paloma Vessoleck
 * Versão 1.0
 ************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) =>{
    response.header('Acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')
    app.use(cors())
    next()
})

app.get('./produto/categoria', cors(), async function(request, response, next){
    let categoria = request.query.categoria
    
    let tonyPizzaria = require('./modulo/tonyPizzaria.js');
    let produtosCategoria = tonyPizzaria.getProdutosCategoria(categoria)

    if(produtosCategoria){
        response.json(produtosCategoria)
        response.status(200)

    }else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
    }
})

app.get('/melhores/produtos',cors(),async function(request,response,next){
    let produtos = request.query.produtos

    let tonyPizzaria =require('./modulo/tonyPizzaria.js')
    let melhoresProdutos = tonyPizzaria.getMelhoresProdutos(produtos)
    if(melhoresProdutos){
        response.json(melhoresProdutos)
        response.status(200)
    }
    else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
        }
})

app.get('/dados/clientes', cors(), async function(request,response,next){
    let clientes = request.query.clientes
    
    let tonyPizzaria = require ('./modulo/tonyPizzaria.js');
    let dadosClientes = tonyPizzaria.getDadosClientes();

    if(dadosClientes){
        response.json(dadosClientes);
        response.status(200);
    }else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
    }
    
})


app.listen('8080', function(){
    console.log('API funcionando!!')
})