const produtos = [
    { nome: 'Teclado', preco: 20, qtd: 5 },
    { nome: 'Mouse', preco: 10, qtd: 0 },
    { nome: 'Monitor', preco: 100, qtd: 2 }
];

const filtro = (f) => f.qtd > 0
const mapeado = (f) => `produto: ${f.nome} preço: R$ ${f.preco}` 

const emEstoque = produtos.filter(filtro).map(mapeado)
console.log(emEstoque);

const maisBarato = produtos.reduce((ant, atual) => {
    return ant.preco < atual.preco ? ant : atual
});
console.log(maisBarato)