const infoBtn = document.querySelector("#botao");
const mensagem = document.querySelector("#nome");
const resul = document.querySelector("#resultado");

infoBtn.onclick = function () {
  if (mensagem.value.trim() === "") {
    resul.textContent = "Nome não digitado, tente novamente";
  } else {
    resul.textContent = `Olá, meu nome é ${mensagem.value}`;
  }
};