// const notas = [8.0, 4.5, 9.0, 6.0, 10.0, 5.5, 7.5];

// let soma = 0;

// for (let i = 0; i < notas.length; i++) {
//   soma = notas[i] + soma;
// }

// (function(){
//     const media = soma / notas.length
//     if(media >= 7 ){
//         console.log('passaram')
//     } else{
//         console.log('reprovaram')
//     }
// })()
function avaliarTurma(listaDeNotas) {
  let soma = 0;
  for (let i = 0; i < listaDeNotas.length; i++) {
    soma = listaDeNotas[i] + soma;
  }
  console.log(soma);
function total() {
    const media = soma / listaDeNotas.length;
    if (media >= 7) {
      return "passaram"; // <--- Mudou aqui!
    } else {
      return "reprovaram"; // <--- Mudou aqui!
    }
  }
  return total();
}
const teste = avaliarTurma([1, 2, 6, 8, 9, 11, 56]);
console.log(teste)
