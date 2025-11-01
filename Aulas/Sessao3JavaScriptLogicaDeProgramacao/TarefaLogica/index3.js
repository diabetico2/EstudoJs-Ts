//escreva uma função que recebe um numero e retorne
// os seguinte:
//Numero é divisivel por 3 = fizz
// numero e divisivel por 5 = buzz
// numero e divisivel por 3 e 5 = fizzbuzz
// numero nao é divisel por 3 e 5 = retorna o proprio numero
// checar se o numero é realmente um numero
// use a função com numeros de 0 a 100

// LINHA 1: Importa o módulo que você instalou
import promptSync from "prompt-sync";

// LINHA 2: Executa o módulo e o atribui à palavra "prompt"
const prompt = promptSync();
const valor1String = prompt("Digite o primeiro valor ");
const valor1 = Number(valor1String);

const resultadoDivisivel = ["fizz", "buzz", "fizzbuzz"];
let resultado = 0;

function provaTeste() {
  if (valor1 % 3 == 0 && valor1 % 5 === 0) {
    resultado = resultadoDivisivel[2];
    console.log(resultado);
  } else if (valor1 % 3 == 0) {
    resultado = resultadoDivisivel[0];
    console.log(resultado);
  } else if (valor1 % 5 === 0) {
    resultado = resultadoDivisivel[1];
    console.log(resultado);
  } else {
    resultado = valor1;
    console.log(resultado);
  }
}

provaTeste();




