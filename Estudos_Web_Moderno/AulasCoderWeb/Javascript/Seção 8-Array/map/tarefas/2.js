const produtos = [
    { nome: "teclado", preco: 120, qtd: 10 },
    { nome: "mouse", preco: 80, qtd: 5 },
    { nome: "monitor", preco: 900, qtd: 2 }
]

const resul = produtos.map(function(e){
    return{
        nome: e.nome,
        valorEstoque: e.preco * e.qtd
    }
})

console.log(resul)