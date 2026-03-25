const tarefas = [
  { texto: 'Estudar o loop "for "', concluida: true },
  { texto: "Fazer a Tarefa 4 ", concluida: false },
  { texto: "Entender .appendChild() ", concluida: true },
  { texto: "Descansar ", concluida: false },
];

// * Seleciona o container
const container = document.querySelector(".container-tarefas");

// * Cria a lista "mãe" que vai guardar os itens <li>
const listaUl = document.createElement("ul");

for (let i = 0; i < tarefas.length; i++) {
  let { texto, concluida } = tarefas[i];

  // * Criando o elemento <li>
  let itemLi = document.createElement("li");

  // * Criando o texto
  let textoLi = document.createTextNode(texto);
  let status = document.createTextNode(concluida);

  //   O 'container' não deve receber o texto diretamente.
  itemLi.appendChild(textoLi);
  itemLi.appendChild(status);
  //   container.appendChild(itemLi);
  listaUl.appendChild(itemLi); // ambos o de cima quanto esse estava certo, mas essa é a correção ideal
  // já que a ordem vai ser > desestruturação > textoLi vai guardar texto, e status vai guardar status, depois o itemLi vai receber
  // os dois, já que ele é lista, o listaUl vai receber o itemLi, e o container que vai receber o lista Ul, ou seja
  // desestruturação>textoLi>texto & status > concluida > itemLi > listaUl > container

  // * Lógica para tarefas concluídas
  if (concluida === true) {
    itemLi.classList.add("concluida");
  }
}

container.appendChild(listaUl);
