// --- SEUS SELETORES AQUI ---
// 1. Pegue o input, o botao de adicionar e a lista (ul)
const inputProduto = document.querySelector(".input-produto");
const btnAdicionar = document.querySelector("#adicionar");
const ListaDeCompra = document.querySelector(".lista-compras");
const listaCompleta = [];

function criadorLista() {
  btnAdicionar.addEventListener("click", function () {
    const Produtos = inputProduto.value;
    const btnApagar = document.createElement("button");
    btnApagar.innerHTML = "apagar";
    btnApagar.setAttribute("class", "apagar");
    btnApagar.style.marginLeft = "10px";
    if (Produtos !== "") {
      const li = document.createElement("li");
      listaCompleta.push(Produtos);
      li.innerText = Produtos;
      li.appendChild(btnApagar);
      ListaDeCompra.appendChild(li);
      inputProduto.value = "";
    }
  });

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
      el.parentElement.remove();
    }
  });
}
criadorLista();
