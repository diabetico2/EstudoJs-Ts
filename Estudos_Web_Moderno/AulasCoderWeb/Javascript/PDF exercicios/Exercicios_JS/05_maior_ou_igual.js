// Exercicio extraido do PDF de Fundamentos de Programacao 
const maiorOuIgual = function(v1,v2) {
    if (typeof v1 !== typeof v2){
        return false
    } 
   return v1 >= v2
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,'0'))
console.log(maiorOuIgual(5,1))