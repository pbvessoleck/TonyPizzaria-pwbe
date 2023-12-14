const { cardapio, listaDeClientes } = require('./info');
var tonyPizzaria = require('./tonyPizzaria')

const getProdutosCategoria = function(categoria) {
    let jsonCategoria = {}
    let arrayProdutos = []
    let filtro = categoria
    let status = false

    cardapio.produtos.forEach(function(produto) {
        if (filtro == produto.categoria) {
            let jsonProdutos = {
            nome: produto.nome
            }
            
            arrayProdutos.push(jsonProdutos)
        }
    })
    if (arrayProdutos.length > 0) {
        jsonCategoria.produtos = arrayProdutos
        status = true
    }
    if(status)
    return jsonCategoria
    else 
    return false
};

const getMelhoresProdutos=function(){
    let arrayProdutos=[]
    let status=false

    for(let cont = 0; cont < cardapio.produtos.length; cont++){
        if(cardapio.produtos[cont].estrelas>=4)
            arrayProdutos.push(cardapio.produtos[cont].nome)
        status=true
    }

    if(status=true)
        return arrayProdutos
    else
        return false
}
const getDadosClientes = function() {
    let clientes = listaDeClientes.clientes;
    let arrayClientes = [];
    let status = false

    clientes.forEach((cliente) => { 

        let jsonClientes = {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            telefone: cliente.telefone 
        };

        arrayClientes.push(jsonClientes);
        status = true
    });
 
    if(status==true)
    return arrayClientes
    else
    return false
};


// console.log(getProdutosCategoria())
// console.log(getMelhoresProdutos())
// console.log(getDadosClientes())

module.exports={getDadosClientes,getProdutosCategoria,getMelhoresProdutos};

