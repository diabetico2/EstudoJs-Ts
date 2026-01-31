const formularioCombustivel = document.querySelector('#formulario-combustivel');

formularioCombustivel.addEventListener('submit', function(e){
  e.preventDefault();
  const inputdistancia = e.target.querySelector('#distancia');
  const inputlitros = e.target.querySelector('#litros');

  const distanciaPercorrida = Number(inputdistancia.value);
  const litrosGastos = Number(inputlitros.value);  

  if (distanciaPercorrida <= 0 || isNaN(distanciaPercorrida)){
    mostrarResultado('Distância inválida', false);
    return;
  }

  if (litrosGastos <= 0 || isNaN(litrosGastos)){
    mostrarResultado('Quantidade de litros inválida', false);
    return;
  }

  const consumo = distanciaPercorrida / litrosGastos;
  const consumoFinal = consumo.toFixed(2);
  const mensagemFinal = `Seu carro fez ${consumoFinal} km/l`;

  mostrarResultado(mensagemFinal, true);
});

// - Divida a distância pelos litros: consumo = distanciaPercorrida / litrosGastos
// - Use toFixed(2) para arredondar em 2 casas decimais
// - Crie uma mensagem como: 'Seu carro fez X km/l'

// TODO: Código aqui - Chame a função para mostrar o resultado

// 💡 DICA 6: Chame a função mostrarResultado com true (sucesso)

// ============================================================
// FUNÇÃO AUXILIAR (JÁ PRONTA PARA VOCÊ USAR!)
// ============================================================
// Essa função você NÃO precisa modificar
// Ela exibe mensagens de sucesso ou erro na página

function mostrarResultado(mensagem, foiSucesso) {
  // Encontra o elemento resultado no HTML
  const containerResultado = document.querySelector('#resultado-combustivel');
  
  // Limpa mensagens anteriores
  containerResultado.innerHTML = '';
  
  // Cria um parágrafo
  const paragrafo = document.createElement('p');
  
  // Define a cor de acordo com o resultado
  if (foiSucesso) {
    paragrafo.classList.add('paragrafo-resultado'); // Verde para sucesso
  } else {
    paragrafo.classList.add('bad'); // Vermelho para erro
  }
  
  // Coloca o texto
  paragrafo.innerHTML = mensagem;
  
  // Exibe na página
  containerResultado.appendChild(paragrafo);
}

// ============================================================
// 📝 CHECKLIST DO QUE VOCÊ PRECISA FAZER:
// ============================================================
// □ Selecionar o formulário com querySelector
// □ Adicionar addEventListener com o evento 'submit'
// □ Usar e.preventDefault() para evitar recarregar
// □ Capturar os valores dos inputs (distancia e litros)
// □ Converter para números com Number()
// □ Validar se os valores são maiores que 0
// □ Calcular: consumo = distancia / litros
// □ Usar toFixed(2) para 2 casas decimais
// □ Criar uma mensagem bonita
// □ Chamar mostrarResultado com a mensagem e true (ou false se erro)

// ============================================================
// 🎯 EXTRA (Desafio adicional - Opcional):
// ============================================================}
// Se você terminar e quiser um desafio:
// - Mostre também qual foi a distância e litros digitados
// - Calcule quanto custaria percorrer 100km (você pode pedir o preço do litro)
// - Classifique o consumo como "Ótimo", "Bom", "Normal" ou "Alto"
