const imagens = [
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvZGV8ZW58MHx8fHwxNjE4NTg3MzAy&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Um notebook exibindo código em uma mesa",
  },
  {
    src: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    alt: "Um monitor com o logo do JavaScript",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxjb2Rpbmd8ZW58MHx8fHwxNjE4NTg3MzU0&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Uma pessoa digitando em um notebook com luzes de LED",
  },
];
const container = document.querySelector(".galeria-container");
for (let img = 0; img < imagens.length; img++) {
  let { src, alt } = imagens[img]; //

  let imagemCriada = document.createElement("img");
  //   nós definimos as propriedades .src e .alt do elemento.
  imagemCriada.src = src; // O navegador lê isso e busca a imagem
  imagemCriada.alt = alt; // O navegador usa isso como texto alternativo

  //   Não precisamos de appendChild interno, pois a imagem
  //   não tem "filhos" de texto.
  container.appendChild(imagemCriada);
}
