const peso1 = 1.0;
const peso2 = Number(2.1);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // * Para verificar se a variavel peso 1 é integer(inteiro)
console.log(Number.isInteger(peso2)); // * pelo valor de peso2 ser 2.1, o interger é dado como falso

const avaliacao1 = 9.81;

const avaliacao2 = 4.21;

const total = avaliacao1 * peso1 * avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // * toFixed é uma função para arrumar as casas decimais para o valor não ficar grande
console.log(media.toString(2)); // * para converter em binario
console.log (typeof media); // * ver o tipo