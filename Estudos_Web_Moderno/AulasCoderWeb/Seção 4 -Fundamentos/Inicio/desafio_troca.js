let a = 7;
let b = 8;
let temp = a; // a variavel temp pega o valor de A

//antes da troca
console.log ("valor de A: ", a, "valor de B:", b);

// depois da troca
//Nesse caso, ao trocar os valores, a recebe o valor de B, e o B recebe o valor de A antes da troca pela variavel temp
a = b;
b = temp;

console.log ("valor de A: ", a, "valor de B:", b);