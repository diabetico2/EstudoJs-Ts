const itemArray = [];
const inputNome = document.querySelector("#item-nome");
const inputValor = document.querySelector("#item-valor");
const itemCategoria = document.querySelector("#item-categoria");
const btnAdicionar = document.querySelector("#btn-adicionar");
const btnFiltroArma = document.querySelector("#btn-filtro-armas");
const limpaFiltro = document.querySelector("#btn-mostrar-tudo");
const listaContainer = document.querySelector("#lista-inventario");
let painelOuro = document.querySelector("#total-ouro");

function criaLi() {
  return document.createElement("li");
}

function limpa() {
  inputValor.value = "";
  inputNome.value = "";
  inputNome.focus(); // Dica: manter o foco no nome facilita a digitação sequencial
}

function renderizar(listaParaExibir) {
  // O .reduce percorre o array e transforma tudo em um único valor (a soma)
  // IMPORTANTE: Usei 'listaParaExibir' aqui para que o total mude quando você filtrar!
  const valorTotal = listaParaExibir.reduce(function (acumulador, item) {
    // Como 'item' é um objeto, precisamos acessar a propriedade '.valor' para somar
    return acumulador + item.valor; 
  }, 0); // O '0' indica que a soma começa do zero. Sem ele, o JS tentaria usar o primeiro objeto como número e daria erro

  // Limpa o HTML para não duplicar os itens antigos ao adicionar novos
  listaContainer.innerHTML = "";

  // Atualiza o painel de ouro (fora do loop por performance)
  painelOuro.innerText = valorTotal.toFixed(2);

  // Cria um <li> para cada item que estiver na lista recebida
  listaParaExibir.forEach((item) => {
    const li = criaLi();
    li.innerText = `${item.nome} - R$ ${item.valor.toFixed(2)} (${item.categoria})`;
    listaContainer.appendChild(li);
  });
}

btnAdicionar.addEventListener("click", function (e) {
  e.preventDefault();

  if (!inputValor.value || !inputNome.value) return;

  const produtoInfo = {
    nome: inputNome.value,
    valor: Number(inputValor.value), // Garante que o valor seja tratado como número
    categoria: itemCategoria.value,
  };

  itemArray.push(produtoInfo); // Salva na 'memória' do programa
  renderizar(itemArray); // Redesenha a tela com a lista atualizada
  limpa();
});

btnFiltroArma.addEventListener("click", function () {
  // Cria uma lista nova contendo apenas o que atende à condição
  const apenasArmas = itemArray.filter((item) => item.categoria === "Arma");
  renderizar(apenasArmas); // Renderiza apenas a lista filtrada
});

limpaFiltro.addEventListener("click", () => {
  renderizar(itemArray); // Volta a renderizar a lista completa
});