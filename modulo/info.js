var listaDeClientes = {
    clientes: [
    {
        id: 1,
        nome: 'Samantha Breves',
        email: 'samantha@email.com',
        senha: 'cacaulinda10',
        telefone: '(11) 92265-4473',
        endereco: [
                     {
                        logradouro: ' Rua Maria José Amaral Arruda Castanho, Parque Pinheiros',
                        cidade: 'Taboão da Serra - SP',
                        cep: '06767-040'
                     }
                 ]
    },
    {
        id: 2,
        nome: 'Ana Maria',
        email: 'anabreves50@email.com',
        senha: 'aninhadosdoces',
        telefone: '(11) 92265-4473',
        endereco: [
                     {
                         logradouro: 'Praça Vinte e Cinco, Jardim Paulista',
                         cidade: 'Valinhos - SP',
                         cep: '13276-370'
                     }
    
                ]
    },
    {
        id: 3,
        nome: 'Paloma Vessoleck',
        email: 'pahvessoleck@email.com',
        senha: 'vitorgatinho8',
        telefone: '(11) 92265-4473',
        endereco: [
                     {
                         logradouro: ' Rua Maria José Amaral Arruda Castanho, Parque Pinheiros',
                         cidade: 'Taboão da Serra - SP',
                         cep: '06767-040'
                     }
                ]
    },
    {
        id: 4,
        nome: 'Vitor Hugo',
        email: 'vitor@hugo.com',
        senha: 'paloma123',
        telefone: '(11) 97225-4193',
        endereco: [
                     {
                        logradouro: 'Rua Bartholomeu Martins',
                        cidade: 'São João da Boa Vista - SP',
                        cep: '13871-152'
                     }
                 ]
    }
]
}


var categorias = {
    categoria: [
        {
            id: 1, 
            nome: 'Pizza Salgada',
        },
        {
            id: 2,
            nome: 'Pizza Doce'
        },
        {
            id: 3,
            nome: 'Bebidas'
        },
        {
            id: 4,
            nome: 'Acompanhamentos'
        }
    ]
} 

var cardapio = {
    produtos: [
        {
            id: 1,
            nome: 'Pizza Peperoni com Queijo',
            preco: 'R$ 19,65',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 5,
            categoria: categorias.categoria[1],
            comentarios:[
                {
                    id: 1,
                    data: '15/03/2022',
                    cliente: listaDeClientes.clientes[4],
                    estrelas: 4,
                    titulo: 'Pizza muito boa',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 2,
                    data: '25/08/2020',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 5,
                    titulo: 'Uma das melhores pizza!',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                }
            ]
        },
        {
            id: 2,
            nome: 'Pizza Alho e óleo',
            preco: 'R$ 17,50',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 3,
            categoria: categorias.categoria[1],
            comentarios:[
                {
                    id: 1,
                    data: '29/01/2022',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 3,
                    titulo: 'Existem melhores',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                }
            ]
        },
        {
            id: 3,
            nome: 'Pizza Toscana',
            preco: 'R$ 19,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 5,
            categoria: categorias.categoria[1],
            comentarios:[
                {
                    id: 1,
                    data: '15/07/2021',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 4,
                    titulo: 'Catupiry realmente muito bom',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 2,
                    data: '25/02/2020',
                    cliente: listaDeClientes.clientes[1],
                    estrelas: 5,
                    titulo: 'Com certeza vou comprar mais vezes!! Sem erros',
                    comentario: 'Lorem ipsum dolor sit amet',
                }
            ]
        },
        {
            id: 4,
            nome: 'Pizza Nutella com Morango',
            preco: 'R$ 19,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 5,
            categoria: categorias.categoria[2],
            comentarios:[
                {
                    id: 1,
                    data: '10/04/2021',
                    cliente: listaDeClientes.clientes[4],
                    estrelas: 3,
                    titulo: 'O morango estava meio aguada, mas até que estava bem bom',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 2,
                    data: '19/11/2020',
                    cliente: listaDeClientes.clientes[2],
                    estrelas: 5,
                    titulo: 'A melhor combinação!!',
                    comentario: 'Lorem ipsum dolor sit amet',
                }
            ]
        }, 
        {
            id: 5,
            nome: 'Pizza Prestígio',
            preco: 'R$ 19,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 4,
            categoria: categorias.categoria[2],
            comentarios:[
                {
                    id: 1,
                    data: '11/12/2020',
                    cliente: listaDeClientes.clientes[2],
                    estrelas: 5,
                    titulo: 'Comprei para a minha mãe e ela amou',
                    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                }
            ]
        },
        {
            id: 6,
            nome: 'Pizza Paçoca',
            preco: 'R$ 19,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            estrelas: 3,
            categoria: categorias.categoria[2],
            comentarios:''
        },
        {
            id: 7,
            nome: 'Coca-Cola',
            preco: 'R$ 14,90',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[3],
            comentarios:[
                {
                    id: 1,
                    data: '11/03/2021',
                    cliente: listaDeClientes.clientes[4],
                    estrelas: 3,
                    titulo: 'Entrega muito demorada',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        },
        {
            id: 8,
            nome: 'Cerveja Heineken',
            preco: 'R$ 17,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[3],
            comentarios:[
                {
                    id: 1,
                    data: '28/01/2021',
                    cliente: listaDeClientes.clientes[1],
                    estrelas: 5,
                    titulo: 'Geladinha, muito boa',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        },
        {
            id: 9,
            nome: 'Suco de Laranja Natural',
            preco: 'R$ 16,50',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[3],
            comentarios:[
                {
                    id: 1,
                    data: '20/00/2022',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 3,
                    titulo: 'O suco veio um pouco aguado',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        },
        {
            id: 10,
            nome: 'Batata-Frita',
            preco: 'R$ 10,90',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[4],
            comentarios:[
                {
                    id: 1,
                    data: '03/12/2021',
                    cliente: listaDeClientes.clientes[2],
                    estrelas: 5,
                    titulo: 'Muito deliciosa',
                    comentario: 'Lorem ipsum dolor sit amet.',
                },
                {
                    id: 2,
                    data: '17/07/2021',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 5,
                    titulo: 'Poderia ser um pouco menos oleosa',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        },
        {
            id: 11,
            nome: '10 Nuggets',
            preco: 'R$ 20,90',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[4],
            comentarios:[
                {
                    id: 1,
                    data: '03/12/2021',
                    cliente: listaDeClientes.clientes[1],
                    estrelas: 5,
                    titulo: 'Parecido com o do McDonalds',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        },
        {
            id: 12,
            nome: 'Molhos da Casa',
            preco: 'R$ 2,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            estrelas: 5,
            categoria: categorias.categoria[4],
            comentarios:[
                {
                    id: 1,
                    data: '03/12/2021',
                    cliente: listaDeClientes.clientes[3],
                    estrelas: 5,
                    titulo: 'O melhor molho de todos',
                    comentario: 'Lorem ipsum dolor sit amet.',
                },
                {
                    id: 2,
                    data: '27/03/2020',
                    cliente: listaDeClientes.clientes[4],
                    estrelas: 5,
                    titulo: 'Quero comer tudo com esse molho agora',
                    comentario: 'Lorem ipsum dolor sit amet.',
                }
            ]
        }
     ]
}

module.exports = {listaDeClientes, categorias, cardapio};
