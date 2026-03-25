// Exercicio extraido do PDF de Fundamentos de Programacao

const media = function(v){
const soma = v.reduce((act,at) => act + at, 0)
return soma / v.length
}

console.log(media([1,2,3,4,5]))