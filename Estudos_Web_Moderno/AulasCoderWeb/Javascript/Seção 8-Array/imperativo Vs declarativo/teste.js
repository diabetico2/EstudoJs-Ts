const notas = [10, 5, 8, 4, 7]
const aprovadosDobrados = []

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        aprovadosDobrados.push(notas[i] * 2)
    }
}
// O que esse código faz: pega as notas >= 7 e dobra o valor delas.

const vNota = nota => nota >= 7
const dNota = nota => (nota * 2)

const resul = notas.filter(vNota).map(dNota)

console.log(resul)
               