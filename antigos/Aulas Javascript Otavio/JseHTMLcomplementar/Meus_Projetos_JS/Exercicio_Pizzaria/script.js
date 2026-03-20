const inputSabor = document.querySelector("#input-sabor");
const btnPedir = document.querySelector("#btn-pedir");
const forno = document.querySelector(".lista-pizzas");

// --- FUNCIONARIO 1: A MASSA ---
function criaLi() {
  // 1. Crie um elemento 'li'
  const li = document.createElement("li");
  // 2. Adicione a classe 'pizza-item'
  li.setAttribute("class", "pizza-item");
  // 3. Retorne o li
  return li;
}

// --- FUNCIONARIO 2: O RECHEIO ---
function criaSpan(sabor) {
  const span = document.createElement("span");
  // 1. Crie um 'span'

  // 2. Coloque o innerText sendo o sabor
  span.innerText = sabor;
  // 3. Retorne o span
  return span;
}

// --- FUNCIONARIO 3: O CORTADOR ---
function criaBotao() {
  // 1. Crie um 'button'
  const botao = document.createElement("button");
  // 2. innerText = 'Comer 😋'
  botao.innerText = "comer";
  // 3. Adicione a classe 'btn-comer'
  //       TIPO     VALOR
  botao.setAttribute("class", "btn-comer");
  // 4. Retorne o botao
  return botao;
}

// --- A CHEF (GERENTE) ---
function montarPizza(sabor) {
  // AQUI A MAGICA ACONTECE:
  // 1. Chame const li = criaLi();
  const li = criaLi();
  // 2. Chame const span = criaSpan(sabor);
  const span = criaSpan(sabor);
  // 3. Chame const btn = criaBotao();
  const btn = criaBotao();

  // 4. Pendure o span e o btn dentro do li
  li.appendChild(span);
  li.appendChild(btn);
  // 5. Retorne o li completo
  return li;
}

// --- EVENTOS ---
btnPedir.addEventListener("click", function () {
  const sabor = inputSabor.value;
  if (sabor === "") return;

  // Chame a Chef para montar a pizza:
  const pizzaPronta = montarPizza(sabor);

  // Coloque no forno
  forno.appendChild(pizzaPronta);

  inputSabor.value = "";
  inputSabor.focus();
});

// --- RECEPCIONISTA (APAGAR) ---
forno.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("btn-comer")) {
    el.parentElement.remove();
  }
});
