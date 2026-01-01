// ============================================================
// EXERCÍCIO GUIADO: CALCULADORA DE IMC - VERSÃO SIMPLIFICADA
// ============================================================
// Vamos construir uma calculadora de IMC do ZERO juntos!
// Este arquivo ensina você passo a passo como criar do início.

// PASSO 1: Selecionar o formulário do HTML
// Usamos querySelector para encontrar o elemento com id="formulario"
const formulario = document.querySelector('#formulario');

// PASSO 2: Adicionar um evento ao formulário
// Quando o usuário clica em "Enviar", a função é executada
formulario.addEventListener('submit', function (evento) {
  // PASSO 3: Prevenir o comportamento padrão do formulário
  // Sem isso, a página recarregaria
  evento.preventDefault();

  // PASSO 4: Pegar os valores que o usuário digitou
  // Usamos querySelector dentro do evento (evento.target) para acessar os inputs
  const campoPeso = evento.target.querySelector('#peso');
  const campoAltura = evento.target.querySelector('#altura');

  // PASSO 5: Converter os valores de texto para números
  // Os valores dos inputs são sempre strings, então convertemos com Number()
  const pesoDoUsuario = Number(campoPeso.value);
  const alturaDoUsuario = Number(campoAltura.value);

  // PASSO 6: Validar se os valores são válidos
  // Se o peso for 0 ou vazio, mostramos uma mensagem de erro
  if (pesoDoUsuario === 0 || pesoDoUsuario === '') {
    mostrarMensagem('Por favor, digite um peso válido!', false);
    return; // Saímos da função aqui
  }

  // Fazemos a mesma validação para a altura
  if (alturaDoUsuario === 0 || alturaDoUsuario === '') {
    mostrarMensagem('Por favor, digite uma altura válida!', false);
    return;
  }

  // PASSO 7: Calcular o IMC
  // Fórmula: IMC = peso / (altura * altura)
  // ou peso / altura²
  const imcCalculado = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

  // PASSO 8: Arredondar o resultado para 2 casas decimais
  // toFixed(2) garante que sempre teremos 2 números depois da vírgula
  const imcArredondado = imcCalculado.toFixed(2);

  // PASSO 9: Criar a mensagem final
  // Usamos template literals (crase) para inserir variáveis na string
  const mensagemFinal = `Seu IMC é ${imcArredondado}!`;

  // PASSO 10: Exibir a mensagem na página
  mostrarMensagem(mensagemFinal, true);
});

// ============================================================
// FUNÇÃO AUXILIAR: Exibir mensagem na página
// ============================================================
// Esta função pega uma mensagem e exibe ela de forma bonita
function mostrarMensagem(texto, ehSucesso) {
  // Encontramos o elemento onde vamos colocar a mensagem
  const containerResultado = document.querySelector('#resultado');

  // Limpamos qualquer mensagem anterior
  containerResultado.innerHTML = '';

  // Criamos um parágrafo novo
  const paragrafo = document.createElement('p');

  // Se for sucesso, adicionamos a classe 'paragrafo-resultado' (verde)
  // Se for erro, adicionamos a classe 'bad' (vermelho)
  if (ehSucesso) {
    paragrafo.classList.add('paragrafo-resultado');
  } else {
    paragrafo.classList.add('bad');
  }

  // Colocamos o texto dentro do parágrafo
  paragrafo.innerHTML = texto;

  // Adicionamos o parágrafo na página
  containerResultado.appendChild(paragrafo);
}

// ============================================================
// RESUMO DO QUE APRENDEMOS:
// ============================================================
// 1. Selecionamos elementos do HTML com querySelector
// 2. Usamos addEventListener para reagir a eventos
// 3. Convertemos strings para números com Number()
// 4. Validamos dados antes de processar
// 5. Usamos fórmulas matemáticas (IMC = peso / altura²)
// 6. Arredondamos resultados com toFixed()
// 7. Criamos elementos HTML com createElement
// 8. Adicionamos classes CSS com classList.add
// 9. Inserimos elementos na página com appendChild
// 10. Usamos template literals com ${} para inserir variáveis
