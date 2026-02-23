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
    
    // ? 1. Desestruture para pegar os DADOS
    let {produto, qtd} = listaDeCompras[i]

    // ? 2. Crie a TAG HTML que você quer.
    //    (Para uma lista <ul>, qual tag você usa para cada item?)
    //    * Dica: document.createElement('li');
    let itemDaLista = document.createElement('li')

    // ? 3. Crie o TEXTO que vai dentro do <li>.
    //    (Use seus super-poderes de Template String!)
    //    * Dica: `Produto: ${produto} (Quantidade: ${qtd})`
    let textoDoItem = `Produto ${produto} (Quantidade ${qtd})`
    
    // ? 4. Crie o NÓ DE TEXTO
    //    (Igualzinho ao main.js!)
    //    * Dica: document.createTextNode(textoDoItem)
    let noDeTexto = document.createTextNode(textoDoItem)

    // ? 5. Coloque o TEXTO DENTRO da TAG <li>
    //    * Dica: itemDaLista.appendChild(...)
   itemDaLista.appendChild(noDeTexto)
    // ? 6. Coloque a TAG <li> DENTRO do CONTAINER <ul>
    //    * Dica: containerLista.appendChild(...)
    containerLista.appendChild(itemDaLista)
}