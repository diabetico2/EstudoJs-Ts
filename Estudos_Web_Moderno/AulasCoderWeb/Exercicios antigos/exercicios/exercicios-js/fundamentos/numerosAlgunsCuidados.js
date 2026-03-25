console.log(7 / 0);
console.log("10" / 2); // ! Por JS ser uma linguagem de tipagem fraca, ele divide
// ! "string"(letras ou palavras) "com numbers" ( numeros )
// !  coisa que não acontece normalmente em outras linguagens mais robustas,
console.log("10,2" / 2); // ! mas se o valor da string não inteiro for escrito com "," em vez de "." ele da NaN (not a number)
console.log("10.2" / 2);
console.log("3" + 2); // ! em vez de ser 5, ele vai juntas os dois, formando 32
console.log("show" * 2);
console.log(0.1 + 0.7);
// console.log(10.toString(2)) // ! Dessa forma ele dá erro, pois fora de parenteses, ele considera o 10 uma função, e não um numero

console.log((10).toString(2));
console.log((10.393442).toFixed(3));
