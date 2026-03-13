console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("bia", "Carlos", "Ana");
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados.length);

aprovados[9] = "Rafa"; // por pular direto pro 9, os elementos entre 3 e 9 ficam indefinidos

console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados)
aprovados.sort() // ordernar
console.log(aprovados)
delete aprovados[1] // exclui
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(
    1,                // índice de início para inserção/remoção
    0,                // quantidade de elementos a remover (0 = não remove nenhum)
    'Elemento1', 
    'Elemento 2'      // elementos a serem adicionados a partir do índice informado
)
console.log(aprovados)