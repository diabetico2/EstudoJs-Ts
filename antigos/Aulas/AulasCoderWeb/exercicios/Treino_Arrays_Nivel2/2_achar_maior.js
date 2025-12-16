// EXERCICIO 2: CACA BUGS (LOGICA INVERTIDA)
// Objetivo: Encontrar o MAIOR numero da lista.
// Problema atual: Ele esta imprimindo o numero errado ou o menor.

const numeros = [10, 50, 3, 99, 2];
let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    // ! O BUG ESTA NESTE IF:
    // Estamos querendo o MAIOR. Se o numero atual for ... que o maiorNumero, devemos trocar.
    if (numeros[i] > maiorNumero) { 
        maiorNumero = numeros[i];
    }
}

console.log("O maior numero e: " + maiorNumero);
