const infoBtn = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

let info = 0;

infoBtn.onclick = function () {
  console.log("teste");

  if (info % 2 === 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  info += 1;
  mensagem.textContent = `botão clicado com total de ${info} vezes`;
};
