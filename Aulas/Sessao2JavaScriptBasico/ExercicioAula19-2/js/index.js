function escopoCadastro() {
  const form = document.querySelector(".cadastro-produto");
  const resultado = document.querySelector(".lista-produtos");

  const produtos = []; // Array que vai guardar todos os nossos produtos

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Impede que a página recarregue ao enviar o form
    const nomeproduto = form.querySelector(".nomeproduto");
    const precoproduto = form.querySelector(".precoproduto");
    const qtdproduto = form.querySelector(".qtdproduto");
    produtos.push({
      nomeproduto: nomeproduto.value,
      precoproduto: Number (precoproduto.value),
      qtdproduto: Number (qtdproduto.value),
    });

    console.log(produtos);
     resultado.innerHTML += `<p>${nomeproduto.value} ${precoproduto.value} ${qtdproduto.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

escopoCadastro();
