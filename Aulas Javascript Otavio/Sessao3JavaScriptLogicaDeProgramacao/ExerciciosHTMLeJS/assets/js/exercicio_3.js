const formularioTemperatura = document.querySelector("#formulario-temperatura");

formularioTemperatura.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputCelcius = e.target.querySelector("#celsius");
  const celsius = Number(inputCelcius.value);

  if (!celsius) {
    mostrarMensagem(`Por favor, insira um valor válido!`, false);
    return;
  }
  const contaFahr = (celsius * 9) / 5 + 32;

  const resultado = contaFahr.toFixed(2);
  mostrarResultado(
    `o ${celsius} convertido para Fahrenheit é: ${resultado}`,
    true
  );

  mensagemFinal(mostrarResultado, true);
});

function mostrarResultado(mensagem, foiSucesso) {
  const containerResultado = document.querySelector("#resultado-temperatura");
  containerResultado.innerHTML = "";
  const paragrafo = document.createElement("p");

  if (foiSucesso) {
    paragrafo.classList.add("paragrafo-resultado");
  } else {
    paragrafo.classList.add("bad");
  }

  paragrafo.innerHTML = mensagem;
  containerResultado.appendChild(paragrafo);
}
