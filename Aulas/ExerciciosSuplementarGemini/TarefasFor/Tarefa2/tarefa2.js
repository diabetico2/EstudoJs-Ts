const usuarios = [
  { nome: 'Allan', cargo: 'Desenvolvedor' },
  { nome: 'Rebeca', cargo: 'UI/UX Designer' },
  { nome: 'Jamilton', cargo: 'Gerente de Projetos' }
];

const container = document.querySelector('.container');

for (let i = 0; i < usuarios.length; i++) {
  let { nome, cargo } = usuarios[i];

  // * Criando os elementos
  let cardDiv = document.createElement('div');
  let nomeH3 = document.createElement('h3');
  let cargoP = document.createElement('p');

  // * Criando os textos
  let textoNome = document.createTextNode(nome);
  let textoCargo = document.createTextNode(cargo);

  // ! BUG 2: O texto está sendo criado, mas não está sendo adicionado
  // !        dentro dos elementos <h3> e <p>. (Falta um appendChild aqui!)

// * Adicionando os elementos ao card
cardDiv.appendChild(nomeH3);
cardDiv.appendChild(cargoP);
cardDiv.appendChild(textoNome)
cardDiv.appendChild(textoCargo)


// ! BUG 3: ...

document.textContent(`Usuario ${textoNome} cargo ${textoCargo}`) // ! Erro 3
container.appendChild(cardDiv); // ! Erro 4

  // ! BUG 4: O card não tem a classe CSS.
  // (Dica: para adicionar uma classe, use elemento.classList.add('card'))
}