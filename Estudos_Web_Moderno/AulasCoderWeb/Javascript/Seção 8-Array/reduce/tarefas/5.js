const carrinho = [
    { nome: 'Arroz 5kg', preco: 30.00 },
    { nome: 'Feijão 1kg', preco: 8.00 },
    { nome: 'Óleo', preco: 7.50 },
    { nome: 'Leite', preco: 4.50 }
]

// 1. Use o MAP para transformar a lista de OBJETOS em uma lista de PREÇOS com desconto.
const mapeado = carrinho.map(function(e){
    return e.preco * 0.9
})
// 2. Use o REDUCE para somar esses preços.
const resul = mapeado.reduce(function(ac,e){
 return ac + e
})
// 3. Mostre o total final (deve dar algo em torno de 45.00).
console.log(resul)
// Manda o código completo!