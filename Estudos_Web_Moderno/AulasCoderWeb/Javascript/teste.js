const jogos = [
    { nome: 'Elden Ring', preco: 250 },
    { nome: 'Stardew Valley', preco: 30 },
    { nome: 'The Witcher 3', preco: 150 }
]

// 1. Filtre quem é > 100
const filtro = e => e.preco > 100
// 2. Mapeie reduzindo o preço em 20% (valor * 0.8)
const desconto = e => e.preco * 0.8
const promocao = jogos.filter(filtro).map(desconto)

console.log(promocao)

const devs = [
    { nome: 'Ana', salario: 5000 },
    { nome: 'Bia', salario: 8500 },
    { nome: 'Caio', salario: 7200 }
]

const maisRico = devs.reduce((ant, atual) => {
    return atual.salario > ant.salario ? ant = atual : ant
})
console.log(maisRico)