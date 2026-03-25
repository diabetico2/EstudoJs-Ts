// EXERCICIO 1: O ACUMULADOR (QUASE PRONTO)
// Objetivo: Somar todos os valores do array 'precos' na variavel 'total'.

const precos = [10.50, 20.00, 5.50, 100.00];
let total = 0;

for (let i = 0; i < precos.length; i++) {
    // TODO: Pegue o preco atual (precos[i]) e adicione a variavel 'total'.
    // Dica: total = total + ...  OU  total += ...
    total += precos[i]
}

console.log("O total da compra e: R$" + total);
