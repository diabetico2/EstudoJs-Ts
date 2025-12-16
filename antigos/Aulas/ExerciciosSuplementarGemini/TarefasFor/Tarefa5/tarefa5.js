const produtos = [
  { nome: "Notebook Gamer", preco: 4999.9, emEstoque: true },
  { nome: "Mouse Óptico", preco: 89.9, emEstoque: true },
  { nome: "Teclado Mecânico", preco: 350.0, emEstoque: false },
  { nome: 'Monitor 27"', preco: 1400.0, emEstoque: true },
];

// TODO: Escreva seu código aqui.

// 1. Selecione a '.catalogo-container'.
const container = document.querySelector(".catalogo-container");
const listaUl = document.createElement("ul");
// 2. Crie o loop 'for' para iterar sobre o array 'produtos'.
for (let i = 0; i < produtos.length; i++) {
  // 3. Dentro do loop, para cada produto:
  //    a. Desestruture para pegar 'nome', 'preco' e 'emEstoque'.
  let { nome, preco, emEstoque } = produtos[i];
  //    b. Crie a <div> principal do card (ex: `let card = ...`) e adicione a classe 'produto-card'.
  let cardDiv = document.createElement("div");
  //    c. Crie um <h3> para o nome, crie o nó de texto com 'nome', e dê appendChild.
  let nomeH3 = document.createElement("h3");
  let nomeProduto = document.createTextNode(nome);
  nomeH3.appendChild(nomeProduto);
  //
  //    d. Crie um <p> para o preço.
  //       (Dica: formate o preço! Use `preco.toFixed(2)` e junte com "R$ "
  let precoP = document.createElement("p");
  let valorPreco = document.createTextNode(preco.toFixed(2));
  precoP.appendChild(valorPreco);
  //       em uma template string. Crie o nó de texto com esse valor formatado e dê appendChild).
  //
  //    e. Crie um <p> para o status (em estoque ou não).
  let estoqueP = document.createElement("p");
  let estaEstoque;
  //       (Dica: adicione a classe 'status-estoque' a este <p>).
  //
  //    f. **Use um `if (emEstoque)`... `else`... para:**
  if (emEstoque === true) {
    estaEstoque = document.createTextNode("disponivel");
  } else {
    estaEstoque = document.createTextNode("nao disponivel");
  }

  //   let estaEstoque = document.createTextNode(emEstoque)
  estoqueP.appendChild(estaEstoque);

  //       - Se `true`: criar um nó de texto "Disponível" e adicionar a classe 'em-estoque' ao <p> do status.
  //       - Se `false`: criar um nó de texto "Indisponível" e adicionar a classe 'fora-de-estoque' ao <p> do status.
  //       - Dê appendChild do nó de texto criado (seja "Disponível" ou "Indisponível") ao <p> do status.
  //
  //    g. Dê appendChild do <h3>, do <p> de preço e do <p> de status (todos filhos) dentro do `card` (pai).
  cardDiv.appendChild(nomeH3)
  cardDiv.appendChild(estoqueP)
  cardDiv.appendChild(precoP)
  //
  //    h. Dê appendChild do `card` (já pronto) dentro do '.catalogo-container'.
  container.appendChild(cardDiv)
}

