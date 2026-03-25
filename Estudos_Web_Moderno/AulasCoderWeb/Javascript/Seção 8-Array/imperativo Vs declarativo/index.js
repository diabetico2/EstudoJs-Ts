const alunos = [
  { nome: "joão", nota: 7 },
  { nome: "maria", nota: 8 },
];
// imperativa
let total1 = 0 
for (var i = 0;i < alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

