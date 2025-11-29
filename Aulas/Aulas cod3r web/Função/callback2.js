const notas = [7.7, 6.5, 8.0, 9.3, 4.5, 8.1, 7.0, 5.6]

//* sem callback:
let notasBaixas1 = []
let notasBaixas2 = []

for (let i in notas){
    if (notas[i]< 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


// ! com callback:
// Callback: é uma função passada como argumento para outra função
// (por exemplo, para `filter`, `map`, `forEach`). A função receptora
// chama o callback para decidir/realizar algo sobre cada elemento.
// Ex.: aqui `filter` usa o callback para testar se a nota é menor que 7.

notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)
// * com callback (arrow function):
const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)