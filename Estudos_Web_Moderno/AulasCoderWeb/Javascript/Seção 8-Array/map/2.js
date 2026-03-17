const carrinho = [
    {"Nome": "bolacha", "preco": 3.45},
    {"Nome": "caderno", "preco": 2.45},
    {"Nome": "kit lapis", "preco": 11.45},
    {"Nome": "caneta", "preco": 7.45}
]

//retornar com map apenas os preços

const result = carrinho.map(function (itens){
    return itens.preco
})

console.log(result)
