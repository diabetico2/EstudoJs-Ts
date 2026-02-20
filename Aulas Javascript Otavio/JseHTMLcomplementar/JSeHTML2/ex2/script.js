/* ================================================================
   TEMPLATE: SISTEMA DE LISTA COM MEMÓRIA E FILTRO
   Conceitos aplicados: Arrays, Objetos, DOM, Filter e Refatoração.
   ================================================================ 
*/

// 1. ESTADO DA APLICAÇÃO (Memória local onde os dados ficam guardados)
const produtos = [];

// 2. SELEÇÃO DE ELEMENTOS (Captura de IDs do HTML)
const inputNome = document.querySelector("#nome-produto");
const inputPreco = document.querySelector("#preco-produto");
const btnAdicionar = document.querySelector("#btn-adicionar");
const btnFiltro = document.querySelector("#btn-filtrar-caros");
const btnMostrarTodos = document.querySelector("#btn-mostrar-todos");
const listaContainer = document.querySelector("#lista-exibicao");

// 3. FUNÇÕES AUXILIARES (Pequenas tarefas específicas)

/** Limpa os campos de entrada e foca no primeiro input */
function limparInputs() {
  inputNome.value = "";
  inputPreco.value = "";
  inputNome.focus();
}

/** Apenas cria e retorna um elemento <li> */
function criarElementoLi() {
  return document.createElement("li");
}

/** * FUNÇÃO MESTRA: RENDERIZAR
 * Ela limpa a tela e desenha qualquer array que você enviar para ela.
 */
function renderizar(listaParaExibir) {
  listaContainer.innerHTML = ""; // Apaga a lista atual na tela

  listaParaExibir.forEach((item) => {
    const li = criarElementoLi();
    li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`; // .toFixed(2) para formatar dinheiro
    listaContainer.appendChild(li);
  });
}

// 4. EVENTOS (O que acontece quando o usuário interage)

// Evento de Adicionar Produto
btnAdicionar.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o formulário de recarregar a página

  // Validação simples: não adiciona se o nome estiver vazio
  if (!inputNome.value) return;

  // Criamos o objeto convertendo o preço para número
  const novoProduto = {
    nome: inputNome.value,
    preco: Number(inputPreco.value)
  };

  produtos.push(novoProduto); // Guarda no array global
  renderizar(produtos);       // Atualiza a tela com todos os produtos
  limparInputs();             // Limpa os campos
});

// Evento de Filtrar Produtos Caros
btnFiltro.addEventListener("click", () => {
  // O .filter cria um novo array apenas com itens > 100
  const produtosCaros = produtos.filter(item => item.preco > 100);
  
  // Chamamos a mesma função de renderizar, mas passamos apenas os filtrados
  renderizar(produtosCaros);
});

// Evento de Mostrar Todos (Reset de filtro)
btnMostrarTodos.addEventListener("click", () => {
  renderizar(produtos); // Passa o array original completo
});