Array.prototype.map2 = function(callback){
    const newArray = []
      for (let i = 0; i < this.length; i++){
         newArray.push(callback(this[i], i, this))
      }
      return newArray
}

const carrinho = [
    {"Nome": "bolacha", "preco": 3.45},
    {"Nome": "caderno", "preco": 2.45},
    {"Nome": "kit lapis", "preco": 11.45},
    {"Nome": "caneta", "preco": 7.45}
]

// 1. Defina a função que extrai o preço
const apenasPreco = produto => produto.preco

// 2. Use o map direto no carrinho (sem o JSON.parse)
const resultado = carrinho.map2(apenasPreco)

console.log(resultado) // [3.45, 2.45, 11.45, 7.45]