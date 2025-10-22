const imagens = [
  { 
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvZGV8ZW58MHx8fHwxNjE4NTg3MzAy&ixlib=rb-1.2.1&q=80&w=400', 
    alt: 'Um notebook exibindo código em uma mesa' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1526498460520-4c246339d12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxKYXZhU2NyaXB0fGVufDB8fHx8MTYxODU4NzM0MQ&ixlib=rb-1.2.1&q=80&w=400', 
    alt: 'Um monitor com o logo do JavaScript'
  },
  { 
    src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxjb2Rpbmd8ZW58MHx8fHwxNjE4NTg3MzU0&ixlib=rb-1.2.1&q=80&w=400', 
    alt: 'Uma pessoa digitando em um notebook com luzes de LED'
  }
];

// TODO: Escreva seu código aqui.

// 1. Selecione a '.galeria-container'.
// 2. Crie o loop 'for' para iterar sobre o array 'imagens'.
// 3. Dentro do loop:
//    a. Desestruture para pegar 'src' e 'alt'.
//    b. Crie um elemento <img> (document.createElement('img')).
//    c. Defina o atributo 'src' da imagem (ex: imgCriada.src = src).
//    d. Defina o atributo 'alt' da imagem (ex: imgCriada.alt = alt).
//    e. Adicione (appendChild) a imagem criada ao container da galeria.