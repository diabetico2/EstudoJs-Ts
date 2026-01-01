// ============================================================
// EXERCÍCIO 3: CONVERSOR DE TEMPERATURA
// ============================================================
// Objetivo: Converter Celsius para Fahrenheit
// Fórmula: F = (C × 9/5) + 32

// 💡 DICA 1: Selecione o formulário
// Procure por um id no HTML chamado 'formulario-temperatura'

// TODO: Código aqui - Selecione o formulário

// 💡 DICA 2: Adicione o evento submit
// Use addEventListener com 'submit' como no exercício anterior

// TODO: Código aqui - Adicione addEventListener

// 💡 DICA 3: Dentro da função, capture o input
// - Use e.preventDefault()
// - Capture o input com id='celsius'
// - Converta para número com Number()

// TODO: Código aqui - Capture e converta o valor

// 💡 DICA 4: Valide, calcule e mostre o resultado
// - Valide se o valor é válido
// - Calcule: fahrenheit = (celsius × 9/5) + 32
// - Use toFixed(2)
// - Crie uma mensagem: "X°C é igual a Y°F"
// - Chame mostrarResultado(mensagem, true)

// TODO: Código aqui - Valide, calcule e mostre

function mostrarResultado(mensagem, foiSucesso) {
  const containerResultado = document.querySelector('#resultado-temperatura');
  containerResultado.innerHTML = '';
  const paragrafo = document.createElement('p');
  
  if (foiSucesso) {
    paragrafo.classList.add('paragrafo-resultado');
  } else {
    paragrafo.classList.add('bad');
  }
  
  paragrafo.innerHTML = mensagem;
  containerResultado.appendChild(paragrafo);
}
