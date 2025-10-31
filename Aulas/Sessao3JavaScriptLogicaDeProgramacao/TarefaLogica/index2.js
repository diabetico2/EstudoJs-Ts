// escreva uma função chamada ePaisagem que
//recebe dois argumentos, largura e altura
//de uma imagem (number).
//retorne true se a mensagem estiver no modo paisagem

// LINHA 1: Importa o módulo que você instalou
import promptSync from "prompt-sync";

// LINHA 2: Executa o módulo e o atribui à palavra "prompt"
const prompt = promptSync();

const stringAltura = prompt("digite o valor da altura da imagem: ");
const stringLargura = prompt("digite o valor da largura da imagem: ");
const altura = Number(stringAltura);
const largura = Number(stringLargura);

function ePaisagem(largura, altura) {
  if (largura > altura) {
    return true;
  } else {
    return false;
  }
}
ePaisagem();

const resultado = ePaisagem(largura, altura);

if (resultado === true) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}
