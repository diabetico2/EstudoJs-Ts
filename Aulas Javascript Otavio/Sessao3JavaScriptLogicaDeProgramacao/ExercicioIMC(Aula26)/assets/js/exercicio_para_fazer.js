// ============================================================
// EXERCÍCIO PARA VOCÊ FAZER SOZINHO: CONSUMO DE COMBUSTÍVEL
// ============================================================
// Objetivo: Criar uma calculadora que mostra quantos km/l o carro fez
// Fórmula: Consumo (km/l) = Distância percorrida / Litros gastos

// 💡 DICA 1: Comece selecionando o formulário com querySelector
// Procure por um id no HTML chamado 'formulario-combustivel'
// Armazene isso em uma variável chamada 'formularioCombustivel'

// TODO: Código aqui - Selecione o formulário

// 💡 DICA 2: Adicione um evento 'submit' ao formulário
// Use addEventListener, assim como no exercício anterior
// A função dentro do addEventListener deve ter um parâmetro para o evento (ex: 'e' ou 'event')

// TODO: Código aqui - Adicione o addEventListener

// 💡 DICA 3: Dentro da função do submit, faça isto:
// - Use e.preventDefault() para evitar recarregar a página
// - Capture os inputs com id='distancia' e id='litros'
// - Converta os valores para números usando Number()
// - Armazene em variáveis: distanciaPercorrida e litrosGastos

// TODO: Código aqui - Implemente as validações

// 💡 DICA 4: Valide os dados
// - Verifique se distanciaPercorrida é válida (maior que 0)
// - Verifique se litrosGastos é válida (maior que 0)
// - Se for inválido, chame a função mostrarResultado com a mensagem de erro

// TODO: Código aqui - Calcule o consumo

// 💡 DICA 5: Calcule o consumo
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
// ============================================================
// Se você terminar e quiser um desafio:
// - Mostre também qual foi a distância e litros digitados
// - Calcule quanto custaria percorrer 100km (você pode pedir o preço do litro)
// - Classifique o consumo como "Ótimo", "Bom", "Normal" ou "Alto"
