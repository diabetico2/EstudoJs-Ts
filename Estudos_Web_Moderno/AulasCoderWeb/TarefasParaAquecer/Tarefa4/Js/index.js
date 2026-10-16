const verificarBtn = document.getElementById("verificar");
const titulo = document.getElementById("titulo");
const resultadoP = document.getElementById("resultado");
const jogos = document.getElementsByClassName("jogo");

function verificarJogos() {
  const quantJogos = jogos.length;
  resultadoP.textContent = `Foram encontrados ${quantJogos} jogos.`;
  // for (const i of jogos) {
  //   i.style.color = "green";
  // }
  const jogosUltimo = jogos[0];
  const jogosPrimeiro = jogos[jogos.length - 1];
  jogosPrimeiro.style.color = "blue";
  jogosUltimo.style.color = "red";
}

verificarBtn.onclick = verificarJogos;
