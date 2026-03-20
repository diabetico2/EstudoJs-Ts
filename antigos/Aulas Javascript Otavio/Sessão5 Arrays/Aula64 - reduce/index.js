const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// O acumulador é a "memória" do reduce.
// Ele começa com um valor inicial (ou o primeiro item) e, a cada volta,
// ele se transforma no que você der "return".
// No final, o que sobrar dentro dele é o resultado da função.

const total = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) {
    acumulador += valor;
  }
  //console.log(valor);
  return acumulador;
}, 0); //valor inicial do acumulador

// console.log(total); // soma de todos os elementos do array, reduzindo ele a um elemento (78)

const pessoas = [
  { nome: "Luiz", idade: 60 }, // 01: acumulador primario, 
  { nome: "Beatriz", idade: 24 },
  { nome: "Ricardo", idade: 62 },// 03 ele é maior agora, então ele vira o acumulador, até o proximo maior que ele aparecer
  { nome: "Helena", idade: 19 },
  { nome: "Marcos", idade: 55 },
  { nome: "Sofia", idade: 31 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  // 02 Acumulador aqui é o "Objeto Vencedor" da comparação anterior.
  if(acumulador.idade > valor.idade) return acumulador; // O campeão continua
  return valor; // Temos um novo campeão
});
console.log(maisVelha)