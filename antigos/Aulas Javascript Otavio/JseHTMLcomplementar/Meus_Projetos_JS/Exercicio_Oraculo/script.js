const inputChute = document.querySelector("#input-chute");
const btnChutar = document.querySelector("#btn-chutar");
const msgResultado = document.querySelector(".resultado");
const msgTentativas = document.querySelector(".tentativas");

let tentativa = 0;
let numeroSecreto = "";
// 1. Crie uma variavel global para guardar o "Numero Secreto" (Math.random)
// 2. Crie uma variavel para contar as tentativas (comeca em 0)

function gerarNumeroAleatorio() {
  numeroSecreto = Math.floor(Math.random() * 100 + 1);

  return numeroSecreto;
}
console.log(gerarNumeroAleatorio());

btnChutar.addEventListener("click", function () {
  const chute = inputChute.value;
  if (Number(chute) === numeroSecreto) {
    msgResultado.innerHTML = "Você venceu";
     msgResultado.style.color = 'green';
    msgTentativas.innerHTML = `Tentativas: ${tentativa}`;
  } else if (Number(chute) > numeroSecreto) {
    msgResultado.innerHTML = "está frio, tente mais baixo";
    msgResultado.style.color = 'blue';
    msgTentativas.innerHTML = `Tentativas: ${tentativa += 1}`;
  } else {
    msgResultado.innerHTML = "está quente, tente mais alto";
    msgResultado.style.color = 'red';
    msgTentativas.innerHTML = `Tentativas: ${tentativa += 1}`;
  }
});

console.log(numeroSecreto);
