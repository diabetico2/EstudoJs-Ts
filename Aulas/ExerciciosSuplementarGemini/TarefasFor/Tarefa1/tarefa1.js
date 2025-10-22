const listaDeCompras = [
  { produto: 'Arroz 5kg', qtd: 1 },
  { produto: 'Leite (caixa)', qtd: 12 },
  { produto: 'Café 500g', qtd: 2 },
  { produto: 'Pão de forma', qtd: 1 }
];

// * Seleciona o local onde vamos inserir os itens
const containerLista = document.querySelector('.lista-compras');

// * O loop já está pronto para você
for (let i = 0; i < listaDeCompras.length; i++) {
  // TODO: Complete a lógica aqui dentro

  // ? 1. Desestruture o objeto para pegar 'produto' e 'qtd'
  //    (lembre-se: let { ... } = listaDeCompras[i])

  // ? 2. Crie o elemento de lista (a tag <li>)
  //    (use document.createElement())

  // ? 3. Crie o texto que vai dentro do <li>
  //    (ex: "Arroz 5kg (1 unidade)")
  //    (Dica: use template string para juntar o produto e a qtd!)
  //    (use document.createTextNode())

  // ? 4. Adicione o texto (passo 3) dentro do <li> (passo 2)
  //    (use .appendChild())

  // ? 5. Adicione o <li> (passo 2) dentro do container '.lista-compras'
  //    (use containerLista.appendChild(...))
}