const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campoPeso = evento.target.querySelector("#peso");
  const campoAltura = evento.target.querySelector("#altura");

  const pesoDoUsuario = Number(campoPeso.value);
  const alturaDoUsuario = Number(campoAltura.value);

  if (pesoDoUsuario === 0 || pesoDoUsuario === "") {
    mostrarMensagem("Por favor, digite um peso válido!", false);
    return;
  }

  if (alturaDoUsuario === 0 || alturaDoUsuario === "") {
    mostrarMensagem("Por favor, digite uma altura válida!", false);
    return;
  }

  const imcCalculado = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

  const imcArredondado = imcCalculado.toFixed(2);

  const mensagemFinal = `Seu IMC é ${imcArredondado}!`;

  mostrarMensagem(mensagemFinal, true);
});

function mostrarMensagem(texto, ehSucesso) {
  const containerResultado = document.querySelector("#resultado");

  containerResultado.innerHTML = "";

  const paragrafo = document.createElement("p");

  if (ehSucesso) {
    paragrafo.classList.add("paragrafo-resultado");
  } else {
    paragrafo.classList.add("bad");
  }

  paragrafo.innerHTML = texto;

  containerResultado.appendChild(paragrafo);
}
