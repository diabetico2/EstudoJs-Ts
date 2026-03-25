// Exercicio extraido do PDF de Fundamentos de Programacao 
let contador = 0
function repete(v1,qtd){
    let array = []
    while (contador < qtd ){
      array.push(v1)
      contador++
    }
    return array
}
console.log(repete(7,3))