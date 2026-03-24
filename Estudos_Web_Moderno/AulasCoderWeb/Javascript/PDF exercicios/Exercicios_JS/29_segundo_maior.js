// Exercicio extraido do PDF de Fundamentos de Programacao 
const segundoMaior = function(a){
    const arrumado = a.sort(function(a, b){return a - b});
    return arrumado[arrumado.length - 2 ]
}


console.log(segundoMaior([12, 1, 2, 3, 11])) // retornará 11
console.log(segundoMaior([8, 4, 5, 6]) )    // retornará 6
