// Array de objetos, cada objeto descreve qual tag criar e qual texto inserir nela
const elementos = [
    { tag: 'p', texto: 'Frase1' },
    { tag: 'div', texto: 'Frase2' },
    { tag: 'footer', texto: 'Frase3' },
    { tag: 'section', texto: 'Frase4' }
]

// Seleciona no DOM o primeiro elemento que possui a classe "container"
// (retorna null se não existir)
const container = document.querySelector('.container')

// Cria um elemento <div> que funcionará como "pai" para as tags que vamos criar
const div = document.createElement('div');

// Percorre o array "elementos" usando um for clássico
for (let i = 0; i < elementos.length; i++) {
    // Desestrutura o objeto atual para obter a tag e o texto
    let { tag, texto } = elementos[i]

    // Cria um elemento HTML com o nome da tag (ex: 'p', 'div', 'footer', ...)
    let tagCriada = document.createElement(tag);

    // Cria um nó de texto contendo o texto que será colocado dentro da tag criada
    let textoCriado = document.createTextNode(texto)

    // Anexa o nó de texto como filho da tag criada.
    // Ex.: <p>Frase1</p>
    tagCriada.appendChild(textoCriado)

    // Anexa a tag criada (com seu texto) à <div> pai criada antes do loop.
    // Isso monta a estrutura antes de inserir no container final.
    div.appendChild(tagCriada)
}

// Finalmente, anexa a <div> contendo todas as tags criadas ao elemento com classe "container"
container.appendChild(div)