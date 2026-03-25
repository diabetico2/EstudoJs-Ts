// Exercicio extraido do PDF de Fundamentos de Programacao 
const soma = function(...v1){
    const juntar = (ac,at) => ac + at
    const resul = v1.reduce(juntar)
    return resul
}

console.log(soma(5,6))