// Escreva uma função chamada chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number), retorne true se a imagem estiver no modo paisagem ( largura > altura)


const ePaisagem = (largura,altura) => (largura > altura) ? true : false
console.log(ePaisagem(60,40))