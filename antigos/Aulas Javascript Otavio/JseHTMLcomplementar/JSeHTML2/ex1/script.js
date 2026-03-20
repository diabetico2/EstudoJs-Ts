const adicionar = document.querySelector("#btn-adicionar");
const lista = document.querySelector("#lista-produtos");
const total = document.querySelector("#valor-total");
const inputPreco = document.querySelector("#input-preco");
const precos = [];

function criaLi() {
  const li = document.createElement("li");
  return li;
}

adicionar.addEventListener("click", function (e) {
  const li = criaLi();

  e.preventDefault();
  const precoFormatado = Number(inputPreco.value);
  precos.push(precoFormatado);
  const valorTotal = precos.reduce(function (acumulador, valor) {
    acumulador += valor;

    return acumulador;
  });
  total.innerHTML = valorTotal; // somar tudo
  li.innerText = precoFormatado; // mostrar os numeros 
  lista.appendChild(li);
  inputPreco.value = "";
  inputPreco.focus;
});
