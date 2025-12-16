// 02) Crie uma funcao que recebe os lados de um triangulo e retorne se eh Equilatero, Isosceles ou Escaleno.
// LINHA 1: Importa o módulo que você instalou
import promptSync from "prompt-sync";

// LINHA 2: Executa o módulo e o atribui à palavra "prompt"
const prompt = promptSync();

let valor1 = prompt("digite o primeiro valor: ");
let valor2 = prompt("digite o segundo valor: ");
let valor3 = prompt("digite o terceiro valo: ");

function VerificaTrangulo() {
  if (valor1 === valor2 && valor2 === valor3) {
    console.log(`ele é Equilátero`);
  } else if (valor1 === valor2 || valor2 === valor3 || valor1 === valor3) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
}
VerificaTrangulo();
