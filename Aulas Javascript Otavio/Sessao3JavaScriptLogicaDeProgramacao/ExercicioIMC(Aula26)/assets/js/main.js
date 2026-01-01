// ===== CAPTURA DO EVENTO DE SUBMIT DO FORMULÁRIO =====
// Selecionamos o formulário no HTML com o id 'formulario'
const form = document.querySelector('#formulario');

// Adicionamos um ouvidor (listener) para o evento 'submit'
// Quando o usuário clica em enviar, essa função é executada
form.addEventListener('submit', function (e) {
  // e.preventDefault() previne o comportamento padrão do formulário
  // (que seria recarregar a página e enviar dados para o servidor)
  e.preventDefault();
  
  // Capturamos os campos de entrada (input) do formulário
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // Convertemos os valores dos inputs para números
  // inputPeso.value retorna uma string, Number() converte para número
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // ===== VALIDAÇÕES =====
  // Verificamos se o peso é válido (se for 0 ou vazio, !peso será true)
  if (!peso) {
    setResultado('Peso inválido', false);
    return; // Saímos da função aqui
  }

  // Verificamos se a altura é válida
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  // ===== CÁLCULO DO IMC =====
  // Chamamos a função getImc para calcular o IMC
  const imc = getImc(peso, altura);
  
  // Chamamos a função getNivelImc para descobrir qual é o nível de IMC
  const nivelImc = getNivelImc(imc);

  // Criamos uma mensagem com o resultado do IMC
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  // Exibimos o resultado na página (true = resultado válido/sucesso)
  setResultado(msg, true);
});

// ===== FUNÇÃO PARA DETERMINAR O NÍVEL DO IMC =====
// Recebe o valor do IMC calculado
function getNivelImc (imc) {
  // Criamos um array com os 6 níveis de IMC possíveis
  // Cada índice corresponde a um nível (0, 1, 2, 3, 4, 5)
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  // Verificamos o valor do IMC e retornamos o nível correspondente
  // Começamos pela condição mais alta (39.9 e acima = Obesidade grau 3)
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  // Se nenhuma condição for verdadeira, significa que é menor que 18.5
  if (imc < 18.5) return nivel[0];
}

// ===== FUNÇÃO PARA CALCULAR O IMC =====
// Recebe peso (em kg) e altura (em metros)
// Fórmula: IMC = peso / altura²
function getImc (peso, altura) {
  // Calculamos o IMC: peso dividido pela altura elevada ao quadrado
  // ** é o operador de exponenciação (altura elevado a 2)
  const imc = peso / altura ** 2;
  // Retornamos o resultado arredondado para 2 casas decimais
  // toFixed(2) garante que teremos sempre 2 casas decimais
  return imc.toFixed(2);
}

// ===== FUNÇÃO AUXILIAR PARA CRIAR ELEMENTO =====
// Essa função cria um novo parágrafo (elemento HTML <p>)
function criaP () {
  // document.createElement cria um novo elemento HTML
  // Neste caso, estamos criando um parágrafo vazio
  const p = document.createElement('p');
  // Retornamos esse parágrafo para ser usado em outra função
  return p;
}

// ===== FUNÇÃO PARA EXIBIR O RESULTADO NA PÁGINA =====
// Recebe a mensagem a ser exibida e um booleano indicando se é válido
function setResultado (msg, isValid) {
  // Selecionamos o elemento onde o resultado será exibido (div com id 'resultado')
  const resultado = document.querySelector('#resultado');
  
  // Limpamos qualquer conteúdo anterior dentro desse elemento
  // innerHTML = '' remove tudo que estava lá
  resultado.innerHTML = '';

  // Criamos um novo parágrafo usando a função criaP()
  const p = criaP();

  // Verificamos se o resultado é válido (true = sucesso, false = erro)
  if (isValid) {
    // Se for válido, adicionamos a classe CSS 'paragrafo-resultado' (estilo de sucesso)
    p.classList.add('paragrafo-resultado');
  } else {
    // Se for inválido, adicionamos a classe CSS 'bad' (estilo de erro)
    p.classList.add('bad');
  }

  // Adicionamos o texto da mensagem ao parágrafo
  p.innerHTML = msg;
  
  // Adicionamos o parágrafo como filho dentro do elemento resultado
  // Isso faz o parágrafo aparecer na página
  resultado.appendChild(p);
}
