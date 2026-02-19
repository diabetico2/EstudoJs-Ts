const produtos = [];
const inputNome = document.querySelector("#nome-produto");
const inputPreco = document.querySelector("#preco-produto");
const btnFiltro = document.querySelector("#btn-filtrar-caros");
const btnMostrarTodos = document.querySelector("#btn-mostrar-todos");
const lista = document.querySelector("#lista-exibicao");
const adicionar = document.querySelector("#btn-adicionar");

function limpa() {
  inputNome.value = "";
  inputPreco.value = "";
  inputNome.focus();
  inputPreco.focus();
}
function renderizar(listaDeProdutos) {
  lista.innerHTML = ""; // Limpa a tela uma única vez

  listaDeProdutos.forEach((itemInfo) => {
    const li = criaLi(); // Usa sua função de criar li
    li.innerText = `${itemInfo.nome} valor: ${itemInfo.preco}`;
    lista.appendChild(li); // Adiciona na tela
  });
}
function criaLi() {
  const li = document.createElement("li");
  return li;
}
adicionar.addEventListener("click", function (e) {
  e.preventDefault();
  const itemInfo = { nome: inputNome.value, preco: Number(inputPreco.value) };

  produtos.push(itemInfo);
  renderizar(produtos); // Manda mostrar a lista atualizada
  limpa();
});
btnFiltro.addEventListener("click", function () {
  const caros = produtos.filter((item) => item.preco > 100);
  renderizar(caros); // Manda mostrar apenas a cópia filtrada
});

btnMostrarTodos.addEventListener("click", function () {
  renderizar(produtos); // Manda mostrar o array original inteiro
});
