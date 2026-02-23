const usuarios = [
  { nome: 'Allan', cargo: 'Desenvolvedor' },
  { nome: 'Rebeca', cargo: 'UI/UX Designer' },
  { nome: 'Jamilton', cargo: 'Gerente de Projetos' }
];

// * PASSO 1: Selecionar o "Ponto de Ancoragem" no HTML
//   Buscamos na página o elemento que vai servir como "pai"
//   para todo o conteúdo novo que vamos criar.
const container = document.querySelector('.container');

// * PASSO 2: Iniciar o Loop
//   Vamos repetir o bloco de código abaixo UMA VEZ para cada
//   item (objeto) que existe dentro do array 'usuarios'.
for (let i = 0; i < usuarios.length; i++) {
  
  // * PASSO 3: Extrair os Dados (Desestruturação)
  //   Pegamos o objeto atual do loop (usuarios[i]) e extraímos
  //   as propriedades 'nome' e 'cargo' para variáveis fáceis de usar.
  let { nome, cargo } = usuarios[i];

  // * PASSO 4: Criar os Elementos HTML na Memória
  //   Aqui, criamos as "caixas" HTML. Elas existem no JavaScript,
  //   mas ainda não estão na página e nem têm conteúdo.
  let cardDiv = document.createElement('div');
  let nomeH3 = document.createElement('h3');
  let cargoP = document.createElement('p');

  // * PASSO 5: Criar o Conteúdo (Texto) na Memória
  //   Aqui, criamos os "nós de texto" (o recheio) que irão
  //   entrar nas "caixas" que acabamos de criar.
  let textoNome = document.createTextNode(nome);
  let textoCargo = document.createTextNode(cargo);

  // ===================================================================
  // ? A LÓGICA DO 'appendChild' (Montagem de Dentro para Fora)
  //   O appendChild() significa "adicionar como filho".
  //   A regra é: PAI.appendChild(FILHO)
  // ===================================================================

  // * PASSO 6: Colocar o "Recheio" (Texto) dentro dos Elementos
  //   PAI: nomeH3 (o <h3> vazio)
  //   FILHO: textoNome (o texto "Allan", por exemplo)
  //   Resultado: <h3>Allan</h3> (agora montado na memória)
  nomeH3.appendChild(textoNome);

  //   PAI: cargoP (o <p> vazio)
  //   FILHO: textoCargo (o texto "Desenvolvedor")
  //   Resultado: <p>Desenvolvedor</p> (montado na memória)
  cargoP.appendChild(textoCargo);

  // * PASSO 7: Montar o "Card"
  //   Agora que nossos <h3> e <p> estão prontos (com texto dentro),
  //   vamos adicioná-los como filhos dentro da <div> principal do card.
  //   PAI: cardDiv (a <div> vazia)
  //   FILHOS: nomeH3 (já pronto) e cargoP (já pronto)
  cardDiv.appendChild(nomeH3);
  cardDiv.appendChild(cargoP);
  //   Resultado: <div><h3>Allan</h3><p>Desenvolvedor</p></div>

  // * PASSO 8: Adicionar a Classe CSS (BUG 4 Corrigido)
  //   Adicionamos a classe 'card' na nossa <div> para que o
  //   estilo CSS (a <style> no HTML) possa ser aplicado a ela.
  cardDiv.classList.add('card');

  // * PASSO 9: Adicionar o Card Pronto na Página!
  //   Finalmente, pegamos o card inteiro e montado (cardDiv)
  //   e o adicionamos como filho no 'container' (PASSO 1).
  container.appendChild(cardDiv);
}