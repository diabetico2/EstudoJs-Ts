const iniciar = document.querySelector(".iniciar");
const parar = document.querySelector(".parar");
const tempo =document.createElement("p");

let segundos = 0;
let timer;

function controle() {
  iniciar.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval(function () {
      segundos++;
      tempo.innerHTML = segundos;
    }, 1000);
  });
  parar.addEventListener("click", function () {
    clearInterval(timer);
  });
  document.body.appendChild(tempo);
}
controle();
