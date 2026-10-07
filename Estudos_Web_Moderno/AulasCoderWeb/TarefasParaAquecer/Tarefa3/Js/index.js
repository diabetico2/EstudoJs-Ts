const infoBtn = document.querySelector("#adicionar");
const mensagem = document.querySelector("#tarefa");
const resul = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const apagarTudo = document.querySelector("#limparConcluidas");

function adicionarTarefa() {
  // reponsavel por criar as tarefas e colocar os botões juntos e fazendos funcionar
  const itemLista = mensagem.value;

  if (itemLista.trim() === "") {
    alert("Nada digitado, tente novamente");
    return;
  }

  const item = document.createElement("li");
  const textoTarefa = document.createElement("span");

  const botao = document.createElement("button");
  const botaoExcluir = document.createElement("button");
  const botaoEditar = document.createElement("button");

  textoTarefa.textContent = itemLista;

  botao.textContent = "Concluir";
  botaoExcluir.textContent = "Apagar";
  botaoEditar.textContent = "Editar";

  botao.onclick = function () {
    textoTarefa.classList.toggle("concluido");
    if (textoTarefa.classList.contains("concluido")) {
      botao.textContent = "Desfazer";
    } else {
      botao.textContent = "Concluir";
    }
    atualizarContador();
  };

  botaoExcluir.onclick = function () {
    item.remove();
    atualizarContador();
  };

  botaoEditar.onclick = function () {
    const novoTexto = prompt("Digite o novo texto");

    if (novoTexto !== null && novoTexto.trim() !== "") {
      textoTarefa.textContent = novoTexto;
    }
  };

  item.appendChild(textoTarefa);
  item.appendChild(botao);
  item.appendChild(botaoExcluir);
  item.appendChild(botaoEditar);

  resul.appendChild(item);

  mensagem.value = "";

  atualizarContador();
}

function limparConcluidas() {
  // limpas todas com o status concluido
  const concluidas = document.querySelectorAll(".concluido");

  concluidas.forEach((e) => {
    e.parentElement.remove();
  });

  atualizarContador();
}

function atualizarContador() {
  // script que atualiza o contador
  const listaCompleta = document.querySelectorAll("#lista li");
  const concluidas = document.querySelectorAll(".concluido");

  const total = listaCompleta.length;
  const conc = concluidas.length;

  contador.textContent = `Total: ${total} | Concluídas: ${conc}`;
}

infoBtn.onclick = adicionarTarefa;

apagarTudo.onclick = limparConcluidas;

mensagem.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

atualizarContador();
