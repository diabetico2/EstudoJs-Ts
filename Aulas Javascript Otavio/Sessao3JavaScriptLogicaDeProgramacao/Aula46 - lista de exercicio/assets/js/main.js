const inputTarefa = document.querySelector(".input-tarefa");
const btnAdicionar = document.querySelector(".btn-tarefa");
const tarefasParagrafo = document.querySelector(".tarefas");
const tarefa = [];

function ListaTarefa() {
  btnAdicionar.addEventListener("click", function () {
    const textoDigitado = inputTarefa.value;
    const btnApagar = document.createElement("button");
    btnApagar.innerHTML = "apagar";
    btnApagar.setAttribute("class", "apagar");
    btnApagar.style.marginLeft = "10px";
    if (textoDigitado !== "") {
      tarefa.push(textoDigitado);
      const li = document.createElement("li");
      li.innerText = textoDigitado;
      li.appendChild(btnApagar);
      tarefasParagrafo.appendChild(li);

      inputTarefa.value = "";
    }
  });
  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
      el.parentElement.remove();
    }
  });
}
ListaTarefa();
