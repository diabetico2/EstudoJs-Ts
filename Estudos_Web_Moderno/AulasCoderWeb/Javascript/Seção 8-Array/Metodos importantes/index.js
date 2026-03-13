const pilotos = ["A", "B", "C", "D"];
pilotos.pop(); //remove o ultimo elemento
console.log(pilotos);

pilotos.push("E"); // insere um novo valor no ultimo array
console.log(pilotos);

pilotos.shift(); // apaga o primeiro
console.log(pilotos);

pilotos.unshift("F"); // coloca o valor no primeiro array
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "G", "H");
console.log(pilotos)


//remover
pilotos.splice(3, 1)// começa no indice 3, mas remve só um elemento (nesse caso, H)
console.log(pilotos)

const alguns = pilotos.slice(2) // pega um novo array a partir do indicie selecionado ( no caso, ele começa no indice 2 (g))
console.log(alguns)

const alguns2 = pilotos.slice(1, 4)
console.log(alguns2)