const pessoas = [
    { nome: 'Fabio', temChave: true },
    { nome: 'Gabi', temChave: true },
    { nome: 'Roberto', temChave: false }
]

// Sua missão:
// 1. Crie uma lógica que responda: "Todos podem entrar?" (Dica: Use &&),
const podeEntrar = (resultado, chave) => resultado && chave // resultado guarda o valor acumulativo, enquanto chave o valor atual, igual um reduce, só que de if/else de arrow

console.log(pessoas.map(a => a.temChave).reduce(podeEntrar))// já aqui, ele utuliza a logica ali em cima, em vez de criar function dentro do reduce, ele faz o callback e chama
//ele lá de cima
// 2. Crie uma lógica que responda: "Alguém pode entrar?" (Dica: Use ||)
const alguemEntrar = (resultado, chave) => resultado || chave
console.log(pessoas.map(a => a.temChave).reduce(alguemEntrar))